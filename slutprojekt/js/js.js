$("#medier").click(function(){ //en funktion som lyssnar efter ett tryck på #medier
console.log("test");

  $('html, body').animate({
        scrollTop: $("#Media").offset()
    }, 2500);

});
