var userDay = document.getElementById("user-day");
var userMonth = document.getElementById("user-month");
var userYear = document.getElementById("user-year");

var submitButton = document.getElementById("submit-date");

submitButton.addEventListener("click", function(evt) {
    var message = document.getElementById("message");
    var parsedDay = parseInt(userDay.value);
    var parsedMonth = (parseInt(userMonth.value) - 1);
    var parsedYear = parseInt(userYear.value);

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var dateIs = new Date(parsedYear, parsedMonth, parsedDay);
    var weekdayIs = weekdays[dateIs.getDay()];
    var monthIs = months[parsedMonth];

    if (weekdayIs === undefined || monthIs === undefined) {
        message.innerText = "";
        setTimeout(function() {
            message.innerText = "Please Enter a Valid Date";
        }, 500)

    } else {
        message.innerText = weekdayIs + ", " + monthIs + " " + parsedDay + ", " + parsedYear;
    }
})