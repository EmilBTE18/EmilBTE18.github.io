$("#medier").click(function(){ //en funktion som lyssnar efter ett tryck på #medier

  $('html, body').animate({
        scrollTop: $("footer").offset().top-60
    }, 2500);



});

function scroll_to('footer'){
   if (div.scrollTop < div.scrollHeight - div.clientHeight)
        div.scrollTop += 10; // move down

}
