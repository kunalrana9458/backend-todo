const express = require("express");
const app = express();

// load config from env file
require("dotenv").config();
const PORT = process.env.PORT;

// middleware to parse json request body
app.use(express.json());

// import routes for TODO API
const todoRoutes = require("./routes/todos");

// what is mouting

// mount tht todo api
app.use("/api/v1",todoRoutes);

// start server
app.listen(PORT,() => {
    console.log(`Server Started at ${PORT}`);
})
 
// now we will do DB Connection
const dbConnect = require("./config/database");
dbConnect();

// default Route 
app.get("/",(req,res) => {
    res.send('<h1>This is Hmepage</h1>')
})