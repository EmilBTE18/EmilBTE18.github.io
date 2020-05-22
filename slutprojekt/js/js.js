$("#medier").click(function () { //en funktion som lyssnar efter ett tryck på #medier
    $("html, body").animate({
        scrollTop: $("#Media").offset().top - 60
    }, 5000);
});

function myFunction() {
    var x = document.getElementById("länkar"); // länkarna i dropdown
    if (x.style.display === "block") { //om man trycker på hamburger menyn = stängd dropdown
        x.style.display = "none";  //om man trycker på hamburger menyn = öppen dropdown
    } else {
        x.style.display = "block"; // stängd dropdown när man inte tryckt på hamburger menyn
    }
}
$("länkar").css("display","none"); // sätter display none på länkarna så dem syns när javascript är av
