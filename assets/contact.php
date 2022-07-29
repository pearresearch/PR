<?php

if (isset ($ POST['submit'])) {
$name = $_POST['name'];
$mailFrom = $ POST['email'];
$message = $_POST['message'];

$to = "";
$headers = "From: ".$mailFrom;

$txt = "You have recevied an email from ".$name. "who says".$message;

mail($mailTo, $subject, $txt, $headers);
header ("Location: index.html?mailsend");
}



<?php
//get data from form
if (isset ($ POST['submit'])) {
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$to = "graintheodore@gmail.com";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@yoursite.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");

}
?>
