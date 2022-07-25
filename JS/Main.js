import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
import { getAuth,onAuthStateChanged, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";
import { collection,getDoc,getDocs, query,doc, where, onSnapshot,getFirestore } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";


const firebaseConfig = {
 apiKey: "AIzaSyADxKdEJe6XeTuLZzxKjKS6JOPPbvTC7X0",
 authDomain: "rhenusitregister.firebaseapp.com",
 projectId: "rhenusitregister",
 storageBucket: "rhenusitregister.appspot.com",
 messagingSenderId: "104795139606",
 appId: "1:104795139606:web:0b142b611ed3e64856cf37",
 measurementId: "G-X3FX1Y76D6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =  getAuth();
const db = getFirestore(app);

const Title = document.getElementById("Titleinput");

const querySnapshot = await getDocs(collection(db, "UserDetails"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});



/*---------------------------------------------*/


onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    db.collection("UserDetails").doc(uid)
  .withConverter(UserConverter)
  .get().then((doc) => {
    if (doc.exists){
      // Convert to City object
      var USRR = doc.data();
      // Use a City instance method
      console.log(USRR.toString());
    } else {
      console.log("No such document!");
    }}).catch((error) => {
      console.log("Error getting document:", error);
    });
   
  
}}
);



/*---------------------User Class------------------------*/
class User {
  constructor(UserID,User){
      this.User = User;
      this.UserID = UserID;
  }
  toString()
  {
      return this.UserID + " " + this.User;
  }

}

const UserConverter = {
  toFirestore: (USER) => {
    return{UserID: USER.UserID ,User: USER.User};
  },
  fromFirestore: (snapshot,options) =>{
    const data = snapshot.data(options);
    return new User(data.UserID,data.User)
  }
}
/*---------------------User Class------------------------*/


/*---------------------Get User------------------------*/


/*---------------------Get User------------------------*/
