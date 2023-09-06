var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

var existingListItems = document.querySelectorAll("ul li")

function crossOffItem(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
}

function addDelButton(parent) {
	var buttonElem = parent.appendChild(document.createElement("button"));
	buttonElem.innerHTML = "Delete";
	buttonElem.onclick = function() {
		this.parentElement.remove();
	}
}

existingListItems.forEach(function(item) {
	addDelButton(item)
})

function handleListClick(item){
	crossOffItem(item);
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	addDelButton(li);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

ul.addEventListener("click", handleListClick)

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);