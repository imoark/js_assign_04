// define where to grab the content from 
const todoItem = document.getElementById('addTodoItem');
console.log(todoItem)


// define where to put the content to
const todoList = document.getElementById('todoList');
console.log(todoList)

// target the form, to prevent default action
const todoForm = document.getElementById('todoForm');
console.log(todoList)


// adding local storage
var database = localStorage.getItem('mydb');
if(database){
	database = JSON.parse(database);
}else{
	mydb = [];
};

let keyNumber = 0;

// create the function of adding item, and assign them into a 'const/let/var'
const addItem = (a) => {
	// this is to prevent a default event of form in HTML
	// so, whenever we submit form, it doesn't do anything except interact
	// with our Javascript
	a.preventDefault();
	// this if is to tell if there is no value in the form, 
	// return/finish the function and do nothing
	if (!todoItem.value){
		return;
	};

	const itemContent = todoItem.value;
	mydb = [];
	mydb.push(itemContent);
	/*We need to change from array to string, 
	so we use "JSON.stringify".*/
	localStorage.setItem(keyNumber, JSON.stringify(mydb));
	keyNumber = keyNumber + 1;
	todoItem.value = '';

	addLi();
}

// assign an event listener to the todoForm
// we use the submit events, because of its behaviour of form
todoForm.addEventListener('submit', addItem);


function addLi(text){
	const ol = document.querySelector('ol');
	ol.innerHTML="";

	for(let i=0 ; i<localStorage.length ; i++){

		const li = document.createElement('li');
		const span = document.createElement('span');

		let key = localStorage.key(i);
		let item = JSON.parse(localStorage.getItem(key));
	  
		span.textContent = 'delete';
		li.textContent = item;
		li.setAttribute('id',key);
		span.addEventListener('click', deleteItem);
		li.addEventListener('click', done);

		ol.appendChild(li);
		li.appendChild(span);
	}; //end of for loop
};	//end of addLi

const deleteItem = (a) => {

	let liTarget = a.target.parentElement;
	let idTarget = liTarget.getAttribute('id');

	todoList.removeChild(liTarget);
	localStorage.removeItem(idTarget);



	/*THIS IS THE HTML METHOD*/
	// var liTarget = a.target.parentElement;
	// todoList.removeChild(liTarget);
	/* To see each elements in an array, we use forEach.
	"forEach" allow us to check each element in array.
	"todo" is parameter. */
	// JSON.parse(database);


	/*THIS CODE IS FOR EACH METHOD,
	BUT HAS A DOWNSIDE OF NOT ABLE TO INPUT SAME DATA TWICE*/
	// database.forEach(function(todo){

		
	// 	liTarget.addEventListener('click', function(){
	// 		// In todos(array), todo is which number?
	// 		// "indexOf" 
	// 		database.splice();
	// 		var index = database.indexOf(todo);
	// 		database.splice(index,1);
	// 		/*We need to change from array to string, 
	// 		so we use "JSON.stringify".*/
	// 		localStorage.setItem('database', JSON.stringify(database));
	// 	});

	// });
}

const done = (a) => {
	var selfTarget = a.currentTarget;
	console.log(selfTarget);
	selfTarget.classList.toggle('done');
	// var mario = document.getElementsByClassName('done')[0];
	// console.log(mario);
	// console.log(document.getElementsByClassName('done'))
	// mario.addEventListener('click', undone);
};

// const undone = (b) => {
// 	var ownTarget = b.currentTarget;
// 	ownTarget.classList = 'undone';
// 	var undoneTarget = document.getElementsByClassName('undone');
// 	console.log(undoneTarget);
// 	undoneTarget.addEventListener('click', done);
	
// }



addLi();
