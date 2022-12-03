// form
function fn() {
    document.getElementById("hid").style.display = "block";
    document.getElementById("hid").style.display = "flex";
    document.getElementById("hid").style.justifyContent = "center";

    var eml = document.getElementById("email").value;
    document.getElementById("r1").innerHTML = "Email - " + eml;

    var pas = document.getElementById("pass").value;
    document.getElementById("r2").innerHTML = "Password - " + pas;

    var gen = document.getElementsByName("gender");
    for (i = 0; i < gen.length; i++) {
        if (gen[i].checked == true)
            document.getElementById("r3").innerHTML = "Gender - " + gen[i].value;
    }

    var lang = document.getElementsByName("language");
    for (g = 0; g < lang.length; g++) {
        if (lang[g].checked)
            document.getElementById("r4").append(lang[g].value)
    }

    var cty = document.getElementById("Select").value;
    document.getElementById("r5").innerHTML = "City - " + cty;

    var cmt = document.getElementById("comt").value;
    document.getElementById("r6").innerHTML = "Comment - " + cmt;
}
// form

// theme
var n = 0;
function fn1() {
    if (n == 0) {
        document.getElementById("bdy").style.backgroundColor = "black";
        document.getElementById("myBtn6").textContent = "Light";
        n++;
    }
    else if (n == 1) {
        document.getElementById("bdy").style.backgroundColor = "white";
        document.getElementById("myBtn6").textContent = "Dark";
        n = 0;
    }
}
// theme

// my button
function fn3() {
    document.getElementById("bdy").style.backgroundColor = "blue";
}
function fn4() {
    document.getElementById("bdy").style.backgroundColor = "red";
}
function fn5() {
    document.getElementById("bdy").style.backgroundColor = "green";
}
function fn6() {
    document.getElementById("bdy").style.backgroundColor = "yellow";
}
// my button

// hide show
var n = 0;
function fn7() {
    if (n == 0) {
        document.getElementById("frm").style.display = "none";
        document.getElementById("myBtn5").textContent = "Show";

        n++;
    }
    else if (n == 1) {
        document.getElementById("frm").style.display = "block";
        document.getElementById("myBtn5").textContent = "Hide";
        n = 0;
    }
}
// hide show

// resize
window.addEventListener("resize", fn8)
function fn8() {
    document.getElementById("bdy").style.backgroundColor = "orange";
}
// resize

// scroll
window.addEventListener("scroll", fn9)
function fn9() {
    document.getElementById("bdy").style.backgroundColor = "pink";
}
// scroll