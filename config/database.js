const mongoose=require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("DB Connected Succesfully"))
    .catch((err) => {
        console.log("Issue in DB Connection");
        console.log(err.message);
        // what is the meaning of that line of code
        process.exit(1);
    })
} 
module.exports = dbConnect;