const express = require("express");
const { connectMongoDB } = require("./configs/ds");
const { userRouter } = require("./routes/registerRoute");
const { userModel } = require("./models/userModel");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Welcome");
});


app.listen(process.env.PORT, async () => {
  try {
    await connectMongoDB();
    console.log("connected to MongoDB");
    console.log(`Server Running ${process.env.PORT}`);
  } catch (err) {
    console.log(err,"no"); 
  }
});
