
const Shoes=require('../schema/shoesSchema')
const mongoose=require('mongoose')
 const shoesControllers={
    
    add:async(req,res)=>{
        
        const {name,size,price,color,img}=req.body
        try {
            const shoe=await Shoes.create({name:name,size:size,price:price,color:color,CreatedAt:new Date(),img:img})
            res.send("added")
       
        } catch (error) {
            res.send("erreur")
        }
      


     
       

    },
    get:async(req,res)=>{

       try {
            const shoes=await Shoes.find()
            res.send(shoes)
       } catch (error) {
        
       }


    },
    update:async(req,res)=>{

    },
    delete:async(req,res)=>{

    }
}
module.exports=shoesControllers