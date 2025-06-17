const todoList =[{
   name: 'rg',
   dueDate: '2025-06-04'
},
{
   name: 'Ragnar',
   dueDate: '2025-06-05'
}];  //empty Array

renderTodoList();

function renderTodoList(){
   let todoListHTML = '';
 
   todoList.forEach((todoObject, index) => {
        
      const{name,dueDate} = todoObject;
      const html = `
      <div> ${name}</div>
      <div> ${dueDate} </div>
     
      <button class="btn-2 js-del-btn">Delete</button>
        
   
      `;  // Generating the Html
      todoListHTML += html;
   });

     /* <button class="btn-2 js-del-btn" onclick="
      todoList.splice(${index}, 1);
      renderTodoList();
      ">Delete</button> */

   /*for(let i =0; i < todoList.length; i++){
      const todoObject = todoList[i];
     // const name = todoObject.name;
     // const dueDate = todoObject.dueDate;
      const{name,dueDate} = todoObject;
      const html = `
      <div> ${name}</div>
      <div> ${dueDate} </div>
     
      <button class="btn-2" onclick="
      todoList.splice(${i}, 1);
      renderTodoList();
      ">Delete</button>
   
      `;  // Generating the Html
      todoListHTML += html;
   } */ 
   console.log(todoListHTML);

   document.querySelector('.js-todo-list').innerHTML= todoListHTML;
   
   document.querySelectorAll('.js-del-btn')
   .forEach((deleteButton, index)=>{
    deleteButton.addEventListener('click', ()=>{
     todoList.splice(index, 1);
      renderTodoList();
    });
   });
   
}

document.querySelector('.js-add-btn').addEventListener('click', ()=>{
   addTodo();
});


function addTodo(){
   const inputElement = document.querySelector('.js-name-input');
   const name = inputElement.value;  // to get text box value

   const dateInputElement = document.querySelector('.js-date');
   const dueDate =dateInputElement.value;

   todoList.push({
 //name: name,
 //dueDate: dueDate
name,
dueDate

   });  // to add value in array
   console.log(todoList);

   inputElement.value = ''; // make textbox empty
   renderTodoList();
}