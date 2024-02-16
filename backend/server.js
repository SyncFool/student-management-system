const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv"); // it is used to handle env file

const userRoute = require("./routes/userRoute");

//  after importing dot env we should call its config file
dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.URI) // this address we should put in a secure file and we will use the value of file here then env works
  .then(() => {
    console.log("Connected Successfully");

    // we put it here only if the db is connected then only the server will start
    app.listen(process.env.PORT || 8000, (err) => {
      if (err) console.log(err);

      console.log("Running SuccessFully At", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

  app.use(userRoute);

