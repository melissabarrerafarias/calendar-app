// current time 
var date = moment().format('LLLL');
console.log(date);
$("#currentDay").append(date);

var timeBlock = $("#one");

var calendarContent = [];
// time blocks
var task = $(".col-10").on("click", "p", function () {
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);
    $(this).replaceWith(textInput);
    console.log(textInput);
});

function saveTask() {
    $(".saveBtn").on("click", function (task) {
        console.log("this is working")

    })
}
saveTask();
// var to get item from local storage
//  var savedToDo = JSON.parse(localStorage.getItem('ToDo')) || [];

// $(".save-btn").on("click", function () {
    //     console.log("hey this is working!");
    //     localStorage.setItem("ToDo", JSON.stringify(textInput));
    //     JSON.parse(localStorage.getItem('ToDo')) || [];
    // })


// change colors of text block
function changeColor() {

    var updateColor = moment().hour();

    $(timeBlock).removeClass("past");

    console.log(updateColor);

    if (moment().isAfter(updateColor)) {
        $(timeBlock).addClass("future");
    }

    else if (moment().isBefore(updateColor)) {
        $(timeBlock).addClass("past")
    }

    else if (moment().isSame(updateColor)) {
        $(timeBlock).addClass("present")
    }
};
changeColor();