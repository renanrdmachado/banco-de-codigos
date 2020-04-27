$('.data-effects').css({
"opacity" : 0,
"transition" : "transition: .6s ease-out"
});

$('.data-effects.show').css({
"opacity" : 0,
});

$('.data-effects.shortZoom').css({
"transform": "scale(1.05)",
"transition": ".4s"
});

$('.data-effects.longZoom').css({
"transform": "scale(.95)",
"transition": "10s"
});

$('.data-effects.bottom').css({
"transform": "translate3d(0, 100px, 0) scale(1)"
});

$('.data-effects.left').css({
"transform": "translate3d(-200px, 0, 0) scale(1)"
});

$('.data-effects.right').css({
"transform": "translate3d(200px, 0, 0) scale(1)"
});

$('.data-effects.animate').css({
"opacity": 1,
"transform": "translate3d(0, 0, 0) scale(1)"
});

$('.data-effects.animate.delay1').css({
"transition-delay": ".2s"
});

$('.data-effects.animate.delay2').css({
"transition-delay": ".4s"
});

$('.data-effects.animate.delay3').css({
"transition-delay": ".6s"
});

$('.data-effects.animate.delay4').css({
"transition-delay": ".8s"
});

  // TIMELINE
var $target = $('.data-effects');
var $animateClass = 'animate';
var $offset = $(window).height() * 0.80;

function animeScroll() {
    var $docTop = $(document).scrollTop();
    // console.log($docTop);

    $target.each(function(){
        var $itemTop = $(this).offset().top - $offset;
        if($docTop > $itemTop){
            $(this).addClass($animateClass);
        }
        else{
            $(this).removeClass($animateClass);
        }
    })  

}

if($target){
    animeScroll();
    $(window).scroll(function(){
        animeScroll();
    })      
}
