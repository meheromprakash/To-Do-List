document.getElementById('add-btn').addEventListener('click',addTask); //Create a event listener to trigger addTask Function




//Functon to add new task in list
function addTask() {
        const input = document.getElementById('todo-input');
        const taskText = input.value.trim();

        //To check for no null entry for task list
        if(taskText == ''){
            alert("You must write something!!!");
            return;
        }

        //To create new element for task list
       const li = document.createElement('li');

       li.textContent = taskText;

       //Event Listener for completed task to strike out mentioned in css
       li.addEventListener('click',function(){
            li.classList.toggle('completed')
       });

       //span element as delete button
       const span =document.createElement('span');
       span.textContent=' x';
       span.className='close';

       //Function to delete
       span.addEventListener('click',function(){
        li.remove();
       });


       //To append delete button in list
       li.appendChild(span);

       document.getElementById('todo-list').appendChild(li);

       input.value = ''; // Clear the input field
}