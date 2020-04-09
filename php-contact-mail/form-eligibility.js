$('#eligibility-form-alert').hide();
$('#error_message').hide();

$(function()
{
    function after_form_submitted(data) 
     {
       if(data.result == 'success')
         {
             $('form#reused_form').hide();
             $('#eligibility-form-alert').show();
             $('#error_message').hide();
             $('#eligibility_form').trigger("reset");

             $('#send_eligibility').html('Check Eligibility');
             
             // Time out
             $("#eligibility-form-alert").delay(3500).fadeOut(500); 

             
         }
         else
         {
             $('#error_message').append('<ul></ul>');

             jQuery.each(data.errors,function(key,val)
             {
                 $('#error_message ul').append('<li>'+key+':'+val+'</li>');
             });
             $('#eligibility-form-alert').hide();
             $('#error_message').show();

             //reverse the response on the button
             $('button[type="button"]', $form).each(function()
             {
                 $btn = $(this);
                 label = $btn.prop('orig_label');
                 if(label)
                 {
                     $btn.prop('type','submit' ); 
                     $btn.text(label);
                     $btn.prop('orig_label','');
                 }
             });
            
         }//else
     }

	$('#eligibility_form').submit(function(e)
      {
        e.preventDefault();

         $form = $(this);
         //show some response on the button
         $('button[type="submit"]', $form).each(function()
         {
             $btn = $(this);
             $btn.prop('type','button' ); 
             $btn.prop('orig_label',$btn.text());
             $btn.text('Sending ...');
         });
        


        $.ajax({
            type: "POST",
            url: '../php-contact-mail/handler-eligibility.php',
            data: $form.serialize(),
            success: after_form_submitted,
            dataType: 'json' 
        });
                
      });	
});
