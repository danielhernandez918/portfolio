function playvid(element) {
    element.play();
}

function pausevid(element) {
    element.pause();
}

function hide() {
    document.getElementById('swing').style.display = "none"
}

function spidey() {
    var gif= "./swing.gif";
    document.getElementById('swing').src = gif.replace();
    document.getElementById('swing').style.display='flex';
    document.getElementById('swing').style.height='50%';
    setTimeout(hide,1000);
}

function scale(element, value) {
    element.style.transform = "scale(" + value +")";
}

function underline(element) {
    element.style.textDecoration = "underline";
}

function noline(element) {
    element.style.textDecoration = "none";
}

// $(document).ready(function(){
//     //Take your div into one js variable
//     var div = $("#divToShowHide");
//     //Take the current position (vertical position from top) of your div in the variable
//     var pos = div.position();
//     //Now when scroll event trigger do following
//     $(window).scroll(function () {
//     var windowpos = $(window).scrollTop();
//     //Now if you scroll more than 100 pixels vertically change the class to AfterScroll
//     // I am taking 100px scroll, you can take whatever you need
//     if (windowpos >= (pos.top - 100)) {
//         div.addClass("AfterScroll");
//     }
//     //If scroll is less than 100px, remove the class AfterScroll so that your content will be hidden again 
//     else {
//         s.removeClass("AfterScroll");
//     }
//     //Note: If you want the content should be shown always once you scroll and do not want to hide it again when go to top agian, no need to write the else part
//     });
// });