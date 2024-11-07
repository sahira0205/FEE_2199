function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
  
    let taskList = document.getElementById('taskList');
    
    let li = document.createElement('li');
    li.textContent = taskText;
    
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function() {
      li.remove();
    };
  
    li.appendChild(deleteBtn);
    li.onclick = function() {
      li.classList.toggle('completed');
    };
  
    taskList.appendChild(li);
  
    taskInput.value = ""; // Clear input field
  }
  