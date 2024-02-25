document.addEventListener('DOMContentLoaded', function() {
    // Initialize Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyBV5kefohqzBsg-Eiyb2tyo7qbTmmXBN6I",
        authDomain: "signuppage-c30fc.firebaseapp.com",
        databaseURL: "https://signuppage-c30fc-default-rtdb.firebaseio.com",
        projectId: "signuppage-c30fc",
        storageBucket: "signuppage-c30fc.appspot.com",
        messagingSenderId: "1032661514977",
        appId: "1:1032661514977:web:acd7c9dcf58553855255a0"
      };
    

    firebase.initializeApp(firebaseConfig);

    var signUpForm = document.getElementById('signupForm');
    if (signUpForm) {
        signUpForm.addEventListener('submit', submitForm);
    } else {
        console.error("Element with id 'signupForm' not found");
    }
});

function submitForm(e) {
    e.preventDefault();
    var username = getElementVal('username');
    var email = getElementVal('email');
    var password = getElementVal('password');
    var phoneNumber = getElementVal('phone');
    console.log(username, email, password, phoneNumber);

    // Here you can proceed with saving data to Firebase or performing other actions.
}

function getElementVal(id) {
    return document.getElementById(id).value;
}
