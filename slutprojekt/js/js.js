
$("#medier").click(function () { //en funktion som lyssnar efter ett tryck på #medier
    $("html, body").animate({
        scrollTop: $("#Media").offset().top - 60
    }, 4000);
});

function myFunction() {
    var x = document.getElementById("länkar"); // länkarna i dropdown
    if (x.style.display === "none") { //om man trycker på hamburger menyn = öppen dropdown
        x.style.display = "block";  //om man trycker på hamburger menyn = stängd dropdown
    } else {
        x.style.display = "none"; // stängd dropdown när man inte tryckt på hamburger menyn
    }
}

$("#länkar").hide(); // gömmer länkarna
