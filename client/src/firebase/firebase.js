import * as firebase from 'firebase';
import "firebase/auth";
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};


firebase.initializeApp(firebaseConfig);


var provider = new firebase.auth.GoogleAuthProvider();


export const fbAuth = () => {
    return firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(user.displayName);
      });
      
}

export const auth = firebase.auth();

export const user = firebase.auth().currentUser;

export const userInfo = () => {
    console.log(user);
}

export const logout = () => {
    auth.signOut();
  
}



