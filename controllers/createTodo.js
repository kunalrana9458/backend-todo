// import the model
const Todo = require("../models/Todo");

// define route handler
// when we perform operations on a DB then dont use main thred always use async await
exports.createTodo = async(req,res) => {
    try{
        // extract title and description from request body
        const{title,description} = req.body;
        // create a new Todo Object and insert into a DB
        const response = await Todo.create({title,description});
        // send a json response with success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry Created Sucessfully"
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"Internal Server Error",
            message:err.message,    
        })
    }
}