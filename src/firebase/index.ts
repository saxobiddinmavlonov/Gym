import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyAWOuEUd69bYFs10yljNxfBnbKccugXZ7Q',
	authDomain: 'workout-9b905.firebaseapp.com',
	projectId: 'workout-9b905',
	storageBucket: 'workout-9b905.appspot.com',
	messagingSenderId: '197124130893',
	appId: '1:197124130893:web:71db37708dcf3b9a98f404',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
