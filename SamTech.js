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
function saveContactFormData(name, email, phone, message) {
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
    hours = hours % 12 || 12;

    const formattedTime = `${day} ${month} ${year} || ${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
    newContactFormRef.set({
        name,
        email,
        phone,
        message,
        date: formattedTime
    });
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    saveContactFormData(name, email, phone, message);
    setTimeout(showConfirmation, 10);
    setTimeout(hideConfirmation, 3000);
    document.getElementById('contactForm').reset();
});

function showConfirmation() {
    const alerts = document.getElementById('alert');
    const name = document.getElementById('name').value;
    alerts.style.display = 'block';
    alerts.innerHTML = `Thank you for contacting us, ${name}! Serving you is our pleasure!`;
}

function hideConfirmation() {
    const alerts = document.getElementById('alert');
    alerts.style.display = 'none';
}

function openWhatsApp() {
    const phoneNumber = 254113607660; // Replace with your WhatsApp number
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
}

document.getElementById('whatsapp').addEventListener('click', openWhatsApp);
document.getElementById('call').addEventListener('click', openWhatsApp);
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
/*
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
    }, 6000);
}

setInterval(showNextTestimonial, 6000);

// Initialize the first testimonial
testimonials[currentTestimonial].classList.add('active');
*/