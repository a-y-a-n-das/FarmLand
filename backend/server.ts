import express from "express";
import cors from "cors";
import { auth } from "./routes/auth.ts";
import { userRoutes } from "./routes/userRoutes.ts";
import { publicRoutes } from "./routes/publicRoutes.ts";



const app = express()
const PORT:number = Number(process.env.PORT) || 3000;

app.use(cors())
app.use(express.json())

app.use("/api/user", auth, userRoutes)
app.use("/api/", publicRoutes )



app.listen(PORT, "0.0.0.0", ()=>{console.log("app is listening on port " + PORT)})  