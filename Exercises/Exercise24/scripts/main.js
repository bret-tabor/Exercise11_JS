$(document).ready(function () {


    var form = document.getElementById('needs-validation');
    form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
          form.classList.add('was-validated');
          $('#btnSubmit').on('click', frmfadeOut);
          
                  function frmfadeOut() {
                  $('form').fadeOut();
                  $('#thankyou').fadeIn();
              }

    }, false);


    

});

