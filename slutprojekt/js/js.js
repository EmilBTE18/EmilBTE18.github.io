$("#medier").click(function(){ //en funktion som lyssnar efter ett tryck på #medier
console.log("test");

  $('html, body').animate({
        scrollTop: $("#Media").offset().top-60 //åker ned på sidan till #Media
    }, 5000);

});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
