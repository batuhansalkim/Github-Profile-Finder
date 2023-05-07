import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAa7xDM-CUnWlTm9fX8RuLArjIfmRcE-Rc",
    authDomain: "reactchatapp-457e6.firebaseapp.com",
    projectId: "reactchatapp-457e6",
    storageBucket: "reactchatapp-457e6.appspot.com",
    messagingSenderId: "218203043082",
    appId: "1:218203043082:web:9ca2e5681cfad91a0876f3"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
