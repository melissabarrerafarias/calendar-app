// current time 
var date = moment().format('LLLL');
console.log(date);
$("#currentDay").append(date);

var timeBlock = $(".description");


// time blocks
var task = $(".col-10").on("click", "p", function () {
    var time = $(this).attr("id")
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text)
        .attr("id", `event${time}`)
    $(this).replaceWith(textInput);
    console.log(textInput);
});

function saveTask() {
    $(".saveBtn").on("click", function () {
        console.log("this is working")
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
        $(".calendar-input").append(toDos);
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