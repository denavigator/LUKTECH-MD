export async function autoreact(bot,msg){
    await bot.sendMessage(msg.key.remoteJid,{reaction:{text:"👍", key:msg.key}})
}

