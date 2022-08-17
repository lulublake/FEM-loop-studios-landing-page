$(document).ready(function(){
    $("footer a").mouseover(function(){
        $(this).css("border-bottom", "solid 2px white").fadeIn(200);
    });
    $("footer a").mouseleave(function(){
        $(this).css("border-bottom", "solid 2px transparent");
    });
});