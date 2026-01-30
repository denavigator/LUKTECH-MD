export async function autorecord(bot,msg){
    await bot.sendPresenceUpdate("recording", msg.key.remoteJid)
}

