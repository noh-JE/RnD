let NEW = window.NEW || {};

NEW = (function($) {
    'use strict';

    // scrollMagic 호출
    let controller = new ScrollMagic.Controller();

    // Swiper
    let cardSwiper;

    // TimelineMax 호출
    // let tweenAnimation = new TimelineMax();
    // tweenAnimation
    //     .to($('.card1 img'), 0.2, {rotation: 7, ease: Power1.easeIn})
    //     .to($('.card2 img'), 0.2, {rotation: 14, ease: Power1.easeIn})
    //     .to($('.card3 img'), 0.2, {rotation: 21, ease: Power1.easeIn})
    //     .fromTo($('#Explore'), {scale: 0.25, opacity: 0}, {scale: 1, opacity: 1, duration: 0.3});

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

        },

        // 스와이퍼 카드 마크업으로 전환
        swiperSlideCard: function() {
            cardSwiper = new Swiper('.swiperCard', {
                slidesPerView: 'auto',
                spaceBetween: 30,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });

            // card offset.left 구하기
            let slideArr = new Array();
            $('.swiperCard .swiper-slide').each(function(index, slide) {
                let offsetLeft = $(this).offset().left;
                slideArr[index] = offsetLeft;
            });

            // scrollCard의 card에 left값 넣기
            let cardCount = $('.scrollCard .card').length;

            console.log(slideArr, cardCount);
             for(let i=1; i<=cardCount; i++) {
                 let card = $('.scrollCard').find(`.card${i}`);
                 card.css({'left': slideArr[i] + 30});
             }
        },

        init: function() {
            common.scrollMotion();
            common.clickCardMotion();
            common.swiperSlideCard();
        }
    }

    $(document).ready(function() {
        common.init();
    });

})(jQuery);