jQuery(function() {

$(".menuscroll").bind('click','a', function(event){ 
  //alert();
    event.preventDefault();
    var o =  $( $(this).data("ref") ).offset();   
    var sT = o.top - $(".mainmenu-area").outerHeight(true); // get the fixedbar height
    // compute the correct offset and scroll to it.
   // window.scrollTo(0,sT);
     $('html, body').animate({
          scrollTop: sT
        }, 1000);
});
});

