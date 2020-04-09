// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var subject = getInputVal('subject');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, subject, message);

// // Show alert
// document.getElementById('success_message').style.display = 'block';

// Hide alert after 3 seconds
setTimeout(function(){
document.getElementById('success_message').style.display = 'none';
},3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, subject, message){
  var newMessageRef = messagesRef;

  var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // var dateTime = date+' '+time;

  newMessageRef.child(date).child(time).set({
    full_name: name,
    email_address:email,
    subject:subject,
    message:message
  });
}