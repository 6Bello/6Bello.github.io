
  <?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["name"]);
  $email = test_input($_POST["email"]);
  $message = test_input($_POST["message"]);

  $to = "destinatario@esempio.com";
  $subject = "Nuovo messaggio dal sito web";
  $message = "Nome: $name\nEmail: $email\nMessaggio:\n$message";
  $headers = "From: $email";

  if (mail($to, $subject, $message, $headers)) {
    http_response_code(200);
  } else {
    http_response_code(500);
  }
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
