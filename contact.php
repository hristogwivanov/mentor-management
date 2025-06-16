<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST["name"]);
  $email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
  $message = htmlspecialchars($_POST["message"]);

  $to = "your@email.com";
  $subject = "New message from $name";
  $body = "Name: $name\nEmail: $email\nMessage:\n$message";
  $headers = "From: $email\r\nReply-To: $email";

  if ($email && mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo "Message sent!";
  } else {
    http_response_code(500);
    echo "Error sending message.";
  }
}
?>
