const express = require("express");

const connectDb = require("./config/database");

const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());

app.use(express.json());

const authRouter=require("./routes/auth");

const profileRouter=require("./routes/profile");

const requestRouter=require("./routes/requests");

const userRouter=require("./routes/user")

app.use("/",authRouter);
app.use("/",profileRouter);
app.use("/",requestRouter);
app.use("/",userRouter);
connectDb()
  .then(() => {
    console.log("Succesfully");
    app.listen(7777, () => {
      console.log("Connection at 7777");
    });
  })
  .catch((err) => {
    console.log("erorr");
  });
