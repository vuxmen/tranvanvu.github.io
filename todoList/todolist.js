
//Mock-up data
function createID() {
	let id = Math.floor(Math.random() * 100000);
	return id;
}

let todos = [
	{
		id: createID(),
		title: 'Play Game like a GoSu',
		status: true
	},
	{
		id: createID(),
		title: 'Code Onlab like a man was born for Coding',
		status: true
	},
	{
		id: createID(),
		title: 'Running like Flash',
		status: false
	},
	{
		id: createID(),
		title: 'Reading a book or eat some food cooked',
		status: false
	},
	{
		id: createID(),
		title: 'Listen Music and Enjoy Green Tea',
		status: true
	}
];

if (localStorage.getItem('todo') !== null) {
	todos = JSON.parse(localStorage.getItem('todos'));

}


const todoList = document.querySelector('#todo-list');

//Set state for three checkboxs:
let all = document.querySelector('.all');
let notFn= document.querySelector('.notfinished');
let fn = document.querySelector('.finished');

function renderUI(arrayData) {
	notFn.checked = false;
	fn.checked = false;
	if (all.checked) {
		todoList.innerHTML = '';
		if (arrayData == []) {
			return;
		}
		for (let i = 0; i < arrayData.length; i++) {
			todoList.innerHTML += `
			<div class="row lower">
				<input type="checkbox" ${arrayData[i].status ? `checked` : ``} onclick="toggleStatus(${arrayData[i].id})">
				<label class="label ${arrayData[i].status ? ' done' : ``}" >${arrayData[i].title}</label>
				<button class="btn btn-update" onclick="updateTodo(${arrayData[i].id})"><i class="far fa-edit"></i></button>
				<button class="btn btn-delete" onclick="deleteToggle(${arrayData[i].id})"><i class="far fa-times-circle"></i></button>
			</div>	
		`;
		}
	}	
	localStorage.setItem('todos', JSON.stringify(todos));
}

renderUI(todos);

const todo_input = document.querySelector('#todo-input');
const input_btn = document.querySelector('.input-btn');
input_btn.addEventListener('click', function() {
	let titleTodo = todo_input.value;
	if (titleTodo == '') {
		alert('Chưa nhập dữ liệu');
	}

	if (isUpdate) {
		for (let i = 0; i < todos.length; i ++) {
			if (todos[i].id == idUpdate) {
				input_btn.innerText = 'Add';
				isUpdate = false;
				idUpdate = '';
				todos.splice(i, 1);
			}
		}
	} else {
		let newTodo = {
			id: createID(),
			title: todo_input.value,
			status: false
		}
	
		todos.push(newTodo);

		renderUI(todos);
		todo_input.value = '';	
	}
	localStorage.setItem('todos', JSON.stringify(todos));
});

//toggle status

function toggleStatus(id) {
	for (let i = 0; i < todos.length; i ++) {
		if (todos[i].id == id) {
			todos[i].status = !todos[i].status;
		}
	}
	renderUI(todos);
}

//delete todoList element

function deleteToggle(id) {
	for (let i = 0; i < todos.length; i ++) {
		if (todos[i].id == id) {
			todos.splice(i, 1);
			localStorage.setItem('todos', JSON.stringify(todos));
		}
	}
	renderUI(todos);
}

// update Todo

let idUpdate = '';
let isUpdate = false;

function updateTodo(id) {
	let title;
	for (let i = 0; i < todos.length; i ++) {
		if (todos[i].id == id) {
			title = todos[i].title;
		}
	}

	input_btn.innerText = 'Update';
	todo_input.value = title;
	todo_input.focus();

	idUpdate = id;
	isUpdate = true;

}



// Show job which has not been finished

function notFinished(arrayData) {
	all.checked = false;
	fn.checked = false;
	if (notFn.checked) {
		todoList.innerHTML = '';
		if (arrayData == []) {
			return;
		}
		for (let i = 0; i < arrayData.length; i++) {
			if (arrayData[i].status == false) {
				todoList.innerHTML += `
				<div class="row lower">
					<input type="checkbox" ${arrayData[i].status ? `checked` : ``} onclick="prevent(event)">
					<label class="label ${arrayData[i].status ? ' done' : ``}" >${arrayData[i].title}</label>
					<button class="btn btn-update" onclick="prevent(event)"><i class="far fa-edit"></i></button>
					<button class="btn btn-delete" onclick="prevent(event)"><i class="far fa-times-circle"></i></button>
				</div>	
				`;
			}	
		}
	}
}


// Show job which has been finished
function finished(arrayData) {
	all.checked = false;
	notFn.checked = false;
	if (fn.checked) {
		todoList.innerHTML = '';
		if (arrayData == []) {
			return;
		}
		for (let i = 0; i < arrayData.length; i++) {
			if (arrayData[i].status == true) {
				todoList.innerHTML += `
				<div class="row lower">
					<input type="checkbox" ${arrayData[i].status ? `checked` : ``} onclick="prevent(event)">
					<label class="label ${arrayData[i].status ? ' done' : ``}" >${arrayData[i].title}</label>
					<button class="btn btn-update" onclick="prevent(event)"><i class="far fa-edit"></i></button>
					<button class="btn btn-delete" onclick="prevent(event)"><i class="far fa-times-circle"></i></button>
				</div>	
				`;
			}	
		}
	}
}

function prevent(event) {
	event.preventDefault();
}
















