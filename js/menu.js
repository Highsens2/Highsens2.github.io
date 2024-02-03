function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("button").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("button").style.display = "block";
}

document.getElementById('now').onclick = function() {
  document.getElementsByClassName('box')[0].style.display = "block";
};

// Get the element by ID
const element = document.getElementById('button');

// Function to update the display style based on the window width
function updateDisplayStyle() {
  const viewportWidth = window.innerWidth;
  const minWidth = 1010;

  if (viewportWidth < minWidth) {
    element.style.display = 'block';
  } else {
    element.style.display = '';
  }
}

// Call the function initially to set the correct display style
updateDisplayStyle();

// Add a window resize event listener to call the function whenever the window width changes
window.addEventListener('resize', updateDisplayStyle);


document.getElementById('closeButton').onclick = function() {
  var boxes = document.getElementsByClassName('box');
  if (boxes.length > 0) {
    boxes[0].style.display = 'none';
  }
};


