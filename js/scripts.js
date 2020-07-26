//jquery functions for what we do
//first column
$(document).ready(function(){
    $("#design-img").click(function(){
        $(".design-p").hide().toggle();
        $("#design-img").slideUp();    
            });
    $(".design-p").click(function(){
        $("#design-img").slideDown();
        $(".design-p").hide();
    })
    
    //second column
    $("#dev-img").click(function(){
        $(".dev-p").hide().toggle();
        $("#dev-img").slideUp();    
            });
        $(".dev-p").click(function(){
            $("#dev-img").slideDown();
            $(".dev-p").hide();
        });
    
    //third column
    $("#product-img").click(function(){
        $(".product-p").hide().toggle();
        $("#product-img").slideUp();    
            });
        $(".product-p").click(function(){
            $("#product-img").slideDown();
            $(".product-p").hide();
        });
});  
  
//portfolio function
$(document).ready(function(){
    $('.card').mouseover(function (){
          $('.project').show();
      }); 
      $('.card').mouseout(function(){
          $('.project').hide();
      });

    });


//form function
function contact(form){
    var name = document.forms["contacts"]["name"].value;
    var email = document.forms["contacts"]["email"].value;
    var message = document.forms["contacts"]["message"].value;
    alert("Hello! " + name + "," + " We have received your message. Thank you for reaching out to us. ");
    }