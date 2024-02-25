// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  databaseURL: "your-database-url",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

// Function to validate input fields
function validateInputs(username, password) {
  if (username.trim() === "") {
    displayError("Please enter a username.");
    return false;
  }
  if (password.trim() === "") {
    displayError("Please enter a password.");
    return false;
  }
  return true;
}

// Function to display an error message
function displayError(errorMessage) {
  var errorElement = document.getElementById("error-message");
  errorElement.textContent = errorMessage;
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (!validateInputs(username, password)) {
    return;
  }

  // Sign in with Firebase
  signInWithEmailAndPassword(auth, username, password)
    .then(function(userCredential) {
      console.log("User logged in successfully!");
      // Redirect to the feedspage after successful login
      window.location.href = "feedspage.html";
    })
    .catch(function(error) {
      var errorMessage = error.message;
      // Display appropriate error message to the user
      displayError(errorMessage);
      console.error("Authentication failed:", error);
    });
});
