// import the model
const Todo = require("../models/Todo")

// defining the controller

exports.deleteTodo = async(req,res) => {
    try{
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);
        res.status(200).json({
            success:true,
            message:"Todo DELETED",
        })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            message:"Data Not Deleted"
        })
    }
}