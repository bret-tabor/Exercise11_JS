var DateFormatter = {
    getShortTime: function (date) {
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var formattedHours = '';
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

            if (minutes < 10) {
                minutes = "0" + minutes;
            }

            return hours + ':' + minutes + ampm;
        }

        , getLongTime: function (date) {
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();
            var formattedHours = '';
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

            if (minutes < 10) {
                minutes = "0" + minutes;
            }

            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            return hours + ':' + minutes + ':' + seconds + ampm;
        }

        , getShortDate: function (date) {
            var month = '';
            var day = date.getDate();
            var year = date.getFullYear();

            var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
            month = months[d.getMonth()];

            if (day < 10) {
                day = "0" + day;
            }

            return month + "/" + day + "/" + year;
        }

        , getLongDate: function (date) {
        var month = '';
        var day = date.getDate();
        var year = date.getFullYear();

        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        month = months[d.getMonth()];

        if (day < 10) {
            day = "0" + day;
        }

        return month + " " + day + ", " + year;
    }
    
    , getShortDateTime: function (date) {
            return this.getShortDate(d) + " " + this.getShortTime(d);
        }

    , getLongDateTime: function (date) {
            return this.getLongDate(d) + " " + this.getLongTime(d);
        }

    , getExtendedDateTime: function (date) {
        var dayOfWeek = '';
        var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        dayOfWeek = day[d.getDay()];

        return dayOfWeek + ', ' + this.getLongDate(d) + " " + this.getLongTime(d);
    }
}





var d = new Date();

// instead of console.log I thought I'd write to the html. 
var shortTime = DateFormatter.getShortTime(d);
document.getElementById("shortTime").innerHTML = shortTime;

var longTime = DateFormatter.getLongTime(d);
document.getElementById("longTime").innerHTML = longTime;

var shortDate = DateFormatter.getShortDate(d);
document.getElementById("shortDate").innerHTML = shortDate;

var longDate = DateFormatter.getLongDate(d);
document.getElementById("longDate").innerHTML = longDate;

var shortDateTime = DateFormatter.getShortDateTime(d);
document.getElementById("shortDateTime").innerHTML = shortDateTime;

var longDateTime = DateFormatter.getLongDateTime(d);
document.getElementById("longDateTime").innerHTML = longDateTime;

var extDateTime = DateFormatter.getExtendedDateTime(d);
document.getElementById("extDateTime").innerHTML = extDateTime;