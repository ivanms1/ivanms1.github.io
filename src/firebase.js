import firebase from 'firebase/app';
import 'firebase/database';

const config = {
	apiKey: "AIzaSyD9dbu8Rvxti1IA8FYk-38rcDWbOLuK1k4",
    authDomain: "portfolio-91423.firebaseapp.com",
    databaseURL: "https://portfolio-91423.firebaseio.com",
    projectId: "portfolio-91423",
    storageBucket: "",
    messagingSenderId: "613067604620"
}

const fire = firebase.initializeApp(config)

export default fire