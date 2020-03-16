import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: process.env.VUE_APP_APIKEY,
	authDomain: `${process.env.VUE_APP_PROJECTID}.firebaseapp.com`,
	databaseURL: `https://${process.env.VUE_APP_PROJECTID}.firebaseio.com`,
	projectId: process.env.VUE_APP_PROJECTID,
	storageBucket: `${process.env.VUE_APP_PROJECTID}.appspot.com`,
	messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
	appId: process.env.VUE_APP_APPID,
	measurementId: process.env.VUE_APP_MEASUREMENTID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
