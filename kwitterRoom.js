
//ADICIONE SEUS LINKS FIREBASE
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
firebase.initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot)
     { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot)
      { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='room_name' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
