export async function ping(bot,msg){
    await bot.sendMessage(msg.key.remoteJid,{text:"🏓 Pong!"})
}

