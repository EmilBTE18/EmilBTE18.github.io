$("#medier").click(function(){ //en funktion som lyssnar efter ett tryck på #medier

  $('html, body').animate({
        scrollTop: $("#medier").offset().top-60
    }, 2500);



});
