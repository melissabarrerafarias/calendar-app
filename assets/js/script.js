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

        $(".col-10").on("blur", "textarea", function() {
            var text = $(this)
            .val()
            .trim();

            
            
        });
})
