//jquery functions for what we do
//first column
$(document).ready(function(){
    $("#design-img").click(function(){
        $(".design-p").hide(500).toggle();
        $("#design-img").slideUp();    
            });
    $(".design-p").click(function(){
        $("#design-img").slideDown();
        $(".design-p").hide();
    });
    
    //second column
    $("#dev-img").click(function(){
        $(".dev-p").hide(500).toggle();
        $("#dev-img").slideUp();    
            });
        $(".dev-p").click(function(){
            $("#dev-img").slideDown();
            $(".dev-p").hide();
        });
    
    //third column
    $("#product-img").click(function(){
        $(".product-p").hide(500).toggle();
        $("#product-img").slideUp();    
            });
        $(".product-p").click(function(){
            $("#product-img").slideDown();
            $(".product-p").hide();
        });
    
    



});
