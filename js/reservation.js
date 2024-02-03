document.addEventListener("DOMContentLoaded", function () {

  const closeButton = document.getElementById('Closebutton');

  var reserveButton = document.getElementById('reserveButton');
  var reservationForm = document.getElementById('reservation');

  // Function to toggle the visibility of the reservation form
  function toggleReservationForm() {
      reservationForm.style.display = (reservationForm.style.display === 'none' || reservationForm.style.display === '') ? 'block' : 'none';
  }
  // Event listener for the Reserve button
  reserveButton.addEventListener('click', toggleReservationForm);

  // Event listener for the Close button in the reservation form
  closeButton.addEventListener('click', toggleReservationForm);
});

// Add a click event listener to the button
reserveButton.addEventListener('click', function() {
  // Toggle the visibility of the reservation form
  reservationForm.style.display = (reservationForm.style.display === 'none' || reservationForm.style.display === '') ? 'block' : 'none';
});

document.addEventListener("DOMContentLoaded", function () {
  const reserveButton = document.getElementById('reserveButton');
  const reservationForm = document.getElementById('reservationForm');
  const closeButton = document.getElementById('Closebutton');

  // Function to show the reservation form and hide the Reserve button
  function showReservationForm() {
      reservationForm.style.display = 'block';
      reserveButton.style.display = 'none';
  }

  // Function to hide the reservation form and show the Reserve button
  function hideReservationForm() {
      reservationForm.style.display = 'none';
      reserveButton.style.display = 'block';
  }

  // Event listener for the Reserve button
  reserveButton.addEventListener('click', showReservationForm);

  // Event listener for the Close button in the reservation form
  closeButton.addEventListener('click', hideReservationForm);
});;