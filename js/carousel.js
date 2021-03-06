import $ from 'jquery';
import 'owl-carousel';
import loadingScreen from 'loadingScreen';

const carousel = {
    init: () => {
        const $owl = $('.owl-carousel');
        console.log('3');
        $owl.on({
            'initialized.owl.carousel': function () {
                loadingScreen.swapHide();
            }
        }).owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });
        $owl.trigger('refresh.owl.carousel');
    }
};


export default carousel;

