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
    $("#portfolio").children().children().hover(function () {
        $("p", this).toggle();
        $("img", this).toggleClass("on-hover");
    
    });
    
    


});