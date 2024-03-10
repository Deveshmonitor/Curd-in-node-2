const express = require("express")
const router = express.Router();

const {createTodo} = require("../controllers/createTodo");
const {getTodo,getbyId} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deletedTodo} = require("../controllers/deletedTodo");

router.post("/createTodo",createTodo);
router.get("/getTodo",getTodo);
router.get("/getTodo/:id",getbyId);
router.put("/updateTodo/:id",updateTodo);
router.delete("/delete/:id",deletedTodo);

module.exports  = router;
