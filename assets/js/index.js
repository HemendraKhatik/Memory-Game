
//This function will randomly choose between "randomRange()" and "randomSequence()" functions
function randomNumberOrSequence()
{
    var functionArray = new Array(randomRange, randomSequence);
   
    var i = Math.floor(Math.random() * functionArray.length);
    
    functionArray[i]()
}


function randomRange() {
  // Generating Random 6 digit number
  var guessNumber;
  var diff=Math.ceil(Math.random()*2);
  if(diff==1){
    // Generating Random 6 digit number
    guessNumber = Math.floor((Math.random() * 900000 )+100000 );
    // Adding class colorChanger to the number  
    document.querySelector("#number").classList.add("colorChanger");  
  }
  else if(diff==2){
    // Generating Random 7 digit number
    guessNumber = Math.floor((Math.random() * 9000000 )+1000000 );  
  }
  // Storing generated number in local storage
  localStorage.setItem("guessNumber", guessNumber);
  // Displaying the number
  document.querySelector("#number").innerHTML = guessNumber;
  //button will be disabled after click
  document.getElementById("generate").disabled = "disabled";
  // Message will appear after button has clicked
  document.querySelector("#message").innerHTML =
    "Page will reload in 5 seconds";
  var secondReload = 4;
  var timer = setInterval(function () {
    document.querySelector("#message").innerHTML = "Page will reload in " +
      secondReload + (secondReload === 1 ? " second" : " seconds");
    secondReload--;
  }, 1000);
  secondReload = 4;
  //toggle between two divs
  setTimeout(function () {
    clearInterval(timer);
    document.querySelector("#first_div").style.display = "none";
    document.querySelector("#Second_div").style.display = "block";
    document.querySelector("#userInput").value = "";
    document.querySelector("#userInput").focus();
  }, 5000);
}


function randomSequence() {
  // Generating Random 6 digit number
  
   var length = 6;
   var guessNumber           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      guessNumber += characters.charAt(Math.floor(Math.random() * charactersLength));
   }

  // Storing generated number in local storage
  localStorage.setItem("guessNumber", guessNumber);
  // Displaying the number
  document.querySelector("#number").innerHTML = guessNumber;
  //button will be disabled after click
  document.getElementById("generate").disabled = "diabled";
  // Message will appear after button has clicked
  document.querySelector("#message").innerHTML =
    "Page will reload in 5 seconds";
  var secondReload = 4;
  var timer = setInterval(function () {
    document.querySelector("#message").innerHTML =
      "Page will reload in " + secondReload + " seconds";
    secondReload--;
  }, 1000);
  secondReload = 4;
  //toggle between two divs
  setTimeout(function () {
    clearInterval(timer);
    document.querySelector("#first_div").style.display = "none";
    document.querySelector("#Second_div").style.display = "block";
    document.querySelector("#userInput").value = "";
    document.querySelector("#userInput").focus();
  }, 5000);
}

// Check Function to check Guess Entered by the user
function check() {
  if (
    document.querySelector("#userInput").value ===
      localStorage.getItem("guessNumber")
  ) {
    swal("Good job!", "Yeah Keep going!", "success");
    replay();
  } else if (document.querySelector("#userInput").value.length === 0) {
    swal("Please give input", "input field can't be empty", "warning");
  } else {
    // matching how many consecutive digits are matched
    number = document.querySelector("#userInput").value;
    guessNumber = localStorage.getItem("guessNumber");
    var i;
    var match = 0;
    for (i = 0; i < number.length; i++) {
      if (number[i] == guessNumber[i]) {
        match = match + 1;
      }
    }
    if (match > 0) {
      swal(
        "Oops you were almost there ",
        match + (match === 1 ? " digit matched" : " digits matched ") +
          "Please Try Again!",
        "warning",
      );
    } else {
      swal("Oops you lost!! ", "Please Try Again!", "warning");
    }
  }
}

// Replay function will reset everything
function replay() {
  localStorage.setItem("guessNumber", "");
  document.querySelector("#first_div").style.display = "block";
  document.querySelector("#Second_div").style.display = "none";
  document.querySelector("#number").innerHTML = "";
  document.querySelector("#message").innerHTML = "";
  document.querySelector("#generate").disabled = "";
  document.querySelector("#number").classList.remove("colorChanger");  
}
