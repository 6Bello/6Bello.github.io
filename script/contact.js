const form = document.getElementById('email-form');

form.addEventListener('submit', function(event) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const data = {
    name: name,
    email: email,
    message: message
  };

  const xhr = new XMLHttpRequest();
  xhr.open('POST', form.action);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      alert('Messaggio inviato con successo!');
    } else {
      alert('Si è verificato un errore durante l\'invio del messaggio.');
    }
  };
  xhr.send(JSON.stringify(data));

  event.preventDefault();
});
