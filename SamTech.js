// Firebase configuration
   const firebaseConfig = {
    apiKey: "AIzaSyAujFKDx_T7ZSEyYGmvbdhkmn8SdKCNXjs",
    authDomain: "hope-kokeno-cbo.firebaseapp.com",
    databaseURL: "https://hope-kokeno-cbo-default-rtdb.firebaseio.com",
    projectId: "hope-kokeno-cbo",
    storageBucket: "hope-kokeno-cbo.appspot.com",
    messagingSenderId: "508964589142",
    appId: "1:508964589142:web:33a4d190a497bb5ecab5f7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Function to save contact form data
function saveContactFormData(name, email, message) {
    const newContactFormRef = database.ref('SamTech-messages').push();
    const date = new Date();
    const day = date.getDate();
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    const formattedTime = `${day} ${month} ${year} || ${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
    newContactFormRef.set({
        name: name,
        email: email,
        message: message,
        date: formattedTime
    });
}

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    saveContactFormData(name, email, message);
    showConfirmation();
    document.getElementById('contactForm').reset();
});
function showConfirmation() {
    // Show a success message
    Swal.fire({
        icon: 'success',
        title: 'Message Sent successfully',
        text: `Thank you for contacting us, ${name} !. Serving you is our pleasure!`,
        confirmButtonText: 'OK'
    });
}

// WhatsApp button functionality
document.getElementById('whatsapp').addEventListener('click', function() {
    const phoneNumber = 254742451048; // Replace with your WhatsApp number
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
});

// Call button functionality
document.getElementById('call').addEventListener('click', function() {
    const phoneNumber = 254742451048; // Replace with your phone number
    window.location.href = `tel:${phoneNumber}`;
});
/*
// Initialize and add the map
function initMap() {
    var location = {lat: -1.2921, lng: 36.8219}; // Example coordinates (Nairobi, Kenya)
    var map = new google.maps.Map(document.getElementById('mapContainer'), {
        zoom: 10,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Load the map script
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
script.async = true;
document.head.appendChild(script);
*/
// Testimonials animation
let testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showNextTestimonial() {
    testimonials[currentTestimonial].classList.remove('active');
    testimonials[currentTestimonial].classList.add('slide-out');
    
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    
    testimonials[currentTestimonial].classList.add('slide-in');
    testimonials[currentTestimonial].classList.add('active');
    
    setTimeout(() => {
        testimonials[currentTestimonial].classList.remove('slide-in');
        testimonials[currentTestimonial].classList.remove('slide-out');
    }, 3000);
}

setInterval(showNextTestimonial, 5000);

// Initialize the first testimonial
testimonials[currentTestimonial].classList.add('active');
