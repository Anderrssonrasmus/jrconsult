//Contact Form in PHP
<?php
  $name1 = htmlspecialchars($_POST['firstname']);
  $name2 = htmlspecialchars($_POST['surname']);
  $email = htmlspecialchars($_POST['email']);
  $phone = htmlspecialchars($_POST['phone']);
  $message = htmlspecialchars($_POST['message']);

  if(!empty($email) && !empty($message)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
      $receiver = "rasmus022.ra@gmail.com"; //enter that email address where you want to receive all messages
      $subject = "From: $name <$email>";
      $body = "Name: $name1 $name2\nEmail: $email\nPhone: $phone\n\nMessage:\n$message\n\nRegards,\n$name";
      $sender = "From: $email";
      if(mail($receiver, $subject, $body, $sender)){
         echo "Ditt meddelande har skickats!";
      }else{
         echo "Det gick inte att skicka ditt meddelande";
      }
    }else{
      echo "Skriv en giltig Email address";
    }
  }else{
    echo "Email och meddelande krävs!";
  }
?>