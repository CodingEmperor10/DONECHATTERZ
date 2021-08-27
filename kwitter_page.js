// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDv7BLXaIrWpPinG2ynkHhjykXbMaCKGzI",
      authDomain: "chillydragonz.firebaseapp.com",
      databaseURL: "https://chillydragonz-default-rtdb.firebaseio.com",
      projectId: "chillydragonz",
      storageBucket: "chillydragonz.appspot.com",
      messagingSenderId: "520056005846",
      appId: "1:520056005846:web:469fa5d39356f79dab1577"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

username = localStorage.getItem("user_name");
roomname = localStorage.getItem("room_name");

function Send(){
msg = document.getElementById("msg").value;
firebase.database().ref(roomname).push({
name:username,
message:msg,
like:0
});
document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name_with_tag + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+ firebase_message_id + "value="+like+"onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like:"+like+"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id){
console.log("Liked the button -" + message_id);
button_id = message_id;       
likes = document.getElementById(button.id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({
like : updated_likes
});      
}

function Back(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}