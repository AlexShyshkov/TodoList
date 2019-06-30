'use strict'

let myTaskList = document.getElementsByTagName("li");
for (let i = 0; i < myTaskList.length; i++) {
	let span = document.createElement("span");
	let closeTaskBtn = document.createTextNode("X");
	span.className = "closeTaskBtn";
	span.appendChild(closeTaskBtn);
	item.appendChild(span);
	myTaskList[i].appendChild(span);
}

let close = document.getElementsByClassName("closeTaskBtn");
for (let i = 0; i < close.length; i++) {
	close[i].onclick = function() {
		let div = this.parentElement;
		div.style.display = "none";
	}
}

let list = document.querySelector("ul");
list.addEventListener("click", function(event) {
	if (event.target.tagName === "LI") { //WTF
		event.target.classList.add("isCheked");
	} else if (event.target.tagName === "span") {
		let div = event.target.parentNode;
		div.remove();
	}
}, false);

function addNewTask() {
	let item = document.createElement("li");
	let inputValue = document.getElementById("taskInput").value;
	let task = document.createTextNode(inputValue);

	item.appendChild(task);
	if(inputValue !== '') {
		document.getElementById("taskList").appendChild(item);
	} else {
		alert("Enter the task");
	}
	document.getElementById("taskInput").value = '';
	let span = document.createElement("span");
	let closeTaskBtn = document.createTextNode("X");
	span.className = "closeTaskBtn";
	span.appendChild(closeTaskBtn);
	item.appendChild(span);

	for (let i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			let div = this.parentElement;
			div.style.display = "none";
		}
	}
}

let newTask = document.getElementById("addBtn");
newTask.addEventListener("click", addNewTask);