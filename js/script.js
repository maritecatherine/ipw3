$(document).ready(function(e){
    e.preventDefault();
    $("#design, #des-icon").click(function(){
        $("#des-icon, #design").toggle();
    });

    $("#development, #dev-icon").click(function(){
        $("#dev-icon, #development").toggle();
    });
    $("#product, #prod-icon").click(function(){
        $("#prod-icon, #product").toggle();
    });
    
    /*
    $("#work1").hover(function(){
        $(this).stop().animate({opacity: .4},200);
        $(".text").removeClass("overlay");
    },function(){
        $(this).stop().animate({
            opacity: 1},500);
            $(".text").addClass("overlay");
    });
    });*/
    $("#portfolio,img").mouseover(function(){
        $("overlay").show();
      }).mouseout(function(){
        $("overlay").hide();
      });

    


});