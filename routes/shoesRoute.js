const router=require('express').Router()
const shoesControllers=require('../shopControllers]/shoesControllers')
router.post("/add",shoesControllers.add)
router.get('/get',shoesControllers.get)

module.exports=router