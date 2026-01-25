import type { Request, Response } from "express";
import axios from "axios";
import { getUserByEmail } from "../database/getUser.js";
import { createUser } from "../database/createUser.js";
import jwt from "jsonwebtoken";

export async function gauthRedirect(req: Request, res: Response) {
  const { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } = process.env;

  if (!GOOGLE_CLIENT_ID || !GOOGLE_REDIRECT_URI) {
    return res.status(500).json({
      error: "Google OAuth environment variables not configured",
    });
  }

  const params = new URLSearchParams({
    client_id: GOOGLE_CLIENT_ID,
    redirect_uri: GOOGLE_REDIRECT_URI,
    response_type: "code",
    scope: "openid email profile",
  });

  const googleAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;

  res.redirect(googleAuthURL);
}

export async function gauthCallback(req: Request, res: Response) {
  const code = req.query.code as string | undefined;

  if (!code) {
    return res.status(400).json({ error: "Authorization code missing" });
  }

  const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URI } =
    process.env;

  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REDIRECT_URI) {
    return res.status(500).json({
      error: "Google OAuth environment variables not configured",
    });
  }

  try {
    const tokenResponse = await axios.post(
      "https://oauth2.googleapis.com/token",
      {
        client_id: GOOGLE_CLIENT_ID,
        client_secret: GOOGLE_CLIENT_SECRET,
        redirect_uri: GOOGLE_REDIRECT_URI,
        grant_type: "authorization_code",
        code,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    const { access_token } = tokenResponse.data;

    const userResponse = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );

    const googleUser = userResponse.data;

    const user = await getUserByEmail(googleUser.email);
    if (user) {
      jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET!,
        { expiresIn: "8h" },
        (err: unknown, token: string | undefined) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "Error generating token", error: err });
          }
          res.cookie("auth_token", token, {
            httpOnly: true,
            secure: false, 
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000, 
          });
          res.redirect(process.env.FRONTEND_URL || "http://localhost:5173/shop");
        },
      );
    }

    const newUser = await createUser(googleUser.email, "", googleUser.name);

    const userCreated = await getUserByEmail(googleUser.email);

    if (newUser && userCreated) {
      jwt.sign(
        { userId: userCreated.id },
        process.env.JWT_SECRET!,
        { expiresIn: "8h" },
        (err: unknown, token: string | undefined) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "Error generating token", error: err });
          }
          
          res.cookie("auth_token", token, {
            httpOnly: true,
            secure: false, 
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000, 
          });
          res.redirect(process.env.FRONTEND_URL || "http://localhost:5173/shop");
        },
      );
    }
  } catch (error) {
    console.log("Google OAuth error:", error);
    return res.status(500).json({ messaage: "Google OAuth failed", error });
  }
}
