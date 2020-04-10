

var memberRef = firebase.database().ref('memberEligibility');



function sendEligibilityForm(e){
    e.preventDefault();

    var name = document.getElementById("eligibility_email_name").value;
    var email = document.getElementById("eligibility_email_id").value;
    var phone = document.getElementById("eligibility_email_phone").value;
    var pat_q = $("input[name='gridRadios']:checked").val();
    var med_q = $("input[name='gridRadiosB']:checked").val();

    console.log(name, email, phone, pat_q, med_q)
    
    saveMember(name, email, phone, pat_q, med_q);

    // Show alert
    document.getElementById('eligibility-form-alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
    document.getElementById('eligibility-form-alert').style.display = 'none';
    },3000);

    document.getElementById('eligibility_form').reset();

}

function saveMember(name, email, phone, patient_Q, medicaid_Q){
    // var newMemberRef = memberRef.push();
    var newMemberRef = memberRef;

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // var dateTime = date+' '+time;
    
    newMemberRef.child(date).child(time).set({
        full_name: name,
        email_address: email,
        phone_number:  phone,
        are_you_the_patient: patient_Q,  
        does_the_patient_have_medicaid: medicaid_Q
    });
  }