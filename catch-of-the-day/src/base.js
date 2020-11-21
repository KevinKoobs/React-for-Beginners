import Rebase from 're-base';
import firebase from "firebase";
import credentials from './env'

const firebaseApp = firebase.initializeApp(credentials);

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp }

// This is a default export
export default base
