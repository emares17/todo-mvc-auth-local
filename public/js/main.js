const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('label,span.not')
const todoComplete = document.querySelectorAll('label,span.completed')
const checkbox = document.querySelectorAll('.checkmark')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

Array.from(todoItem).forEach((el)=>{
    el.style.textDecoration = 'line-through'
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el)=>{
    el.style.textDecoration = 'none'
    el.addEventListener('click', markIncomplete)
})

Array.from(checkbox).forEach((el)=>{
    el.style.background = 'center url(/images/icon-check.svg) no-repeat, linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))'
    el.addEventListener('click', markComplete)
})

Array.from(checkbox).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})
async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json();
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}





// const theme = document.getElementById('theme');
// const newItemInput = document.getElementById('addItem');
// const todoList = document.querySelector('.content ul');
// const itemsLeft = document.querySelector('.items-left span');

// itemsLeft.innerText = document.querySelectorAll('.list-item input[type="checkbox"]').length;

// theme.addEventListener('click', () => {
//     document.querySelector('body').classList = [theme.checked ? 'theme-light' : 'theme-dark'];
// });

// document.querySelector('.add-new-item span').addEventListener('click', () => {
//     if (newItemInput.value.length > 0) {
//         createNewTodoItem(newItemInput.value);
//         newItemInput.value = '';
//     }
// });

// newItemInput.addEventListener('keypress', (e) => {
//     if (e.charCode === 13 && newItemInput.value.length > 0) {
//         createNewTodoItem(newItemInput.value);
//         newItemInput.value = '';
//     }
// });

// function createNewTodoItem(text) {
//     const elem = document.createElement('li');
//     elem.classList.add('flex-row');
    
//     elem.innerHTML = `
//         <label class="list-item">
//         <input type="checkbox" name="todoItem">
//         <span class="checkmark"></span>
//         <span class="text">${text}</span>
//     </label>
//     <span class="remove"></span>
//     `;
    
//     if (document.querySelector('.filter input[type="radio"]:checked').id === 'completed') {
//         elem.classList.add('hidden');
//     }
//     todoList.append(elem);
//     updateItemsCount(1);
// }

// function updateItemsCount(number) {
//     itemsLeft.innerText = +itemsLeft.innerText + number;
// }

// // remove todo item

// function removeTodoItem(elem) {
//     elem.remove();
//     updateItemsCount(-1);
// }

// todoList.addEventListener('click',(event) => {
//     if (event.target.classList.contains('remove')) {
//         removeTodoItem(event.target.parentElement);
//     }
// });

// // clear comleted items

// document.querySelector('.clear').addEventListener('click', () => {
//     document.querySelectorAll('.list-item input[type="checkbox"]:checked').forEach(item => {
//         removeTodoItem(item.closest('li'));
//     });
// });


// // filter todo list items
// document.querySelectorAll('.filter input').forEach(radio => {
//     radio.addEventListener('change', (e) => {
//         filterTodoItems(e.target.id);
//     });
// });

// function filterTodoItems(id) {
//     const allItems = todoList.querySelectorAll('li');

//     switch(id) {
//         case 'all':
//             allItems.forEach(item => {
//                 item.classList.remove('hidden');
//             })
//             break;
//         case 'active':
//             allItems.forEach(item => {
//                 item.querySelector('input').checked ? item.classList.add('hidden') : item.classList.remove('hidden');;
//             })
//             break;
//         default: 
//             allItems.forEach(item => {
//                 !item.querySelector('input').checked ? item.classList.add('hidden') : item.classList.remove('hidden');;
//             })
//             break;
//     }
// }