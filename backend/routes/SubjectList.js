const express=require("express");
const router=express.Route();
const userData=require("../models/userDataModel");

//create
router.post("/",async(req,res)=>{
    console.log(req.body);
    const{SubjectID,SubjectName,Class}=req.body;
    try{
        const userAdded=await userData.create({
            SubjectID:SubjectID,
            SubjectName:SubjectName,
            Class:Class,
        });
        res.status(201).json(userAdded);
        
    }
    catch(error){
        console.log(error);
        res.status(400).json({error:error.message});
    }
});

module.exports=router;