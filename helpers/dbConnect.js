
const mongoose=require('mongoose')

const connect=()=>{

    try {
        mongoose.connect("mongodb://localhost:27017/peak")
        console.log("connected ")
    } catch (error) {
        
        console.log("error")
    }

}
module.exports= connect