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

