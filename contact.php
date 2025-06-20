<?php
// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// For preflight OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get JSON input
  $json = file_get_contents('php://input');
  $data = json_decode($json, true);
  
  $name = isset($data["name"]) ? htmlspecialchars($data["name"]) : '';
  $email = isset($data["email"]) ? filter_var($data["email"], FILTER_VALIDATE_EMAIL) : false;
  $subject = isset($data["subject"]) ? htmlspecialchars($data["subject"]) : 'No subject';
  $message = isset($data["message"]) ? htmlspecialchars($data["message"]) : '';

  // Recipient email
  $to = "gw.hivanov@gmail.com";
  $emailSubject = "Ментор Мениджмънт: $subject от $name";
  
  // Format email body with proper HTML
  $htmlBody = "<html><body>"
           . "<h2>Ново съобщение от уебсайта МенторМениджмънт</h2>"
           . "<p><strong>Име:</strong> $name</p>"
           . "<p><strong>Имейл:</strong> $email</p>"
           . "<p><strong>Тема:</strong> $subject</p>"
           . "<p><strong>Съобщение:</strong></p>"
           . "<p>" . nl2br($message) . "</p>"
           . "</body></html>";

  // SMTP Configuration - Update these with your Superhosting.bg credentials
  $smtpHost = 'mail.your-domain.com';     // Your SMTP server (e.g., mail.mentor-management.eu)
  $smtpUsername = 'noreply@your-domain.com'; // Replace with your actual noreply email
  $smtpPassword = 'your-smtp-password';    // Replace with your actual password
  $smtpPort = 587;                        // Common ports: 587 (TLS) or 465 (SSL)
  $smtpSecure = 'tls';                    // 'tls' or 'ssl'
  $senderName = 'Ментор Мениджмънт';

  // Send using SMTP
  try {
    // Use PHP built-in mail function as fallback if you prefer not to include PHPMailer
    // Comment this block and uncomment the PHPMailer code below if you want to use PHPMailer
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: $senderName <$smtpUsername>\r\n";
    $headers .= "Reply-To: $email\r\n";

    $success = mail($to, $emailSubject, $htmlBody, $headers);
    
    if ($success) {
      http_response_code(200);
      echo json_encode(['success' => true, 'message' => 'Съобщението е изпратено успешно!']);
    } else {
      throw new Exception('Mail function failed');
    }
    
    /* To use PHPMailer (recommended), uncomment this section and install PHPMailer
    // via Composer or download it manually from https://github.com/PHPMailer/PHPMailer
    
    // Uncomment this section and comment out the built-in mail function above
    // require 'vendor/autoload.php'; // If using Composer
    // use PHPMailer\PHPMailer\PHPMailer;
    // use PHPMailer\PHPMailer\Exception;
    // use PHPMailer\PHPMailer\SMTP;
    
    // $mail = new PHPMailer(true);
    // $mail->CharSet = 'UTF-8';
    // $mail->isSMTP();
    // $mail->Host = $smtpHost;
    // $mail->SMTPAuth = true;
    // $mail->Username = $smtpUsername;
    // $mail->Password = $smtpPassword;
    // $mail->Port = $smtpPort;
    // $mail->SMTPSecure = $smtpSecure;
    
    // $mail->setFrom($smtpUsername, $senderName);
    // $mail->addAddress($to);
    // $mail->addReplyTo($email, $name);
    
    // $mail->isHTML(true);
    // $mail->Subject = $emailSubject;
    // $mail->Body = $htmlBody;
    // $mail->AltBody = strip_tags(str_replace('<br>', "\n", $htmlBody));
    
    // $mail->send();
    // http_response_code(200);
    // echo json_encode(['success' => true, 'message' => 'Съобщението е изпратено успешно!']);
    */
  } catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
      'success' => false, 
      'message' => 'Възникна грешка при изпращане на съобщението.',
      'error' => $e->getMessage()
    ]);
  }
} else {
  http_response_code(405);
  echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
?>
