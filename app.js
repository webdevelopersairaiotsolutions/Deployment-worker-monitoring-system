require("dotenv").config();
const express = require("express");
const path = require("path"); // Import the path module
const app = express();
require("./db/conn");
const router = require("./routes/router");
const cors = require("cors");
const cookiParser = require("cookie-parser");
const port = 8009;

// Serve static files from the React app build folder
app.use(express.static(path.join(__dirname, "build")));

// app.get("/",(req,res)=>{
//     res.status(201).json("server created")
// });

app.use(express.json());
app.use(cookiParser());
app.use(cors());
app.use(router);

// Include the video streaming code
require("./videoStream");
require("./videoStream2");

app.listen(port, () => {
  console.log(`server start at port no : ${port}`);
});
