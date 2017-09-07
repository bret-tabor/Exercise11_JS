var DateFormatter = {
    getShortTime: function (date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        //var formattedHours = '';
        var ampm = '';

        if (hours >= 12) {
            ampm = ' PM';
        } else {
            ampm = ' AM';
        }
        if (hours > 12) {
            hours -= 12;
        } else if (hours === 0) {
            formattedHours = 12;
        } else {
            formattedHours = hours;
        }
        return hours + ':' + minutes + ampm;
    }
}


var d = new Date();
var formDate = DateFormatter.getShortTime(d);
document.getElementById("shortTime").innerHTML = formDate;