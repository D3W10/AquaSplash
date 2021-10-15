window.onscroll = () => {
    if (document.getElementById("S1").offsetHeight < window.scrollY) {
        document.getElementsByTagName("nav")[0].style.marginTop = "-50px";
        document.getElementById("backUp").style.bottom = "15px";
    }
    else {
        document.getElementsByTagName("nav")[0].removeAttribute("style");
        document.getElementById("backUp").removeAttribute("style");
    }
}

document.getElementById("backUp").addEventListener("click", () => {
    window.scrollTo(0, 0);
});