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
const checkbox = document.querySelector('.navigation__checkbox');
const background = document.querySelector('.navigation__background');
const listItems = document.querySelectorAll('.navigation__item');

// Function to add the enlarged class
function addEnlargedClass() {
  background.classList.add('enlarged');
  listItems.forEach((item) => {
    item.classList.add('visible');
  });
}

// Function to remove the enlarged class
function removeEnlargedClass() {
  background.classList.remove('enlarged');
  listItems.forEach((item) => {
    item.classList.remove('visible');
  });
}

// Add a click event listener to the checkbox (button)
checkbox.addEventListener('click', () => {
  if (checkbox.checked) {
    addEnlargedClass();
  } else {
    removeEnlargedClass();
  }
});

// Add a click event listener to each list item to reset the navigation
listItems.forEach((item) => {
  item.addEventListener('click', () => {
    removeEnlargedClass();
    checkbox.checked = false; // Uncheck the checkbox
  });
});
