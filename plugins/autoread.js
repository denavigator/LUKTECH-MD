export async function autoread(bot,msg){
    await bot.sendReadReceipt(msg.key.remoteJid, msg.key.participant)
}

