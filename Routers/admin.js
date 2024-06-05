const express=require("express")
const router=express.Router();
const adminUsername='admin'
const adminPassword='admin'


//for admin login 
router.post("/adminLogin", (res,req)=>{
    const {username, password}=req.body
    if(username === adminUsername  || password === adminPassword){
        res.send("Admin is Here")
    }else{
        res.statusCode(401).send("unauthrized")
    }
})

module.exports=router;