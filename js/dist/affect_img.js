$(document).ready(function(){
  $("#demoImg1").click(function(){
   $("img.slide").slideUp(1000)
          .slideDown(1000); 
  });

  $("#demoImg2").click(function(){
   $("img.toggleclas").toggleClass("imgdemo");   
  });
  
  $("#demoImg3").click(function(){
   $("img.animate").animate({left:'100px'},"slow")
          .animate({fontSize:'2.5em'},"slow");
           
  });

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