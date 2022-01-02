let color = "purple"
let number = 10
let word = "cool"

$(function() {
    if (color == "purple") {
        $(".red").css("background","purple")
     }  
})
$(function() {
    if (number > 100) {
        $(".yellow").text("whoah, that's a big number.")}
    else if (number < 100) {
        $(".yellow").text("just a regular number, please.")
     }  
})
$(function() {
    if (word == "cool") {
        $(".aqua").text("Power of DOM")}
    else if (word != "cool") {
        $(".blue").text("Power of DOM")
     }  
})