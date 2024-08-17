function sendEmail() {
    var templateParams = {
       from_name: document.getElementById("name").value,
       email_id: document.getElementById("email").value,
       message: document.getElementById("message").value
    };

    emailjs.send('service_m8gni1l', 'template_5s5uc2c', templateParams)
       .then(function(response) {
          alert('SUCCESS!', response.status, response.text);
       }, function(error) {
          alert('FAILED...', error);
       });
 }