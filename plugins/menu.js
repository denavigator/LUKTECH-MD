export async function menu(bot,msg){
    await bot.sendMessage(msg.key.remoteJid,{text:"📋 Menu:\n.ping\n.owner\n.menu"})
}












