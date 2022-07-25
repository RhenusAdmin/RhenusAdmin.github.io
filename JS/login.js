
   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
   import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";

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



const EML = document.getElementById("login");
const PWD = document.getElementById("password");
const mainpage = "./Main.html";

document.getElementById("LOGButton").addEventListener('click',(e) =>
{
  e.preventDefault();
  const USR = EML.value;
  const PSSD = PWD.value;
  signInWithEmailAndPassword(auth, USR, PSSD)
  .then((userCredentail) => {
    const USSR = userCredentail.user;
    location.assign(mainpage);
  })
  .catch((error) =>{
    const ERR = error.code;
    const ERRmsg = error.message;
    alert("Your login details are incorrect!!");


  })

  

})

/* */
function passwordVisibility() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


/* */