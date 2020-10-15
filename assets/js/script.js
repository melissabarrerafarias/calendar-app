// current time 
var date = moment().format('LLLL');
console.log(date);
$("#currentDay").append(date);

// time blocks
$(".col-10").on("click", "p", function() {
    console.log(this);
})
