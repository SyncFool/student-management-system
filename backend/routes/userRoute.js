const express = require("express");
const User = require("../models/userModel");
const router = express.Router();


router.post("/", async (req, res) => {
  // for extracting data from body
  try {
    const { name, email, age } = req.body;

    // To create data in database
    const userAdded = await User.create({
      name: name,
      email: email,
      age: age,
    });

    res.status(201).json(userAdded);
  } catch (error) {
    console.log(error);
    res.send(400).json({ error: error.message });
  }
});

// to get the data of all user

router.get("/", async (req, res) => {
  try {
    const userData = await User.find();
    res.status(200).json(userData);
  } catch (error) {
    console.log(error);
    res.send(400).json({ error: error.message });
  }
});

// to get the data of single user

// router.get("/", async (req, res) => {
//     const {id} = req.params
//     try {
//       const userData = await User.findById();
//       res.status(200).json(userData);
//     } catch (error) {
//       console.log(error);
//       res.send(400).json({ error: error.message });
//     }
//   });

module.exports = router;