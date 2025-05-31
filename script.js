$(document).ready(function() {
  // メニュー開閉（≡ ボタン）
  $('.menu-toggle').click(function() {
    $('#mainMenu').toggleClass('show');
    $('.dropdown').removeClass('open'); // サブメニューは一旦全部閉じる
  });

  // サブメニュー開閉（モバイル時のみ）
  $('.dropdown > a').click(function(e) {
    if ($(window).width() <= 768) {
      e.preventDefault(); // 親リンク動作を防ぐ
      const $parent = $(this).parent();

      // 他のサブメニューは閉じる
      $('.dropdown').not($parent).removeClass('open');
      $parent.toggleClass('open');
    }
  });
});
