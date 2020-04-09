// Reference messages collection
var messagesRef = firebase.database().ref('contact-form');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('get_email_name');
  var email = getInputVal('get_email_id');
  var subject = getInputVal('get_email_subject');
  var message = getInputVal('get_email_msg');

  // Save message
  saveMessage(name, email, subject, message);

  // Show alert
  document.getElementById('contact-form-mail-alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
  document.getElementById('contact-form-mail-alert').style.display = 'none';
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