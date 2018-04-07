var userText = document.getElementById("user-text");

document.onkeyup = function(event) {
    userText.textContent = event.key;
  };