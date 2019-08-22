// function makeBold(){ 
//    if( document.getElementById('diva').style.fontWeight!='bold')
//    document.getElementById('diva').style.fontWeight='bold';
//    else
//    document.getElementById('diva').style.fontWeight='normal';
// }
// function makeItalic(){
//   if ( document.getElementById('diva').style.fontStyle!='italic')
//   document.getElementById('diva').style.fontStyle='italic';
//   else
//   document.getElementById('diva').style.fontStyle='normal';
// }
// function makeUnderline(){
//   if(  document.getElementById('diva').style.textDecoration!='underline')
//   document.getElementById('diva').style.textDecoration='underline';
//   else
//   document.getElementById('diva').style.textDecoration='none';
// }

// function changesize(){
//     document.getElementById('diva').style.fontSize =document.getElementById("fs").value;
// }

// function changestyle(){
//     document.getElementById('diva').style.fontFamily =document.getElementById("st").value;
// }
// $(document).ready(function(){
// $(".bt").hover(function(){
//     $("this").css(opacity=0.5,);
// })
//    })

//    $(document).ready(function(){
//    $(".im").parent(".bt").hover(function(){
//    $(this).find(".1").toggle();
  
//   })
// })


// <!-- TODO: Add SDKs for Firebase products that you want to use
    //  https://firebase.google.com/docs/web/setup#config-web-app -->

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDJ8EnvVeMVJo8UDRpGmXOm7HwxrEFDTk0",
    authDomain: "kochgmc.firebaseapp.com",
    databaseURL: "https://kochgmc.firebaseio.com",
    projectId: "kochgmc",
    storageBucket: "",
    messagingSenderId: "727556132192",
    appId: "1:727556132192:web:514a43bb79c69967"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var messagesRef = firebase.database().ref('KochGmc')
  function submitForm(){
      event.preventDefault();
    //   Get values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var track = document.getElementById('track').value;
    saveMessage(name,email,phone,track);   // sending Data to our DataBase
  }
//  Save message to firebase
function saveMessage(name,email,phone,track){
    var newMessageRef= messagesRef.push();
     newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        track: track } );
}
function makeBold(){
 if( document.getElementById('xo').style.fontWeight=!Bold)
 document.getElementById('xo').style.fontWeight=Bold;
 else
 document.getElementById('xo').style.fontWeight=normal;
}