import express from "express";
import cors from "cors";
import { auth } from "./routes/auth";
import { userRoutes } from "./routes/userRoutes";
import { publicRoutes } from "./routes/publicRoutes";



const app = express()
const PORT:number = Number(process.env.PORT) || 3000;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}))
app.use(express.json())

app.use("/api/user", auth, userRoutes)
app.use("/api/", publicRoutes )



app.listen(PORT, "0.0.0.0", ()=>{console.log("app is listening on port " + PORT)})  