document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    
    if (form) {
        form.onsubmit = function(e) {
            e.preventDefault();
            
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            
            if (name !== "" && email !== "") {
                alert("Merci " + name + "! Votre message a été envoyé à Pause Caffe.");
                form.reset();
            } else {
                alert("Veuillez remplir tous les champs.");
            }
        };
    }
});
