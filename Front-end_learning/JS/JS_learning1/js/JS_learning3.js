/* window.onload = function aa() {
    show();
    setTimeout("hide()", 3000);
}
var h = 0;
var hid = document.getElementById("hid");
var sho = document.getElementById("sho");

function show() {
    if (h < 300) {
        h += 5;
        hid.style.height = h + "px";
    } else {
        return;
    }
    setTimeout("show()", 30);
}

function hide() {
    if (h > 0) {
        h -= 5;
        hid.style.height = h + "px";
    } else {
        dd();
        return;
    }
    setTimeout("hide()", 30);
}
var a = 0;

function dd() {
    if (a < 60) {
        a += 1;
        sho.style.height = a + "px";
    } else {
        return;
    }
    setTimeout("dd()", 30);
} */