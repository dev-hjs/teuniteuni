$(function(){

    const swiper = new Swiper('.visual', {
        loop: true,
    });
    
    swiper.on('slideChange', function () {
        var idx = swiper.realIndex;

        if( idx == '0'){
            color('#F17785');
        }else if( idx == '1'){
            color('#ABCD05');
        }

    });

    function color(color){
        $('.gnb li').each(function(){
            if( $(this).hasClass('active')){
                $(this).children('a').css('color',color);
            }
        });
    };

    const swiper2 = new Swiper('.thanks', {
        spaceBetween : 30,
        slidesPerView: 1.2,
    });

    const swiper3 = new Swiper('.review_slide', {
        spaceBetween : 30,
        slidesPerView: 1.7,
        breakpoints: {
            370: {
                slidesPerView: 2,
            },
            // when window width is >= 320px
            500: {
                slidesPerView: 2.7,
            },
            650: {
                slidesPerView: 4,
            }
        },
        pagination: {
            el: '.review_slide .paging'
        
        }
    });

    const swiper4 = new Swiper('.slide2', {
        spaceBetween : 30,
        slidesPerView: 2,
    });

    // 팜업1
    $('.btn_pro_view').on('click', function(){
        $('.popup.type1').stop().animate({
            top:0
        }, 500);
        $('.dimmed').fadeIn(300);
        $('body').css('overflow','hidden');
    });
    $('.popup.type1 .btn_close').on('click', function(){
        $(this).parents('.popup.type1').stop().animate({
            top:-100 + '%'
        }, 500);
        $('.dimmed').fadeOut(300);
        $('body').css('overflow','visible');
    });
    
    /*$('.btn_close_pop').on('click', function(){
        console.log('tlqkf');
        $(this).parents('.popup.type2 .popup_wrap').animate({
            bottom:-100 + '%'
        },300, function(){
            $('.popup.type2').fadeOut(200);
        });
    });*/

    // 팝업2
    $('.popup.type2 .btn_close2').on('click', function(){
        console.log('tlqkf');
        $(this).parents('.popup.type2 .popup_wrap').animate({
            bottom:-100 + '%'
        },300, function(){
            $('.popup.type2').fadeOut(200);
        });
    });
    
    // 팝업3
    $('.btn_close_pop2').on('click', function(){
        $(this).parents('.popup').fadeOut(200);
        $('body').css('overflow','visible');
    });
    
    $('.open_popup').on('click', function(e){
        console.log('tlqkftlqkf');
        $('.popup.type3').fadeIn(200);
        $('body').css('overflow','hidden');
        e.preventDefault();
    });
    
    function bodyvisible(){
        $('body').css('overflow','visible');
    }

   
});

