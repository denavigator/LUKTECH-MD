import { checkSpam } from "../lib/spam.js"
export async function antispam(bot,msg){
    const sender = msg.key.participant || msg.key.remoteJid
    if(checkSpam(sender)){
        await bot.sendMessage(msg.key.remoteJid,{text:"⚠️ You are spamming messages!"})
    }
}





