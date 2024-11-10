
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
    const newContactFormRef = ref(database, 'SamTech-messages');
    const newMessageRef = push(newContactFormRef);
    
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
    
    set(newMessageRef, {
        name,
        email,
        phone,
        message,
        date: formattedTime
    });
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            saveContactFormData(name, email, phone, message);
            setTimeout(showConfirmation, 10);
            setTimeout(hideConfirmation, 3000);
            contactForm.reset();
        });
    }
});

function showConfirmation() {
    const alerts = document.getElementById('alert');
    const name = document.getElementById('name').value;
    if (alerts) {
        alerts.style.display = 'block';
        alerts.innerHTML = `Thank you for contacting us, ${name}! Serving you is our pleasure!`;
    }
}

function hideConfirmation() {
    const alerts = document.getElementById('alert');
    if (alerts) {
        alerts.style.display = 'none';
    }
}

function openWhatsApp() {
    const phoneNumber = 254113607660;
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
}

// Add event listeners only if elements exist
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButton = document.getElementById('whatsapp');
    const callButton = document.getElementById('call');
    
    if (whatsappButton) {
        whatsappButton.addEventListener('click', openWhatsApp);
    }
    if (callButton) {
        callButton.addEventListener('click', openWhatsApp);
    }
});
