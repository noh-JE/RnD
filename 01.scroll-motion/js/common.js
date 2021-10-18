var CODING = window.CODING || {};

CODING = (function($) {
    'use strict';

    // init controller -> ScrollMagic
    const controller = new ScrollMagic.Controller();

    // tween-max
    // let tweenAnimation = new TimelineMax();
    tweenAnimation
        .to($('.card1'), 0.03, {rotation: 7})
        .to($('.card2'), 0.03, {rotation: 14})
        .to($('.card3'), 0.03, {rotation: 21});

    let common = {
        scrollMotion: function() {
            // scrollMagic
            let tween = new ScrollMagic.Scene({
                triggerElement: '#section2',
            })
                .setClassToggle('.section2', 'is-scroll')
                .setTween(tweenAnimation)
                .addTo(controller)
                .on('leave', function() {
                    tweenAnimation.pause();
                    $('#Explore').css({width: '150px', height: '150px'});
                    $('#Explore span').css({color: '#000'});
                });
        },
        openExplore: function() {
            let $target = $('.section2');
            let $exploreBtn = $('#Explore');
            let $btnText = $exploreBtn.find('span');
            let btnText = '';

            $exploreBtn.on('click', function() {
                $target.toggleClass('is-active');

                if (!$target.hasClass('is-active')) {
                    btnText = 'Explore\n our culture';
                    tweenAnimation.restart();
                } else {
                    btnText = 'Close';
                    tweenAnimation.reverse();
                }
                $btnText.text(btnText);
            });

            if(!$target.hasClass('is-scroll')) {
                $target.removeClass('is-active');
            }
        },
        init: function() {
            common.scrollMotion();
            common.openExplore();
        }
    }

    $(document).ready(function() {
        // common.init();
    });
})(jQuery);

