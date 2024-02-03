function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("button").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("button").style.display = "block";
}



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
  
function openMenuImage() {
    window.location.href='img.html', '_blank';
}

function orderNow() {
    var location = prompt('Please select a location:');
        if (location) {
            // Hide other images and show only the background image
            var foodItems = document.querySelectorAll('.food-item');
            foodItems.forEach(item => {
                item.style.display = 'none';
            });
            // Display dishes for the selected location (you need to customize this part)
            // For example, show the dishes for 'location1'
            var locationDishes = document.querySelectorAll('.location1-dish');
            locationDishes.forEach(dish => {
                dish.style.display = 'block';
            });
        }
    }


    function addToCart(item) {
      // Add your logic to handle adding items to the cart
      // For example, you can update the cart count and display the item in the cart modal
      var cartCountElement = document.getElementById('cartCount');
      var cartItemsElement = document.getElementById('cartItems');
  
      // Increment the cart count
      var currentCount = parseInt(cartCountElement.innerText);
      cartCountElement.innerText = currentCount + 1;
  
      // Add the item to the cart list
      var listItem = document.createElement('li');
      listItem.innerText = item;
      cartItemsElement.appendChild(listItem);
  }

    function checkout() {
      var selectedLocation = document.querySelector('.select select').value;
  
      if (selectedLocation === "") {
          alert("Please select a location before checking out.");
      } else {
          // Hide other iframes and show the selected location iframe
          var iframes = document.querySelectorAll('iframe');
          iframes.forEach(function(iframe) {
              iframe.style.display = "none";
          });
  
          var selectedIframe = document.querySelector(`#${selectedLocation}_iframe`);
          if (selectedIframe) {
              selectedIframe.style.display = "block";
          }
  
          // Add the rest of your checkout logic here
      }
  }