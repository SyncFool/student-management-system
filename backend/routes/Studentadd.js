const express = require("express");
const router = express.Route();
const userData = require("../models/userDataModel");

//create
router.post("/", async (req, res) => {
  console.log(req.body);
  const {
    FirstName,
    LastName,
    Gender,
    DateOfBirth,
    Roll,
    BloodGroup,
    Religion,
    EMail,
    Class,
    Section,
    AdmissionID,
    Phone,
  } = req.body;
  try {
    const userAdded = await userData.create({
      FirstName: FirstName,
      LastName: LastName,
      Gender: Gender,
      DateOfBirth: DateOfBirth,
      Roll: Roll,
      BloodGroup: BloodGroup,
      Religion: Religion,
      EMail: EMail,
      Class: Class,
      Section: Section,
      AdmissionID: AdmissionID,
      Phone: Phone,
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
