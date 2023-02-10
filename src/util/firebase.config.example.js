// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCmho7tA9VhKgTZrTZCxxjsLMnVdiQiv1k',
  authDomain: 'globant-dojo-firebase.firebaseapp.com',
  projectId: 'globant-dojo-firebase',
  storageBucket: 'globant-dojo-firebase.appspot.com',
  messagingSenderId: '662482433969',
  appId: '1:662482433969:web:d8f107b94f6e2ee4e42f90',
  measurementId: 'G-0YD94PSE2V',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
