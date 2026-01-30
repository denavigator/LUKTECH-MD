import db from "../lib/database.json" assert {type:"json"}
export async function antigroupmention(bot,msg){
    if(msg.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length){
        await bot.sendMessage(msg.key.remoteJid,{text:"🚫 Please do not mention everyone!"})
    }
}




