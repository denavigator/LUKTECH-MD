export async function autotype(bot,msg){
    await bot.sendPresenceUpdate("composing", msg.key.remoteJid)
}

