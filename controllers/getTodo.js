// import the model
const Todo = require("../models/Todo")

// define the route handler
exports.getTodo = async(req,res) => {
    try{
        // fetch all todo items from database -:find function or method
        const todos = await Todo.find({}); 
        // update response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire todos data is fetched"
        })
    }
    catch(err){
        // if any occur during fetching the data from database
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server Error",
        })
    }
}

// controller for get todo item acc to id
exports.getTodoById = async(req,res) => {
    try{
        // extract todo item basis on id
        // fetch id
        const id = req.params.id;
        const todo = await Todo.findById({_id:id})

        // there is a error in a todo when we fetched by using id
        if(!todo){
            return res.status(400).json({
                success:true,
                message:"No Data Found with given Id",
            })
        }

        // data for given id found
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`
        })
    }
    catch(err){
        // if any occur during fetching the data from database
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server Error",
        })
    }
}