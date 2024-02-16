const express=require("express");
const router=express.Route();
const userData=require("../models/userDataModel");

//create
router.post("/",async(req,res)=>{
    console.log(req.body);
    const{FirstName,LastName,Gender,DateOfBirth,Roll,BloodGroup,Religion,EMail,Class,Section,AdmissionID,Phone}=req.body;
    try{
        const userAdded=await userData.create({
            FirstName:FirstName,
            LastName:LastName,
            Gender:Gender,
            DateOfBirth:DateOfBirth,
            Roll:Roll,
            BloodGroup:BloodGroup,
            Religion,Religion,
            EMail:EMail,
            Class:Class,
            Section:Section,
            AdmissionID:AdmissionID,
            Phone:Phone,
            
        });
        res.status(201).json(userAdded);
        
    }
    catch(error){
        console.log(error);
        res.status(400).json({error:error.message});
    }
});

module.exports=router;


//update
router.patch("/edit/:id",async(req,res)=>{
    const{id}=req.params;
    console.log("get body",req.body);
    console.log("get id",id);
    try{
        const updatedUser=await userData.findByIdAndUpdate(id,req.body,{
            new:true,
        });
        res.status(200).json(updatedUser);
    
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
});