'use strict'
$('.slick01').slick({
  responsive: [{
    breakpoint: 750,
    settings: {
      slidesToShow: 1,
    }
  }]
});
$('.joshua-slick').slick({
    responsive: [{
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
        }
      }]
});





// アコーディオンメニュー
$(function acd(){

// 変数宣言
  const triger = $('.js-acd-box');

  // 一つ目のアコーディオンメニューの矢印の為にHTMLに設定したクラス　initialを変数に格納
  const open = $('.initial');

  // オブジェクト以外の変数宣言。
  // 矢印の状態変化を表した名前を設定
  const arrow = 'is-open';

  open.addClass(arrow);
  // イベント
  triger.on('click', function(){
    // アコーディオン
    $(this).next().slideToggle();
    triger.not(this).next().slideUp();

    $(this).toggleClass(arrow);
    triger.not(this).removeClass(arrow);
  })
})


window.onload = function slider(){
  const swiper1 = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1, 
    spaceBetween: 0, 
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });
  const swiper2 = new Swiper('.jhon-swiper',{
    loop:true,
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
  });
  const swiper = new Swiper('.joshua-swiper',{
    loop:true,
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
  });
  
}
