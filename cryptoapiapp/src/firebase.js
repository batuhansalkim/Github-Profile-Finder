import firebase from "firebase/app";
import "firebase/auth";


export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyAa7xDM-CUnWlTm9fX8RuLArjIfmRcE-Rc",
    authDomain: "reactchatapp-457e6.firebaseapp.com",
    projectId: "reactchatapp-457e6",
    storageBucket: "reactchatapp-457e6.appspot.com",
    messagingSenderId: "218203043082",
    appId: "1:218203043082:web:9ca2e5681cfad91a0876f3"
}).auth();

