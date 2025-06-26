import dotenv from "dotenv"
import connectDB from "./db/dbc.js";

dotenv.config({
    path:'./env'
})





connectDB()