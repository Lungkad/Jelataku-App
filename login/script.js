// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBmhoI90VWanb53Njc61xNwOpo0aeFvAE",
  authDomain: "jelataku-d166b.firebaseapp.com",
  databaseURL: "https://jelataku-d166b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jelataku-d166b",
  storageBucket: "jelataku-d166b.appspot.com",
  messagingSenderId: "359145156268",
  appId: "1:359145156268:web:53bf0c2e435fcd01d27909",
  measurementId: "G-65CNQCH6HV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase;

function register () {
  // Get all our input fields
  firstname = document.getElementById('firstname').value
  lastname = document.getElementById('lastname').value
  email = document.getElementById('email').value
  password = document.getElementById('password').value

  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!')
    return
  }
  if(validate_field(firstname) == false || validate_field(lastname) == false || validate_field(email) == false || validate_field(password) == false) {
    alert('One or More Fields are Empty!!')
    return
  }

  auth.createUserWithEmailAndPassword(email, password)
  .then(function() {
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = db.ref()

    // Create User data
    var user_data = {
      name : firstname + " " + lastname,
      email : email,
      password : password,
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).set(user_data)
    alert('User Created!!')

  })
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;

    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.')
    } else {
      alert(errorMessage)
    }
    console.log(error)
  })
}

// Validate Functions
function validate_emsail(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}