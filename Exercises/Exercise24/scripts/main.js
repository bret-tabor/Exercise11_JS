$(document).ready(function () {


    var form = document.getElementById('needs-validation');
    
    $('#btnSubmit').on('click', function(){

        if (form.checkValidity() === false) {
        } else {
            $('form').fadeOut('slow');
            $('#thankyou').fadeIn('slow');
        }
          form.classList.add('was-validated');   
    });
    
});

