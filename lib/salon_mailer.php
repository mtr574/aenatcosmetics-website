<?php
/**
 * This example shows sending a message using PHP's mail() function.
 */
require_once('PHPMailerAutoload.php');


if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && ($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest')) {

	/*****************************/
	/*---------------------------*/
	/*---------------------------*/

	$mailto = '';
	$mailtoname = '';

	// SMTP (optional)
	$smtphost = '';
	$smtauth = true;
	$smtpuser = '';
	$smtppass = '';

	/*---------------------------*/
	/*---------------------------*/
	/*****************************/

	// handle contact form

	if($_POST['formtype'] == 'contactform'){

		$mail = new PHPMailer;

		// usind SMTP server, recommended! Uncomment the following lines if you don't have an STMP server
/*
		$mail->isSMTP();
		$mail->Host = $smtphost;
		$mail->SMTPAuth = $smtauth;
		$mail->Username = $smtpuser;
		$mail->Password = $smtppass;
*/		
		// SMTP end

		$mail->setFrom($_POST['email'], $_POST['name']);
		$mail->addAddress($mailto, $mailtoname);
		$mail->Subject = $_POST['subject'];
		$mail->isHTML(true);
		$mail->msgHTML($_POST['message']);

		// sending
		if (!$mail->send()) {
			echo "Mailer Error: " . $mail->ErrorInfo;
		} else {
			echo "Message sent!";
		}
	} // contactform

	else if($_POST['formtype'] == 'bookingform'){

		$mail = new PHPMailer;

		// usind SMTP server, recommended! Uncomment the following lines if you don't have an STMP server
/*
		$mail->isSMTP();
		$mail->Host = $smtphost;
		$mail->SMTPAuth = $smtauth;
		$mail->Username = $smtpuser;
		$mail->Password = $smtppass;
*/
		// SMTP end


		$mail->setFrom($_POST['email'], $_POST['name']);
		$mail->addAddress($mailto, $mailtoname);
		$mail->Subject = $_POST['subject'];
		$mail->isHTML(true);

		$message = '<h3>Client booking request:</h3>';
		$message .= 'Name: '.$_POST['name'].'<br/>';
		$message .= 'Email: '.$_POST['email'].'<br/>';
		$message .= 'Phone: '.$_POST['phone'].'<br/>';
		$message .= 'Stylist: '.$_POST['stylist'].'<br/>';
		$message .= 'Service: '.implode(', ',$_POST['service']).'<br/>';
		$message .= 'Date: '.$_POST['datetime'].'<br/>';

		$mail->msgHTML($message);

		if (!$mail->send()) {
			echo "Mailer Error: " . $mail->ErrorInfo;
		} else {
			echo "Message sent!";
		}


	}



} // AJAX request

?>