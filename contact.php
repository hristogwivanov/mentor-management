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
  
  $firstName = isset($data["firstName"]) ? htmlspecialchars($data["firstName"]) : '';
  $lastName = isset($data["lastName"]) ? htmlspecialchars($data["lastName"]) : '';
  $fullName = trim("$firstName $lastName");
  $email = isset($data["email"]) ? filter_var($data["email"], FILTER_VALIDATE_EMAIL) : false;
  $subject = isset($data["subject"]) ? htmlspecialchars($data["subject"]) : 'No subject';
  $message = isset($data["message"]) ? htmlspecialchars($data["message"]) : '';

  // Recipient email
  $to = "gw.hivanov@gmail.com";
  $emailSubject = "Ментор Мениджмънт: $subject от $fullName";
  
  // Format email body with proper HTML
  $htmlBody = "<html><body>"
           . "<h2>Ново съобщение от уебсайта Ментор Мениджмънт</h2>"
           . "<p><strong>Име:</strong> $firstName</p>"
           . "<p><strong>Фамилия:</strong> $lastName</p>"
           . "<p><strong>Имейл:</strong> $email</p>"
           . "<p><strong>Тема:</strong> $subject</p>"
           . "<p><strong>Съобщение:</strong></p>"
           . "<p>" . nl2br($message) . "</p>"
           . "</body></html>";

  // SMTP Configuration - Update these with your actual domain credentials
  // For mentor-management.eu, these should be:
  $smtpHost = 'mail.mentor-management.eu';  // Your domain's mail server
  $smtpUsername = 'no-reply@mentor-management.eu'; // Create this email account in cPanel
  $smtpPassword = 'N0Reply@MMVK';    // The password you set for the noreply email
  $smtpPort = 587;                         // 587 for TLS or 465 for SSL
  $smtpSecure = 'tls';                     // 'tls' or 'ssl'
  $senderName = 'Ментор Мениджмънт ММ';

  // Send using SMTP with proper error handling
  try {
    // First, validate required fields
    if (empty($firstName) || empty($lastName) || !$email || empty($message)) {
      throw new Exception('Моля попълнете всички задължителни полета.');
    }
    
    // Use SwiftMailer or PHPMailer for better SMTP support
    // For now, using enhanced mail() function with better headers
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: $senderName <$smtpUsername>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Return-Path: $smtpUsername\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    
    // Additional parameters for better delivery
    $additional_parameters = "-f$smtpUsername";
    
    $success = mail($to, $emailSubject, $htmlBody, $headers, $additional_parameters);
    
    if ($success) {
      http_response_code(200);
      echo json_encode(['success' => true, 'message' => 'Съобщението е изпратено успешно!']);
    } else {
      // Get more specific error information
      $errorMsg = 'Неуспешно изпращане на имейл. ';
      if (!function_exists('mail')) {
        $errorMsg .= 'Mail функцията не е налична.';
      } else {
        $errorMsg .= 'Проверете SMTP настройките.';
      }
      throw new Exception($errorMsg);
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
    // $mail->addReplyTo($email, $fullName);
    
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
    $errorMessage = $e->getMessage();
    
    // Log the error for debugging (in a real environment, log to file)
    error_log("Contact form error: " . $errorMessage);
    
    // Return user-friendly error message
    if (strpos($errorMessage, 'задължителни полета') !== false) {
      echo json_encode([
        'success' => false, 
        'message' => $errorMessage
      ]);
    } else {
      echo json_encode([
        'success' => false, 
        'message' => 'Възникна грешка при свързване със сървъра. Моля, опитайте отново по-късно.',
        'debug' => $errorMessage // Remove this in production
      ]);
    }
  }
} else {
  http_response_code(405);
  echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
?>
