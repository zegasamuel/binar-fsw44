const firebase = require('firebase/app');
require('firebase/storage');

const firebaseConfig = {
    apiKey: 'AIzaSyBib1KM6Uvi77meu9Htd1vQeICbXXylXdc',
    authDomain: 'fsw44-b4219.firebaseapp.com',
    projectId: 'fsw44-b4219',
    storageBucket: 'fsw44-b4219.appspot.com',
    messagingSenderId: '1022411747469',
    appId: '1:1022411747469:web:50b40f68d5de7dc32f72c4',
    measurementId: 'G-GDPR3VF7Y1',
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

module.exports = storage;
