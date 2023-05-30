import './app/firebase.js'
import { createUserWithEmailAndPassword  } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js'
import {auth} from './app/firebase.js'


document.querySelector('#form__signUp').addEventListener('submit', async(e) => {
    e.preventDefault();
    const { email, password } = Object.fromEntries(new FormData(e.target));
    
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        
    } catch (error) {
        console.log({error});
    }
})
