<? php
	$name  = $_POST['name'];
	$email  = $_POST['email'];
	$message  = $_POST['message'];
	
	$email_from = 'robsmedrano00@gmail.com'
	
	$email_subject = "Thanks for messaging us!"
	$email_body = "Username: $name.\n ".
					"Useremail: $email.\n".
						"UserMessage: $message.\n;

	$to = "robsmedrano00@gmail.com";
	$headers =  "From: $email_from \r\n";
	$headers =  "Reply-To: $email \r\n";

		mail($to,$email_subject,$email_body,$headers);
		
		header("Location: Contact.html");
?>