  //Animation for Images
$(document).ready(function(){
  $("#demoImg1").click(function(){
   $("img.slide").slideUp(1000)
          .slideDown(1000); 
  });

  $("#demoImg2").click(function(){
   $("img.toggleclas").toggleClass("imgdemo");   
  });
 
  
  $("#demoImg3").click(function(){
	    $("#duck").addClass('animated bounceInDown').delay( 1000 ).queue(function(next){
			$("img.egg").addClass('animated bounceInDown').removeClass('hide').delay( 2000 ).queue(function(next){	
                $(this).removeClass('animated bounceInDown');			
				next();			
			});
			$(this).removeClass('animated bounceInDown');
			next();
	   });

  });
  
   //Animation for text 
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
  
  $("#demo3").click(function(){
   $("h4.animate").animate({left:'100px'},"slow")
          .animate({fontSize:'2.5em'},"slow");           
  });
  
   $("#demo4").click(function(){
   $("h4.bigger") .css({
                      "background-color": "yellow",
					  "display": "block",
					  "border-radius": "10px",
					  "padding": "5px",
                      "font-weight": "bolder"
                      });
                    });
                    
   $("#demo5").click(function(){
   $("h4.bounce") .addClass('animated bounceInRight');
   });
   
   $("#demo6").click(function(){
   $("h4.rotate") .addClass('animated rotateIn');
   });
   
   $("#demo7").click(function(){
   $("h4.light") .addClass('animated lightSpeedIn');
   });
   
   $("#demo8").click(function(){
   $("h4.zoom") .addClass('animated zoomInRight');
   });
   
   $("#demo9").click(function(){
   $("h4.fadein") .addClass('animated fadeInUpBig');
   });
  
});