import dotenv from "dotenv"
dotenv.config()
export default {
  botName: process.env.BOT_NAME,
  prefix: process.env.PREFIX,
  owner: process.env.OWNER.split(","),
  mode: process.env.MODE,
  port: process.env.PORT || 3000
}







