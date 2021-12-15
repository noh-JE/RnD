
(function () {
  const $Sequence = $('#Sequence');
  const srcSET = $Sequence.find('source');
  const imgURL = $Sequence.find('img');
  const lastNum = 192;
  const BG_Home = new Image();

  for (let index = 0; index < 10; index++) {
    BG_Home.src = `images/home/BG_Home_0000${index}.webp`;
  }
  for (let index = 10; index < 100; index++) {
    BG_Home.src = `images/home/BG_Home_000${index}.webp`;
  }
  for (let index = 100; index < lastNum; index++) {
    BG_Home.src = `images/home/BG_Home_00${index}.webp`;
  }

  let lastScrollTop = 0;
  let scrolling = false;

  // 로드 되었을 때 33번 이미지까지 이미기 단계적으로 보이기
  let count = 0;
  const counting = setInterval(function () {
    if(count === 33) {
      clearInterval(counting);
      return false;
    }
    count += 1;
    if(0 <= count < 10) {
      srcSET.attr('srcset', `images/home/BG_Home_00${count}.webp`);
      imgURL.attr('src', `images/home/BG_Home_00${count}.webp`);
    }

    if(10 <= count < 100) {
      srcSET.attr('srcset', `images/home/BG_Home_000${count}.webp`);
      imgURL.attr('src', `images/home/BG_Home_000${count}.webp`);
    }

    console.log(count);
  }, 100);

  $(document).on("mousewheel DOMMouseScroll", function(e) {
    // 스크롤 모션 34번 부터 0으로 잡아서 나눠주기
    let init = 33;
    let st = $(this).scrollTop();
    if (!scrolling) {
      let webp = srcSET.attr('srcset').split('/');
      let webpNumber = webp[2].split('_')[2].split('.')[0];
      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        // scroll up
        lastScrollTop--;
        if(lastScrollTop < 0) lastScrollTop = 0;
        webpNumber = lastScrollTop;

        // 13번 이미지까지 감소
        if(webpNumber < 34) {
          lastScrollTop = 33;
          console.log('stop', webpNumber, init,  lastScrollTop);
          srcSET.attr('srcset', `images/home/BG_Home_000${init}.webp`);
          imgURL.attr('src', `images/home/BG_Home_000${init}.webp`);
        }
        if(33 < webpNumber < 100) {
          srcSET.attr('srcset', `images/home/BG_Home_000${webpNumber}.webp`);
          imgURL.attr('src', `images/home/BG_Home_000${webpNumber}.webp`);
        }

        if(99 < webpNumber) {
          srcSET.attr('srcset', `images/home/BG_Home_00${webpNumber}.webp`);
          imgURL.attr('src', `images/home/BG_Home_00${webpNumber}.webp`);
        }
      } else {
        // scroll down
        lastScrollTop++;
        if(lastScrollTop > 191) lastScrollTop = 191;
        // console.log('down', lastScrollTop);
        // 14번 이미지부터 증가
        webpNumber = lastScrollTop;
        if(33 < webpNumber < 100) {
          srcSET.attr('srcset', `images/home/BG_Home_000${webpNumber}.webp`);
          imgURL.attr('src', `images/home/BG_Home_000${webpNumber}.webp`);
        }

        if(99 < webpNumber) {
          srcSET.attr('srcset', `images/home/BG_Home_00${webpNumber}.webp`);
          imgURL.attr('src', `images/home/BG_Home_00${webpNumber}.webp`);
        }
      }
    }
  });

})()
