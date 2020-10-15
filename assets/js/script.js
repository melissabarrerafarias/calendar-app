// current time 
var date = moment().format('LLLL');
console.log(date);
$("#currentDay").append(date);

// time blocks
$(".time-block").on("click", function() {
    console.log("hi!");
});
