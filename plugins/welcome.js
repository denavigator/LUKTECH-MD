export async function welcome(bot,msg){
    const text = msg.message?.conversation || ""
    if(text.toLowerCase().includes("hi") || text.toLowerCase().includes("hello")){
        await bot.sendMessage(msg.key.remoteJid,{text:`👋 Welcome! I am ${bot.config.botName}`})
    }
}




