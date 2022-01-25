// Variables
var momentTime = parseInt(moment().format('H'));
var classes = [".9AM", ".10AM", ".11AM", ".12PM", ".1PM", ".2PM", ".3PM", ".4PM", ".5PM", ".6PM"]
var time = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18,];
var timeIndex = time.indexOf(momentTime);
// Setting current day time in UK format
$("#currentDay").text(moment().format('dddd, MMMM D, YYYY'));
var currentDayCheck = moment().format('dddd, MMMM D, YYYY')
var userNotes = ["", "", "", "", "", "", "", "", "", "", ""]

// Checking current day function
Daycheck()

if (momentTime < 9) {
    futureInput();
}
else if (momentTime > 18) {
    pastInput();
}
else {
    presentInput()
}
