import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import firebaseConfig from "./config";

class Firebase {
  constructor() {
    //verificar que no haya aplicacion creada
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
    this.auth = app.auth();
    this.db = app.firestore();
    this.storage = app.storage();
  }

  async registrar(nombre, email, password) {
    const newUser = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    return await newUser.user.updateProfile({
      displayName: nombre,
    });
  }

  async login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  async logOut() {
    await this.auth.signOut();
  }
}

const firebase = new Firebase();

export default firebase;
