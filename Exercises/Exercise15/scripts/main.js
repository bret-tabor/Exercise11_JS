$(document).ready(function(){

     ///// Code goes here
//Part 1
function part1 () {
    return alert("IT'S TRIGGERED");
}

$('#btnOne').on('click', part1);

//Part 2
function part2 () {
    $('.update-html').html('Hello World!');
}

$('#btnTwo').on('click', part2);

//Part 3
function part3 () {
    $('#text-update').val('Hello World');
}

$('#btnThree').on('click', part3);

//Part 4
function part4 () {
   var copiedHtml = $('.copy-html').html();
   $('.paste-html').html(copiedHtml);
}

$('#btnCopyHtml').on('click', part4);

//Part 5
function part5 () {
    var copiedValue = $('#copy-text').val();
    $('#paste-text').val(copiedValue);
}

$('#btnCopyValues').on('click', part5);

});
