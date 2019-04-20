//console.log("Connected!");
var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
	//handle input
	if(input === "list") {
		listTodos();
	} else if(input === "new") {
		//ask for new todo
		var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
		console.log("Added Todo");
	}  else if (input === "delete"){
		var index = prompt("Enter index of todo to delete");
		todos.splice(index,1);
		console.log("Deleted Todo");
	}
	//ask again for new input
	input = prompt("What would you like to do?")
}
console.log("OK, YOU QUIT THE APP");