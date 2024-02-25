// script.js

function likePost(button) {
    const likeCountElement = button.parentNode.nextElementSibling.querySelector('#likeCount');
    const currentLikes = parseInt(likeCountElement.innerText);
    likeCountElement.innerText = currentLikes + 1;
  }
  
  function showComments(button) {
    const commentsSection = button.parentNode.nextElementSibling.nextElementSibling;
    commentsSection.style.display = 'block';
  }
  
  function addComment(button) {
    const commentInput = button.parentNode.querySelector('#commentInput');
    const commentText = commentInput.value.trim();
  
    if (commentText !== '') {
      const commentSection = button.parentNode.nextElementSibling;
      const commentDiv = document.createElement('div');
      commentDiv.innerText = commentText;
      commentSection.appendChild(commentDiv);
      commentInput.value = '';
    }
  }
  