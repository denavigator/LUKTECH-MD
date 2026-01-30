import { getAIReply } from "../lib/ai.js"
export async function autovoice(bot,msg){
    const reply = await getAIReply(msg.message?.conversation || "")
    await bot.sendMessage(msg.key.remoteJid,{voice:{url:"dummy.ogg"}, ptt:true})
    await bot.sendMessage(msg.key.remoteJid,{text:reply})
}




