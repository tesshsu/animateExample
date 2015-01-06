$(document).ready(function(){
  $("#demo1").click(function(){
   $("h4.fadeEffect").fadeOut(1500).fadeIn(1500);
          
  });

  $("#demo2").click(function(){
   $("h4.slide").css("color","blue")
          .slideUp(1500)
          .slideDown(1500);   
  });
  
  $("#demo3").click(function(){
   $("h4.animate").animate({left:'100px'},"slow")
          .animate({fontSize:'2.5em'},"slow");
           
  });
});