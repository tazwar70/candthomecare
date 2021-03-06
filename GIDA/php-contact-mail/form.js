$('#success_message').hide();
$('#error_message').hide();

$(function()
{
    function after_form_submitted(data) 
     {
       if(data.result == 'success')
         {
             $('form#reused_form').hide();
             $('#success_message').show();
             $('#error_message').hide();
             $('#contactForm').trigger("reset");

             $('#send_email').html('Send Message');
             
             // Time out
             $("#success_message").delay(3500).fadeOut(500); 

             
         }
         else
         {
             $('#error_message').append('<ul></ul>');

             jQuery.each(data.errors,function(key,val)
             {
                 $('#error_message ul').append('<li>'+key+':'+val+'</li>');
             });
             $('#success_message').hide();
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

	$('#contactForm').submit(function(e)
      {
        e.preventDefault();

         $form = $(this);
         //show some response on the button
         $('button[type="submit"]', $form).each(function()
         {
             $btn = $(this);
             $btn.prop('type','button' ); 
             $btn.prop('orig_label',$btn.text());
             $btn.text('<i class="fad fa-spinner fa-pulse"></i> Sending ...');
         });
        


        $.ajax({
            type: "POST",
            url: '../php-contact-mail/handler.php',
            data: $form.serialize(),
            success: after_form_submitted,
            dataType: 'json' 
        });
                
      });	
});
