// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
    getDatabase,
    ref,
    child,
    get,
    onValue,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDh9Cc3Cqc_ztlet3tIjxTh-IvuV3KbB7Q",
    authDomain: "fir-project-7fd8c.firebaseapp.com",
    projectId: "fir-project-7fd8c",
    storageBucket: "fir-project-7fd8c.appspot.com",
    messagingSenderId: "1094901774501",
    appId: "1:1094901774501:web:7bbefcfa42b374e221f54c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase();
const messages = ref(database, '/messages')

onValue(messages, (snapshot) => {
    // console.log(snapshot);
    const ul = document.getElementById("messages");
    ul.replaceChildren();

    snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();

        console.log(childKey);
        console.log(childData);

        const text = document.createTextNode(childData.message);
        const li = document.createElement("li");

        li.appendChild(text);
        ul.appendChild(li);
    });
}, {
    onlyOnce: false,
});