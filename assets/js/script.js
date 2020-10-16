// current time 
var date = moment().format('LLLL');
console.log(date);
$("#currentDay").append(date);

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

// $(".saveBtn").on("click", function() {
//     textInput.val = $(this)
//     .val()
//     .trim();
    
//     console.log(textInput)

// })

// var to get item from local storage
//  var savedToDo = JSON.parse(localStorage.getItem('ToDo')) || [];

// $(".save-btn").on("click", function () {
    //     console.log("hey this is working!");
    //     localStorage.setItem("ToDo", JSON.stringify(textInput));
    //     JSON.parse(localStorage.getItem('ToDo')) || [];
    // })