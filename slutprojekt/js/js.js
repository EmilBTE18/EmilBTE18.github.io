$("#medier").click(function () { //en funktion som lyssnar efter ett tryck på #medier
    $("html, body").animate({
        scrollTop: $("#Media").offset().top - 60
    }, 5000);
});

function myFunction() {
    var x = document.getElementById("länkar");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
