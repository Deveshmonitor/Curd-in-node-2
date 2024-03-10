const Todo = require("../models/Todo")

exports.getTodo = async(req,res) =>{

    try {
            const todos = await Todo.find({});
            res.status(200).json({
                success : true,
                data:todos,
                message: "You get Todos sucessfully",
            });
    }
    catch(err){
        console.error(err);
        console.log(err)
        res.status(500)
        .json({
            success:false,
            data: "internal server error",
            message:err.message,
        })
     }
}
exports.getbyId = async(req,res) =>{

    try {
            
            const id = req.params.id;
            const todo = await Todo.findById( {_id: id} )
            if(!todo){
                    res.status(404).json({
                        success:false,
                        message:"No data found with this id",
                    })
            }
            res.status(200).json({
                success : true,
                data:todo,
                message: `You get TodobyId ${id} sucessfully`,
            });
    }
    catch(err){
        console.error(err);
        console.log(err)
        res.status(500)
        .json({
            success:false,
            data: "internal server error",
            message:err.message,
        })
     }
}