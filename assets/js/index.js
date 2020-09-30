function randomRange() {
  // Generating Random 6 digit number
  const guessNumber = Math.floor(
    Math.random() * (987666 - 456722 + 1) + 456722
  );
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
  }, 5000);
}
// Check Function to check Guess Entered by the user
function check() {
  if (
    document.querySelector("#userInput").value ===
    localStorage.getItem("guessNumber")
  ) {
    swal("Good job!", "Yeah Keep going!", "success");
    document.querySelector("#userInput").value = "";
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
        match + " digits matched " + "Please Try Again!",
        "warning"
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
}
