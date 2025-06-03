// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, serverTimestamp, onValue } from 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyB7iKeiRugwq82LO5IgzCjK9FWdQbmPOWo',
    authDomain: 'postfolio-1b9c7.firebaseapp.com',
    databaseURL: 'https://postfolio-1b9c7-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'postfolio-1b9c7',
    storageBucket: 'postfolio-1b9c7.firebasestorage.app',
    messagingSenderId: '741104083668',
    appId: '1:741104083668:web:fe8e5a83ce05ad7b6d9141',
    measurementId: 'G-T6GLH2MR3C',
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, serverTimestamp, onValue };
