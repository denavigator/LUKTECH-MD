import { sleep, randomDelay } from "../lib/utils.js"
export async function humandelay(bot,msg){
    const delay = randomDelay(500,1500)
    await sleep(delay)
}



