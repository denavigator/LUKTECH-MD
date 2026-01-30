import fs from "fs"
import path from "path"

const SESSION_NAME = "LUKTECH_MD_SESSION"
const AUTH_DIR = path.join("./auth", SESSION_NAME)
const CREDS_FILE = path.join(AUTH_DIR, "creds.json")

// Create auth folder if missing
if (!fs.existsSync(AUTH_DIR)) {
  fs.mkdirSync(AUTH_DIR, { recursive: true })
}

// Load session from ENV (Render / Vercel)
if (process.env.SESSION_ID && !fs.existsSync(CREDS_FILE)) {
  try {
    const sessionBuffer = Buffer.from(
      process.env.SESSION_ID,
      "base64"
    )

    fs.writeFileSync(CREDS_FILE, sessionBuffer)
    console.log("✅ LUKTECH-MD session loaded from ENV")
  } catch (err) {
    console.log("❌ Failed to load session:", err)
  }
               }import startBot from "./lib/connection.js"
import "./pair/server.js"
import "./pair/panel.js"
import { connectMongo } from "./lib/mongo.js"
import dotenv from "dotenv"
dotenv.config()

connectMongo(process.env.MONGO_URL)
startBot()






