$(document).ready(function(){

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
    $("#portfolio").hover(function(){
        $(this).stop().animate({opacity: .4},200);
        $(".text").removeClass("overlay");
    },function(){
        $(this).stop().animate({
            opacity: 1},500);
            $(".text").addClass("overlay");
    
    });*/
    $("#portfolio").children().children().hover(function () {
        $(".text", this).toggle();
        $("img", this).toggleClass("on-hover");
    
    });
    
    


});