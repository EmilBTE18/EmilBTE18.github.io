$("footer").click(function(){ //en funktion som lyssnar efter ett tryck på #medier

  $('html, body').animate({
        scrollTop: $("footer").offset().top-60
    }, 2500);



});
