const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todos.route");
const CORShandler = require("./middleware/CORAhandler");

const app = express();
app.use(CORShandler);

let port1 = 2000; // PORT =1
const uri = "mongodb://localhost:27017/todosAPI"; // connection string

app.use(express.json()); // to parse json objects around the API

app.use("/todos", todoRoutes); // setting todo routes

//If no request is trigered
app.use((req, res) => {
	res.status(500).json({ message: "Somthing went wrong !!" });
});

//connecting to database
//using mongoose in the API
mongoose
	.connect(uri)
	.then((res) => {
		app.listen(port1, () => {
			console.log(`Listening on port ${port1}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
