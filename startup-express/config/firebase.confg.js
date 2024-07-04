require('dotenv').config()
const admin = require('firebase-admin');


const firebaseConfig = {
    apiKey: 'AIzaSyBib1KM6Uvi77meu9Htd1vQeICbXXylXdc',
    authDomain: 'fsw44-b4219.firebaseapp.com',
    projectId: 'fsw44-b4219',
    storageBucket: 'fsw44-b4219.appspot.com',
    messagingSenderId: '1022411747469',
    appId: '1:1022411747469:web:50b40f68d5de7dc32f72c4',
    measurementId: 'G-GDPR3VF7Y1',
}

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    storageBucket: firebaseConfig.storageBucket,
})

const bucket = admin.storage().bucket()

module.exports = bucket;
