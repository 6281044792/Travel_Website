 // JavaScript for interactive features

document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('booking-form');

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Booking Submitted Successfully!');
        bookingForm.reset();
    });
});


