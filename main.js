var images = document.getElementById("slider");
var ButtonOne = document.getElementById("button1").addEventListener("click", button1);
var ButtonTwo = document.getElementById("button2").addEventListener("click", button2);
var ButtonThree = document.getElementById("button3").addEventListener("click", button3);
var ButtonFour = document.getElementById("button4").addEventListener("click", button4);
var ButtonFive = document.getElementById("button5").addEventListener("click", button5);
var ButtonSix = document.getElementById("button6").addEventListener("click", button6);
var ButtonSeven = document.getElementById("button7").addEventListener("click", button7);
var ButtonEight = document.getElementById("button8").addEventListener("click", button8);
var ButtonNine = document.getElementById("button9").addEventListener("click", button9);
function button1(f) {
    f.preventDefault();
    images.style.transform=("translateX(0)");
}
function button2(f) {
    f.preventDefault();
    images.style.transform=("translateX(-100%)");
}
function button3(f) {
    f.preventDefault();
    images.style.transform=("translateX(-200%)");
}
function button4(f) {
    f.preventDefault();
    images.style.transform=("translateX(-300%)");
}
function button5(f) {
    f.preventDefault();
    images.style.transform=("translateX(-400%)");
}
function button6(f) {
    f.preventDefault();
    images.style.transform=("translateX(-500%)");
}
function button7(f) {
    f.preventDefault();
    images.style.transform=("translateX(-600%)");
}
function button8(f) {
    f.preventDefault();
    images.style.transform=("translateX(-700%)");
}
function button9(f) {
    f.preventDefault();
    images.style.transform=("translateX(-800%)");
}