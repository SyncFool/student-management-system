const express = require("express");
const router = express.Route();
const userData = require("../models/teacherModel");
const cors= require("cors");
app.use(cors())

//create
router.post("/addTeacher", async (req, res) => {
  console.log(req.body);
  const {
    teacherId,
    name,
    gender,
    dob,
    mobileNo,
    joiningDate,
    qualifications,
    experience,
    username,
    emailId,
    password,
    address,
    city,
    state,
    zipcode,
    country
  } = req.body;
  try {
    const userAdded = await userData.create({
        TeacherId:TeacherId,
        Name:Name,
        Gender:Gender,
        DateOfBirth:DateOfBirth,
        Mobile:Mobile,
        JoiningDate:JoiningDate,
        Qualification:Qualification,
        Experience:Experience,
        Username :Username,
        EmailId:EmailId,
        Password:Password,
        RepeatPassword:RepeatPassword,
        Address:Address,
        City:City,
        State:State,
        ZipCode:ZipCode,
        Country:Country
    });
    res.status(201).json(userAdded);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

//Get
router.get("/", async (req, res) => {
  try {
    const allUsers = await userData.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//get single user
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await userData.findById({ _id: id });
    res.status(200).json(singleUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
