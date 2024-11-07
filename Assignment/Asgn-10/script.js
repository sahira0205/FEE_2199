function addTopic() {
    let topicInput = document.getElementById('topicInput');
    let topicText = topicInput.value.trim();
  
    if (topicText === "") {
      alert("Please enter a topic!");
      return;
    }
  
    let topicList = document.getElementById('topicList');
    
    let topicDiv = document.createElement('div');
    topicDiv.classList.add('topic');
    
    let topicTitle = document.createElement('h3');
    topicTitle.textContent = topicText;
    
    let commentInput = document.createElement('input');
    commentInput.classList.add('commentInput');
    commentInput.setAttribute('placeholder', 'Add a comment...');
    
    let commentButton = document.createElement('button');
    commentButton.textContent = "Add Comment";
    commentButton.onclick = function() {
      addComment(topicDiv, commentInput.value);
      commentInput.value = ""; // Clear comment input field
    };
  
    topicDiv.appendChild(topicTitle);
    topicDiv.appendChild(commentInput);
    topicDiv.appendChild(commentButton);
  
    topicList.appendChild(topicDiv);
  
    topicInput.value = ""; // Clear topic input field
  }
  
  function addComment(topicDiv, commentText) {
    if (commentText.trim() === "") {
      alert("Please enter a comment!");
      return;
    }
  
    let commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.textContent = commentText;
  
    topicDiv.appendChild(commentDiv);
  }
  