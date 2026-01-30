export async function antiviewonce(bot,msg){
    if(msg.message?.viewOnceMessage){
        await bot.sendMessage(msg.key.remoteJid,{text:"👀 ViewOnce is blocked!"})
    }
}



