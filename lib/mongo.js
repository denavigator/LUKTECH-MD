import mongoose from "mongoose"
export function connectMongo(url){
    if(!url) return
    mongoose.connect(url)
        .then(()=>console.log("MongoDB connected"))
        .catch(console.log)
}





