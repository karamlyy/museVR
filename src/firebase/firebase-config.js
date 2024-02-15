import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAekOTBGGmbyFODHT5MlGKJp-AS50FXCFU",
    authDomain: "musevr-b426e.firebaseapp.com",
    projectId: "musevr-b426e",
    storageBucket: "musevr-b426e.appspot.com",
    messagingSenderId: "97071809190",
    appId: "1:97071809190:web:140cbdf833e4178f66aa67"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };