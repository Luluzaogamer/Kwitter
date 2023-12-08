const firebaseConfig = {
    apiKey: "AIzaSyCzudulFHKCelyZFLuvVIO-RdQc_Izg064",
    authDomain: "vamosconversar-604db.firebaseapp.com",
    databaseURL: "https://vamosconversar-604db-default-rtdb.firebaseio.com",
    projectId: "vamosconversar-604db",
    storageBucket: "vamosconversar-604db.appspot.com",
    messagingSenderId: "513830474349",
    appId: "1:513830474349:web:9bb7b01585fc2c6604a564"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
  function addUser()
  {
    userName = document.getElementById("userName").value;
    firebase.database().ref("/").child(userName).update({
        purpose : "adicionar usuário"
    });
  }
