function detectDeviceType() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (screenWidth < 768) {
        return 'Phone';
    } else if (screenWidth < 1024) {
        return 'Tablet';
    } else {
        return 'Computer';
    }
}

// Get the image container element
const imgContainer = document.querySelector('.img-container');

// Hide the image container if the device is a phone or tablet
function hideImageContainer() {
    const deviceType = detectDeviceType();

    if (deviceType === 'Phone' || deviceType === 'Tablet') {
        imgContainer.style.display = 'none';
    }
}

// Call the function to hide the image container
hideImageContainer();