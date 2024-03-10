const Todo = require('../models/Todo')


exports.updateTodo = async(req,res) =>{
try{
 const id = req.params.id
 const {title,description} = req.body

 const Todoupdate = await Todo.findByIdAndUpdate({_id:id},{
    title,description,updatedAt: Date.now()})

 res.status(200).json({
    success:true,
    data:Todoupdate,
    messsage: `Todo update successsfull ${id} !`
 })
}
catch(err){
    console.log(err)
    console.error(err)
    res.status(500).json({
        success:false,
        message: "server error update this"
    })

}
}