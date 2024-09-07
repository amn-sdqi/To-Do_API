const mongoose = require("mongoose");

const Schema = mongoose.Schema; //creating schema instance / Not a function it's a property

//creating Todo document Schema
const todoSchema = new Schema(
	{
		text: { type: String, required: true },
	},
	{ timestamps: true }
);

const Todo = mongoose.model("todos", todoSchema); //converting shema to model and adding collection

module.exports = Todo;
