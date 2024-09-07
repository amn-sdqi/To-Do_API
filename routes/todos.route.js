const express = require("express");
const todosController = require("../controllers/todos.controller");

const router = express.Router();

router.get("/", todosController.getTodos); // get all TODOs

router.post("/", todosController.createTodo); // create a TODO

router.patch("/:id", todosController.updateTodo); // update exsisting TODO

router.delete("/:id", todosController.deleteTodo); // delete exsisting TODO

module.exports = router;
