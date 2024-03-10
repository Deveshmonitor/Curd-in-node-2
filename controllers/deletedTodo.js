const Todo = require("../models/Todo")

exports.deletedTodo = async(req,res) => {
            try{
                    const id  = req.params.id;
                     await Todo.findByIdAndDelete({_id:id})

                    res.status(200).json({
                        success:true,
                        messsage: `Todo deleted successsfull ${id} !`
                     })
            }
            catch(err){
                console.log(err)
                console.error(err)
                res.status(500).json({
                    success:false,
                    messsage: "server error deleted this"
                })
            }
}