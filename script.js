const inputText = document.querySelector(".inputs input");
const button = document.querySelector(".inputs button");
const infoText = document.querySelector(".info-txt");
let filterInput;

inputText.addEventListener("keyup", e => {
  // if the user pressed enter and the input is not empty
  if(e.key == "Enter" && inputText.value != ""){
    palindrome(filterInput);
  }
});

// if the user pressed the button
button.addEventListener("click", () => {
  palindrome(filterInput);
});

inputText.addEventListener("keyup", () => {
  // removes special characters and spaces
  filterInput = inputText.value.toLowerCase().replace(/[^A-Z0-9]/ig, ""); 

  // if the input field is not empty, add "active" class to the button
  if(filterInput) {
    return button.classList.add("active");
  }
  infoText.style.display = "none";
  button.classList.remove("active");
});

function palindrome(text) {
  // split method splits the value and make an array of it
  // reverse method reverse the array items
  // join method joins the array items in a single word
  let reverse = filterInput.split("").reverse().join("");

  // change the info <p> display from none to block 
  infoText.style.display = "block"; 

  // compare the the values: reverse and filterInput
  if(filterInput != reverse) {
    return infoText.innerHTML = `No, <span>${filterInput}</span> isn't a palindrome!`;
  } else return infoText.innerHTML = `Yes, <span>${filterInput}</span> is a palindrome!`;
}