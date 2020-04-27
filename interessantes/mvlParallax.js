 // Parallax slider top
    function mvl_parallax_top(el,speed){

        var offset = $(window).height();
        var itemTop = el.offset().top-offset;

        $(window).scroll(function(e){
            var w = $(document).scrollTop()+1;
            var vel = w*speed;

            if($(document).scrollTop()>itemTop){
                el.css({
                    transform: "translate3d(0, "+vel+"%, 0px)",
                });
            }
        });
    }

    function mvl_parallax(el,speed){
        // console.log(el.css('transform'));
        if(el.css('matrix')==undefined) {
            el.css({
                transition: ".01s",
                '-webkit-transform': "translateY( 0,1px )",
                '-moz-transform': "translateY( 0,1px )",
                'transform': "translateY( 0,1px )",
                'will-change': 'transform'
            });
        }
            
        var windowHeight = $(window).height();
        var elScroll = el.offset().top;
        var windowCenter = windowHeight/2;

        // Verifica posição da tela
        var elTop = elScroll-windowHeight;
        var elBottom = elScroll+windowHeight;

        // console.log(el,windowHeight,elTop,elBottom);

        $(window).scroll(function(e){
          // Get Scroll
          var currentScroll = $(this).scrollTop();
          var wheel = ( ( (currentScroll-elScroll )-( el.height()/2 )+windowCenter )/speed );
                     
            if($(document).scrollTop()>elTop && $(document).scrollTop()<elBottom){

                // console.log(el,wheel);

                el.css({
                    '-webkit-transform': "translateY( "+wheel*-1+"%)",
                    '-moz-transform': "translateY( "+wheel*-1+"%)",
                    'transform': "translateY( "+wheel*-1+"%)",
                });
            }
        });
    }
    mvl_parallax_top($('.slider-content-image'),0.05);
    mvl_parallax($('.sobre_imagem'),20);
    mvl_parallax($('.service_resumo'),20);
