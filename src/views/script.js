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