let NEW = window.NEW || {};

NEW = (function($) {
    'use strict';
    // card offset.left 구하기
    const slideArr = [1, 2, 3, 4, 5];
    const cardArr = slideArr.map(card => (card * 380) + (card * 30));
    // scrollCard의 card에 left값 넣기
    let cardCount = $('.scrollCard .card').length;

    for(let i=0; i<=cardCount; i++) {
        let card = $('.scrollCard').find(`.card${i}`);
        // card.css({'left': cardArr[i]});
    }

    console.log(`cardArr, ${cardArr}`);

    // 카드 left
    let leftPosition = new TimelineMax();

    // scrollMagic 호출
    let controller = new ScrollMagic.Controller();

    // Swiper
    let cardSwiper;

    // TimelineMax 호출
    // 카드 로테이션
    let tweenAnimation = new TimelineMax();
    tweenAnimation
        .to($('.card1 img'), 0.2, {rotation: 7, ease: Power1.easeIn})
        .to($('.card2 img'), 0.2, {rotation: 14, ease: Power1.easeIn})
        .to($('.card3 img'), 0.2, {rotation: 21, ease: Power1.easeIn})
        .fromTo($('#Explore'), {scale: 0.25, opacity: 0}, {scale: 1, opacity: 1, duration: 0.3});


    let common = {
        // scroll 시 모션 이벤트
        scrollMotion: function() {
            let tween = new ScrollMagic.Scene({
                triggerElement: '#section2',
            })
                .setClassToggle('.section2', 'is-scroll')
                // .setTween(tweenAnimation)
                .addTo(controller)
                .on('leave', function() {
                    // load 될 때, 한 번만 실행
                    tweenAnimation.pause();
                });
        },

        // #Explore 버튼 클릭 시, 카드 모션 이벤트
        clickCardMotion: function() {
            $('#Explore').on('click', function() {
                $('.cardWrap').toggleClass('is-open');

                if($('.cardWrap').hasClass('is-open')) {
                    leftPosition
                        .to($(`.card3`), 0.2, {x: 1640, ease: Power1.easeIn})
                        .to($(`.card2`), 0.2, {x: 1230, ease: Power1.easeIn})
                        .to($(`.card1`), 0.2, {x: 820, ease: Power1.easeIn})
                        .to($(`.card0`), 0.2, {x: 410, ease: Power1.easeIn})
                        .to($(`.first`), 0.2, {x: 0, ease: Power1.easeIn});
                } else {
                    // leftPosition.reverse();
                }


                // common.swiperSlideCard();
                // setTimeout(function() {
                //     $('.scrollCard').css({'display': 'none'});
                // }, 300);
            });
        },

        // 스와이퍼 카드 마크업으로 전환
        swiperSlideCard: function() {



            if($('.cardWrap').hasClass('is-open')) {
                cardSwiper = new Swiper('.swiperCard', {
                    slidesPerView: 'auto',
                    spaceBetween: 30,
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                });

            } else {
                tweenAnimation.restart();
                cardSwiper.destroy();
                $('.card').css({'left': 0});
            }
        },

        init: function() {
            common.scrollMotion();
            common.clickCardMotion();
        }
    }

    $(document).ready(function() {
        common.init();
    });

})(jQuery);