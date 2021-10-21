let FCXV = window.FCXV || {};

FCXV = (function($) {
    'use strict';
    let scroll = {
        // wheel event
        wheelEvent: function() {
            let deltaY = 20;
            let imageNumber;
            let lastNumber = 191;



            $(window).on('wheel', function() {
                if(deltaY > lastNumber) {
                    deltaY = lastNumber;
                } else {
                    deltaY++;

                    if(deltaY < 100) {
                        imageNumber = `0${deltaY}`;
                    } else if(deltaY >= 100) {
                        imageNumber = deltaY;
                    }

                    let $Container = $('#container');
                    let Bg = $Container.attr('data-image', `../images/home/BG_Home_00${imageNumber}.webp`);
                    let BgUrl = Bg.attr('data-image');

                    console.log('Bg', BgUrl);

                    $Container.css({backgroundImage: url(Bg)});
                }
            });

        },
        init: function() {
            scroll.wheelEvent();
        }
    }

    $(document).ready(function() {
        scroll.init();
    });
})(jQuery);

