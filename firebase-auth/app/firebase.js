 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
 import { getAuth  } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js'
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
     apiKey: "AIzaSyAxAUzbpPAiKN1o7-zXIbJKIWhzgNvp46w",
     authDomain: "fir-auth-1993c.firebaseapp.com",
     projectId: "fir-auth-1993c",
     storageBucket: "fir-auth-1993c.appspot.com",
     messagingSenderId: "24281127067",
     appId: "1:24281127067:web:d440ce9115fc900c208e3e"
 };

 // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);