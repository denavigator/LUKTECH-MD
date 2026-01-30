import { default: makeWASocket } from "@whiskeysockets/baileys"
import P from "pino"
import { handleMessage } from "./handler.js"
import config from "../config.js"

export default function startBot() {
    const bot = makeWASocket({ printQRInTerminal: true, logger: P({ level: "silent" }) })
    bot.config = config

    bot.ev.on("messages.upsert", async ({ messages }) => {
        for(const msg of messages) await handleMessage(bot,msg)
    })

    bot.ev.on("connection.update", update => {
        if(update.connection==="close") console.log("Connection closed")
    })

    console.log("✅ LUKTECH-MD bot started!")
    return bot
}














