import { database } from "./db.js"
import { menu } from "../plugins/menu.js"
import { ping } from "../plugins/ping.js"
import { owner } from "../plugins/owner.js"
import * as plugins from "../plugins/index.js"

export async function handleMessage(bot, msg) {
    const text = msg.message?.conversation || ""
    if(!text) return

    if(text.startsWith(bot.config.prefix)){
        const command = text.slice(bot.config.prefix.length).split(" ")[0].toLowerCase()
        switch(command){
            case "menu": await menu(bot,msg); break;
            case "ping": await ping(bot,msg); break;
            case "owner": await owner(bot,msg); break;
            default:
                if(plugins[command]) await plugins[command](bot,msg)
                break;
        }
    }
}


















