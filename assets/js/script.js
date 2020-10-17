var toDos = JSON.parse(localStorage.getItem("toDos")) || {}


$(".calendar-input").each(function () {
    var time = $(this).attr("id")
    $(this).text(toDos[time] || '')
})


// times 
var date = moment().format('LLLL');
console.log(date);
$("#currentDay").append(date);

var $timeBlock = $(".description");


// time blocks
var task = $(".col-10").on("click", "p", function () {

    // this targets the id in the p section
    var time = $(this).attr("id")
    var text = $(this)
        .text()
        .trim();
    // when p is clicked, turned into a textarea
    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text)
        .attr("id", `event${time}`) // this creates id = "event+time"
    $(this).replaceWith(textInput);
    console.log({ textInput });
});

function saveTask() {
    $(".saveBtn").on("click", function () {
        var buttonTime = $(this).data("time")
        var event = $(`#event${buttonTime}`).val();
        console.log({ event })

        toDos[buttonTime] = event;

        //save to local storage goes in here
        localStorage.setItem("toDos", JSON.stringify(toDos));
        // [{hour: nine, toDo:"updated portfolio"}]
    })
}
saveTask();

// change colors of text block
function changeColor() {

    var currentHour = moment().hour();
    
    
    $timeBlock.each( function() {
        var hour = $(this).data("time")
        if (hour > currentHour) {
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    
        else if (hour == currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        console.log(hour)
    })
    
};
changeColor();

// var timeHour= moment().hour();
//     if ()


//     console.log(timeHour);
