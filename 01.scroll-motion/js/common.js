var CODING = window.CODING || {};

CODING = (function($) {
    'use strict';

    // init controller -> ScrollMagic
    const controller = new ScrollMagic.Controller();

    let cardSwiper;
    let action;

    // tween-max
    // let tweenAnimation = new TimelineMax();
    // tweenAnimation
    //     .to($('.card1'), 0.03, {rotation: 7})
    //     .to($('.card2'), 0.03, {rotation: 14})
    //     .to($('.card3'), 0.03, {rotation: 21});

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
                // $target.toggleClass('card-open');
                // action.reverse();
                if (!$target.hasClass('card-open')) {
                    btnText = 'Explore\n our culture';
                    cardSwiper.destroy(true, true);
                    // tweenAnimation.restart();
                } else {
                    btnText = 'Close';

                    // tweenAnimation.reverse();
                }
                $btnText.text(btnText);
            });

            if(!$target.hasClass('is-scroll')) {
                $target.removeClass('is-active');
            }
        },
        init: function() {
            // common.scrollMotion();
            common.openExplore();
        }
    }

    $(document).ready(function() {
        common.init();

        // gsap.to(".swiper-slide", {duration: 1, x:400, stagger: {
        //         // grid: 'auto',
        //         from: 'end',
        //         axis: 'x',
        //         amount: 0.5
        //     }});
        //
        gsap.to(".swiper-slide", {
            duration: 0.5,
            x: function(index, target, list) {
                return index * 402;
            },
            stagger: function(index, target, list) {
                return index * 0.4;
            },
            // onComplete: ['성공']
        });

        cardSwiper = new Swiper('.card-swiper', {
            slidesPerView: 'auto',
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination'
            }
        });

    });
})(jQuery);

/*gasp option
* stagger: stagger는 다중 대상 트윈에 stagger를 추가하면 기본적으로 각 대상의 애니메이션 시작 시간이
* offset된다.
*
*
* */