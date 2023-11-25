// Function to show the pop-up with a fade-in animation
function showPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
  setTimeout(function () {
    popup.style.opacity = 1;
  }, 1000);
}

// Call the function to show the pop-up when the page loads
window.onload = showPopup;

// Function to hide the pop-up with a fade-out animation
function hidePopup() {
  var popup = document.getElementById("popup");
  popup.style.opacity = 0;
  setTimeout(function () {
    popup.style.display = "none";
  }, 1000); // 1000 milliseconds = 1 second
}

// Call the function to hide the pop-up after 3 seconds
setTimeout(hidePopup, 3000);
// Select the checkbox, background, and list items
const checkBox = document.querySelector(".navigation__checkbox");
const button = document.querySelector(".navigation__button");
const background = document.querySelector(".navigation__background");

const listItem = document.querySelectorAll(".navigation__link");

for (i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener("click", () => {
    button.click();
  });
}
