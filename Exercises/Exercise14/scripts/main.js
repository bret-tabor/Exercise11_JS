

getElm('Submit').addEventListener('click', function() {
  alert("Submit Success!");
});









// getElementById
function getElm(id) {
    return document.getElementById(id);
}

// get value of the element
function getValue(id) {
    return getElm(id).value;
}