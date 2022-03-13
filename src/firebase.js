import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBtySQyTlzMCqx_xzOMNFF1x2XRQw7zlSA",
	authDomain: "facebook-clone-ec928.firebaseapp.com",
	projectId: "facebook-clone-ec928",
	storageBucket: "facebook-clone-ec928.appspot.com",
	messagingSenderId: "249385703527",
	appId: "1:249385703527:web:439ad767fb6db0af125cc2",
	measurementId: "G-JLEX9YDEK4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;