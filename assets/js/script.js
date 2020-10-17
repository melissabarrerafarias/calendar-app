// current time 
var date = moment().format('LLLL');
console.log(date);
$("#currentDay").append(date);

var afterDate = moment().add(1, "h");
console.log(afterDate);

var beforeDate = moment().subtract(1, "h");
console.log(beforeDate);

var timeBlock = $(".description");


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
    console.log({textInput});
});

function saveTask() {
    $(".saveBtn").on("click", function () {
        var buttonTime = $(this).data("time")
        var event = $(`#event${buttonTime}`).val();
        console.log({event})

        var newToDo = {
            hour: buttonTime,
            toDo: event,
        }

        var toDos = JSON.parse(localStorage.getItem("toDos")) 
        if (toDos) {
            var toDoExist = false;
            for ( i = 0; i < toDos.length; i++) {
                if (newToDo.hour === toDos[i].hour) {
                    toDos[i] = newToDo;
                    toDoExist = true;
                }
            }
            if (!toDoExist) {
                toDos.push(newToDo);
            }
        } else {
            toDos = [newToDo]
            
        }
        //saving local storage goes in here
        localStorage.setItem("toDos", JSON.stringify(toDos));
        // [{hour: nine, toDo:"updated portfolio"}]
    })
}
saveTask();



// change colors of text block
// function changeColor() {

//     var updateColor = moment().hour();

//     console.log(updateColor);

//     if (moment().isAfter(updateColor)) {
//         $(timeBlock).removeClass("past");
//         $(timeBlock).addClass("future");
//     }

//     else if (moment().isSame(updateColor)) {
//         $(timeBlock).removeClass("past");
//         $(timeBlock).addClass("present");
//     }
// };
// changeColor();