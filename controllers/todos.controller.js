const Todo = require("../models/todo.model");

//++++++++++++++NOTE+++++++++++++++
//ALWAYS RESPONSE WITH JSON OBJECT -we don't care what the client does on his side of the code

function getTodos(req, res, next) {
	Todo.find()
		.sort({ createdAt: -1 })
		.then((todos) => {
			res.status(200).json({ todos: todos });
		})
		.catch((err) => {
			resstatus(500).json({ message: "Request Unsucessful", Error: err });
		});
}

function createTodo(req, res, next) {
	const todo = new Todo(req.body);

	todo
		.save()
		.then((result) => {
			res
				.status(200)
				.json({ message: "Createed Succssfully", createdTodo: todo });
		})
		.catch((err) => {
			res.status(500).json({ message: "Request Unsucessful", Error: err });
		});
}

async function updateTodo(req, res, next) {
	const id = req.params.id;
	const newText = req.body.text;

	const todo = await Todo.findById(id);

	if (!todo) {
		return res.status(404).json({ message: "document not found" });
	} else {
		todo.text = newText;

		todo
			.save()
			.then((result) => {
				res.status(200).json({
					message: "Updated Succssfully",
					update: result,
				});
			})
			.catch((err) => {
				res.status(500).json({ message: "Request Unsucessful", err: err });
			});
	}
}

function deleteTodo(req, res, next) {
	const id = req.params.id;

	Todo.findByIdAndDelete(id)
		.then((todo) => {
			if (!todo) {
				return res.status(404).json({ message: "Todo not found" });
			}
			res.status(200).json({ message: "Deleted Succssfully" });
		})
		.catch((err) => {
			res.status(500).json({ message: "Request Unsucessful", error: err });
		});
	// next();
}

//exporting modules as KVP(-----(K)ey (V)alue (P)airs-----)
module.exports = {
	getTodos: getTodos,
	createTodo: createTodo,
	updateTodo: updateTodo,
	deleteTodo: deleteTodo,
};
