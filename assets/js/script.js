// current time 
var date = moment().format('LLLL');
console.log(date);
$("#currentDay").append(date);

var saveTasks = function () {
    localStorage.setItem(textInput);
};

// time blocks
$(".col-10").on("click", "p", function () {
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);
    $(this).replaceWith(textInput);
});

$(":button").on("click", function () {
    saveTasks();
})