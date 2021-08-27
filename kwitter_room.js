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
        
var Welcome = localStorage.getItem("user_name");
document.getElementById("usermane").innerHTML = "Welcome To Chilly Chatterz " + Welcome + " !";

function addRoom(){
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name -"+ Room_names);
row = "<div class='room_name' id="+ Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row; 
      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}