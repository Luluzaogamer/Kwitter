const firebaseConfig = {
    apiKey: "AIzaSyCzudulFHKCelyZFLuvVIO-RdQc_Izg064",
    authDomain: "vamosconversar-604db.firebaseapp.com",
    databaseURL: "https://vamosconversar-604db-default-rtdb.firebaseio.com",
    projectId: "vamosconversar-604db",
    storageBucket: "vamosconversar-604db.appspot.com",
    messagingSenderId: "513830474349",
    appId: "1:513830474349:web:9bb7b01585fc2c6604a564"
  };
  userName = localStorage.getItem("userName");
  roomName = localStorage.getItem("roomName");

  function send()
  {
    msg = document.getElementById("msg").ariaValueMax;
    firebase.database().ref(roomName).push({
        name:userNamemessage,
        like:0
    });
    
  }
function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebaseMessageId = childKey;
    messageData = childData;
console.log(firebaseMessageId);
console.log(messageData);
name = messageData ['name'];
message = messageData ['message'];
like = messageData['like'];
nameWidthTag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
messageWidthTag="<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id=" + firebaseMessageId + " value=" + like + "onclick='updateLike(this.id)'>";
spanWidthTag = "<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button><hr>";
row = nameWidthTag + messageWhidthTag + like_button + spanWidthTag;
document.getElementById("output").innerHTML += row;

 } });  }); }
getData();
function updateLike(messageId)
{
    console.log("botão de Like pressionado - " + messageId);
    buttonId = messageId;
    likes = document.getElementById(buttonId).value;
    updateLikes = Number(likes) + 1;
    console.log(updateLikes);
    firebase.database().ref(roomName).child(messageId).update({
        like : updateLikes
    });

}
function logout()
{
    localStorage.removeItem("userName");
    localStorage.removeItem("roomName");
    window.location.replace("index.html");
}