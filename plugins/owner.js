export async function owner(bot,msg){
    await bot.sendMessage(msg.key.remoteJid,{text:`👑 Owner: ${bot.config.owner.join(", ")}`})
}

