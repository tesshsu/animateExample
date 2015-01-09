//write with Javascript & Jquery, you could always add or modified the class for any animation you like to express!! go for fun!!  
//Animation for Images
$(document).ready(function(){
  $("#demoImg1").click(function(){
   $("img.slide").slideUp(1500)
          .slideDown(1500); 
  });

  $("#demoImg2").click(function(){
   $("img.toggleclas").toggleClass("imgdemo");   
  });
 
  
  $("#demoImg3").click(function(){
	    $("#duck").addClass('animated shake').delay( 1000 ).queue(function(next){
			$("img.egg").addClass('animated bounceInDown').removeClass('hide').delay( 2000 ).queue(function(next){	
                $(this).removeClass('animated bounceInDown');			
				next();			
			});
			$(this).removeClass('animated shake');
			next();
	   });
  });
  
  $("#demoImg4").click(function(){
   $("img.bird").hide().queue(function(next){
            $("img.bird2").addClass('animated flipInY').removeClass('hide');
			});
                    
    });
  $("#demoImg5").click(function(){
   $("img.Penguin").addClass('animated flipInY').delay( 1000 ).queue(function(next){
        $("img.smallPenguin").addClass('animated flipInY').delay( 1500 ).queue(function(next){
                $("img.water").addClass('animated swing').removeClass('hide').delay( 1800 ).queue(function(next){		
                $(this).removeClass('animated flipInY');			
				next();
                });				
			});
			$(this).removeClass('animated flipInY');
			next();
	   });
   });
   
  $("#demoImg6").click(function(){
	$("img.rocket").toggleClass('rocketfly');   
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
		$("h4.larger").animate({fontSize:'2em'},"slow");           
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
		$("h4.bounce") .toggleClass('animated bounceInRight');
   });
   
   $("#demo6").click(function(){
		$("h4.rotate") .toggleClass('animated rotateIn');
   });
   
   $("#demo7").click(function(){
		$("h4.light") .toggleClass('animated lightSpeedIn');
   });
   
   $("#demo8").click(function(){
		$("h4.zoom") .toggleClass('animated zoomInRight');
   });
   
   $("#demo9").click(function(){
		$("h4.fadein") .toggleClass('animated fadeInUpBig');
   });
   
   $("#demo10").click(function(){
		$("h4.rubber") .toggleClass('animated rubberBand');
   });
  
   $("#demo11").click(function(){
		$("h4.roll") .toggleClass('animated rollIn');
   });
   
   $("#demo12").click(function(){
		$("h4.flip") .toggleClass('animated flipInY');
   });
   
   //Animation for cell
    $("li.cell0").hover(function(){
	    $( this ).addClass( "cellbigger" );
		$( this ).removeClass( "cellbigger" );
	});
   
	
   $("#democell").click(function(){
	$("li.cell").toggleClass('animated zoomIn', 'slow');
    });
	
	$("#democell2").click(function(){
   $("li.cell2").toggleClass('animated lightSpeedIn','slow');
    });
	
	$("#democell3").click(function(){
   $("li.cell3").toggleClass('animated rubberBand','slow');
    });
// Animate for cell 4	
$( "#dialog" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Ok",
			click: function() {
				$( this ).dialog( "close" );
			}
		},
		{
			text: "Cancel",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});
	
    $("#badge").click(function( event ){
		$( "#dialog" ).dialog( "open" );
		event.preventDefault();
	});
	
//Animate for cell 5
 $('.carousel').carousel({
      interval: 3000
    })
$( "#dialog2" ).dialog({
	autoOpen: false,
	width: 400,
});
	
    $("#badge2").click(function( event ){
		$( "#dialog2" ).dialog( "open" );
		event.preventDefault();
	});
	 
     
  // read more expand function
	$("#readmore > .panels").hover(function () {
		$(this).children(".title, .more-less").fadeToggle(1000);
	});
    $('#readmore .read-more').on('click', function(){
        $('#readmore .picture2').css('display', 'block' ).animate({
                'height':$('#picture1_2 img').height()
            }, 300 , function(){
				$(this).height('auto')
			});
        $('#readmore .more-less > span').toggleClass('hidden'); 
    });
    
    $('#readmore .read-less').on('click', function(){
        $('#readmore .picture2').animate({
                'height':0
            }, 300 , function(){
				$(this).css('display','none');
			});
        $('#readmore .more-less > span').toggleClass('hidden'); 
    });

});