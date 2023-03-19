
const mongoose=require('mongoose')


const shoesSchema=mongoose.Schema({
    name:{type:String,required:true},
    size:{type:Number,require:true},
    price:{type:Number,require:true},
    color:{type:String,required:true},
    img:{type:String,required:true},
    CreatedAt:Date,

})

const Shoes=mongoose.model('shoes',shoesSchema)

module.exports=Shoes