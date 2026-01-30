export function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)) }
export function randomDelay(min=500,max=1500){ return Math.floor(Math.random()*(max-min+1))+min }
