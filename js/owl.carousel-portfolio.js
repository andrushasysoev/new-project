$(document).ready(function(){

  $('.owl-carousel').owlCarousel({

    loop:true,
    margin:32,
	navText: ["<span class='portfolio__arrow portfolio__arrow_left'></span>",
              "<span class='portfolio__arrow portfolio__arrow_right'></span>"],
    responsive:{
        0:{
            items:1,
            dots:true,
            nav:false,
        },
        600:{
            items:2,
            dots:true,
            nav:false,
        },
        1025:{
            items:3,
            dots:false,
            nav:true,
        }
    }
});
});