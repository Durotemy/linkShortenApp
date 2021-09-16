var day = document.querySelector(".day");
day.addEventListener("click", changeBackgroundColor);

var night = document.querySelector(".night");
night.addEventListener("click", changebackgroundColor)


function changeBackgroundColor() {
    var bodyElement = document.querySelector('.bodyElement')
    bodyElement.style.backgroundColor = 'white'
}




function changebackgroundColor() {
    var bodyElement = document.querySelector(".bodyElement");
    bodyElement.style.backgroundColor = "grey";
}