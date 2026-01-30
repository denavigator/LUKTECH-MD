export async function antidelete(bot,msg){
    if(msg.message?.protocolMessage?.type){
        await bot.sendMessage(msg.key.remoteJid,{text:"❌ You cannot delete messages!"})
    }
}



