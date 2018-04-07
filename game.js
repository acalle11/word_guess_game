window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var word ;              
  var guess ;           
  var letter = [ ];     
  var attempts ;            
  var counter ;          
  var space;             

  var showAttempts = document.getElementById("myattempts");

  // Guess attempts
  document.onkeyup = function(event) {
    var userGuess = event.key;
    var html = function () {
      myGuesses = document.getElementById('guesses');
      letters = document.createElement('ul');
      guess = document.createElement('li');
    document.querySelector("#guesses").innerHTML = html;

   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      letter.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // Attempts
   comments = function () {
    showAttempts.innerHTML = "You have " + attempts + " attempts";
    if (attempts < 1) {
      showAttempts.innerHTML = "Game Over";
    }
    for (var i = 0; i < letter.length; i++) {
      if (counter + space === letter.length) {
        showAttempts.innerHTML = "You Win!";
      }
    }
  }

      // Animate man
  var animate = function () {
    var drawMe = attempts ;
    drawArray[drawMe]();
  }

  
   // Hangman
  canvas =  function(){

    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };
  
    head = function(){
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
    }
    
  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke(); 
}

   frame1 = function() {
     draw (0, 150, 150, 150);
   };
   
   frame2 = function() {
     draw (10, 0, 10, 600);
   };
  
   frame3 = function() {
     draw (0, 5, 70, 5);
   };
  
   frame4 = function() {
     draw (60, 5, 60, 15);
   };
  
   torso = function() {
     draw (60, 36, 60, 70);
   };
  
   rightArm = function() {
     draw (60, 46, 100, 50);
   };
  
   leftArm = function() {
     draw (60, 46, 20, 50);
   };
  
   rightLeg = function() {
     draw (60, 70, 100, 100);
   };
  
   leftLeg = function() {
     draw (60, 70, 20, 100);
   };
  
  drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 


  // Typing function
   check = function () {
    list.onkeyup = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onkeyup = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          letter[i].innerHTML = guess;
          counter += 1;
        } 
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        attempts -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }
  
    
  // Play
  play = function () {
    characterNames = [
        ["cartman", "kyle", "stan", "kenny", "mr garrison", "scott malkinson", "butters"],
    ];

    chosenName = characterNames[Math.floor(Math.random() * characterNames.length)];
    word = chosenName[Math.floor(Math.random() * chosenName.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    letter = [ ];
    attempts = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  }

  play();
  
//Reset
  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    context.clearRect(0, 0, 400, 400);
    play();
  }
}