<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

try {
    // Get JSON input
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    // Validate input
    if (!$data) {
        throw new Exception('Invalid JSON data received');
    }

    // Required fields
    $requiredFields = ['firstName', 'lastName', 'email', 'subject', 'message'];
    foreach ($requiredFields as $field) {
        if (empty($data[$field])) {
            throw new Exception("Field '$field' is required");
        }
    }

    // Sanitize input data
    $firstName = htmlspecialchars(trim($data['firstName']), ENT_QUOTES, 'UTF-8');
    $lastName = htmlspecialchars(trim($data['lastName']), ENT_QUOTES, 'UTF-8');
    $email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars(trim($data['subject']), ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars(trim($data['message']), ENT_QUOTES, 'UTF-8');

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Invalid email address');
    }

    // Email configuration
    $to = 'gw.hivanov@gmail.com'; // Your business email
    $from = 'no-reply@mentor-management.eu'; // Your no-reply email
    $fromName = 'Mentor Management Contact Form';

    // Create email subject
    $emailSubject = "[Contact Form] $subject";

    // Create email body
    $emailBody = "
    New contact form submission from Mentor Management website:

    Name: $firstName $lastName
    Email: $email
    Subject: $subject

    Message:
    $message

    ---
    This email was sent from the Mentor Management contact form.
    Sender IP: " . $_SERVER['REMOTE_ADDR'] . "
    Time: " . date('Y-m-d H:i:s') . "
    ";

    // Email headers
    $headers = array(
        'From' => "$fromName <$from>",
        'Reply-To' => "$firstName $lastName <$email>",
        'Return-Path' => $from,
        'X-Mailer' => 'PHP/' . phpversion(),
        'MIME-Version' => '1.0',
        'Content-Type' => 'text/plain; charset=UTF-8',
        'Content-Transfer-Encoding' => '8bit'
    );

    // Convert headers array to string
    $headerString = '';
    foreach ($headers as $key => $value) {
        $headerString .= "$key: $value\r\n";
    }

    // Send email
    $emailSent = mail($to, $emailSubject, $emailBody, $headerString);

    if ($emailSent) {
        // Log successful submission (optional)
        error_log("Contact form submission successful from: $email");
        
        echo json_encode([
            'success' => true, 
            'message' => 'Email sent successfully'
        ]);
    } else {
        throw new Exception('Failed to send email');
    }

} catch (Exception $e) {
    // Log error
    error_log("Contact form error: " . $e->getMessage());
    
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Server error: ' . $e->getMessage()
    ]);
}
?>
