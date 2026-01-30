import { database } from "../lib/db.js"
export async function antilink(bot,msg){
    const text = msg.message?.conversation || ""
    if(/https?:\/\//.test(text)){
        await bot.sendMessage(msg.key.remoteJid,{text:"🔗 Links are not allowed!"})
        database.groups[msg.key.remoteJid]={antilink:true}
    }
}






