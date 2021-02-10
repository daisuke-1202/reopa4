//動くための機能
var posX = 300;
var posY = 300;
$(function(){
    setInterval(function(){
        var random = Math.floor(Math.random()*4);
        if(random == 0){
            posY = posY + 20;
            $("#reopa").animate({left:posY});
            $("img").attr("src","reoparight.png");
        }
        if(random == 1){
            posY = posY - 20;
            $("#reopa").animate({left:posY});
            $("img").attr("src","reopaleft.png");
        }
        if(random == 2){
            posX = posX + 20;
            $("#reopa").animate({top:posX});
            $("img").attr("src","reopabottom.png");
        }
        if(random == 3){
            posX = posX - 20;
            $("#reopa").animate({top:posX});
            $("img").attr("src","reopatop.png");
        }
        if(posX<50){
            posX = 200;
        }
        if(posX>550){
            posX = 400;
        }
        if(posY<50){
            posY = 200;
        }
        if(posY>550){
            posY = 400;
        }
    },500);
});


//お腹が減る機能
var wid = 400;
var $p = $("p");
function hp(){
    wid = wid - 40;
    $(".hpbar").css("width",wid);
    // お腹ゲージがなくなったときの機能
    if(wid < 0){
        $p.effect("explode");
        $p.children().remove();
    }
}
setInterval(hp,5000);




//餌をあげる機能
$("#reopa").click(function(){
    wid = 400;
    $(".hpbar").css("width",wid);
});

//画面外へ出ない機能

