export const spamCounter={}
export function checkSpam(user){
    if(!spamCounter[user]) spamCounter[user]=0;
    spamCounter[user]++
    return spamCounter[user]>5
}




