$(document).ready(function(){
    $("footer a").mouseover(function(){
        $(this).css("border-bottom", "solid 2px white");
    });
    $("footer a").mouseleave(function(){
        $(this).css("border-bottom", "solid 2px transparent");
    });
    $("header li a").mouseover(function(){
        $(this).css("border-bottom", "solid 2px white");
        $(this).css("opacity", 1);
    });
    $("header li a").mouseleave(function(){
        $(this).css("border-bottom", "solid 2px transparent");
        $(this).css("opacity", .9);
    });
    $("#footer-icons div").mouseover(function(){
        $(this).css("border-bottom", "solid 2px white");
    });
    $("#footer-icons div").mouseleave(function(){
        $(this).css("border-bottom", "solid 2px transparent");
    });
    $("header #ham").click(function(){
        $("header ul").toggle();
    });
    
    if(stripUnit($('body').css('width')) <= 1300){
        $('header ul').hide();
        $('header ul').click(function(){
            $('header ul').hide();
        })
    }
    if(stripUnit($('body').css('width')) >= 1300){
        $('header ul').show();
    }




    function stripUnit(num){
        num = num.split('');
        num.pop();
        num.pop();
        return Number(num.join(''));
    }
    if(stripUnit($('body').css('width')) >= 1300){
        $('header ul').show();
    }
});