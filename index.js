import startBot from "./lib/connection.js"
import "./pair/server.js"
import "./pair/panel.js"
import { connectMongo } from "./lib/mongo.js"
import dotenv from "dotenv"
dotenv.config()

connectMongo(process.env.MONGO_URL)
startBot()






