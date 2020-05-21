$(function () {
    
    $('.call-box').click(function () {

        $('html').addClass('scroll-off');

            $('.popup-call').fadeIn(800);
            $('.popup-call__wrap').animate({
                height: '370px'
            }, 400);
        });

    $('.popup-call').click(function(event){
        if(event.target == this) {
            $(this).fadeOut(400);
            $('.popup-call__wrap').animate({
                    height: 0
                }, 400);

            $('html').removeClass('scroll-off');
        }
    });

    $('.popup-close').click(function () {
        $('.popup-call').fadeOut(400);  
        $('.popup-call__wrap').animate({
                height: 0
            }, 400);

        $('html').removeClass('scroll-off');
     });
});