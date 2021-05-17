const btn = document.getElementById("add-to-list");
const todoList = document.getElementById("todo-list");
let inputField = document.getElementById("todo");


btn.addEventListener('click',function(){
    let li= document.createElement('li');

    if(inputField.value.length < 3 || inputField.value.length > 10 || !(/^[a-zA-Z]+$/.test(inputField.value)))
    {
        
        inputField.style.border= "1px solid red";
        btn.disabled = true;
        let errMsg = document.getElementById('err');
        errMsg.textContent = "Input Invalid"
    }
    else {
        li.textContent = inputField.value; 
        btn.disabled = false;
        todoList.appendChild(li);
        inputField.value = "";
    }
    
    

    
    
    
    
    li.addEventListener('click', function() {
        li.style.textDecoration ="underline";
    })
    li.addEventListener('dblclick',function(){
        todoList.removeChild(li);
        
    })
    
    
})  /* add to list + remove item on double-click */


