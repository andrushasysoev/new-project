$(function () {

    $('.more-box').click(function () {

        $('html').addClass('scroll-off');

            $('.popup-more').fadeIn(800);
            $('.popup-more__wrap').animate({
                    height: '450px',
                }, 400);
        });
    
    $('.popup-more').click(function(event){
        if(event.target == this) {
            $(this).fadeOut(400);
            $('.popup-more__wrap').animate({
                    height: 0,
                }, 400);

            $('html').removeClass('scroll-off');
        }
    });

    $('.popup-close').click(function () {
        $('.popup-more').fadeOut(400);  
        $('.popup-more__wrap').animate({
                height: 0
            }, 400);

        $('html').removeClass('scroll-off');
        
     });
});



