/*==================================
トップへ戻るボタン
==================================*/
document.addEventListener('DOMContentLoaded', function() {
  var pagetop = document.getElementById('page_top');
  // ボタン非表示
  pagetop.style.display = 'none';

  // スクロールイベントを監視
  window.addEventListener('scroll', function() {
      if (window.pageYOffset > 80) {
          // ボタンが現れる（フェードイン風）
          pagetop.style.display = 'block';
          pagetop.style.opacity = 1;
          pagetop.style.transition = 'opacity 0.5s';
      } else {
          // ボタンが消える（フェードアウト風）
          pagetop.style.opacity = 0;
          pagetop.style.transition = 'opacity 0.5s';
          setTimeout(function() {
              pagetop.style.display = 'none';
          }, 500);  // フェードアウトが終わるまで非表示にしない
      }
  });

  // ボタンをクリックしたらトップにスクロール
  pagetop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});

/*==================================
swiper
==================================*/
const swiperSlides = document.getElementsByClassName("swiper-slide");
const breakPoint = 767; // ブレークポイントを設定
let swiper;
let swiperBool;

window.addEventListener(
  "load",
  () => {
    if (breakPoint < window.innerWidth) {
      swiperBool = false;
    } else {
      createSwiper();
      swiperBool = true;
    }
  },
  false
);

window.addEventListener(
  "resize",
  () => {
    if (breakPoint < window.innerWidth && swiperBool) {
      swiper.destroy(false, true);
      swiperBool = false;
    } else if (breakPoint >= window.innerWidth && !swiperBool) {
      createSwiper();
      swiperBool = true;
    }
  },
  false
);

const createSwiper = () => {
  swiper = new Swiper(".swiper", {
    loop: true, // ループさせる
    speed: 300, // 少しゆっくり(デフォルトは300)

    // ページネーション
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // クリック可能にする
    },
    // 前後の矢印
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: window.innerWidth < 768 ? "cube" : "slide", // ここを修正
  });
};
