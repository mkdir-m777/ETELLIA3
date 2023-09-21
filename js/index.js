$(function(){
    // ハンバーガメニュー
    $(".openbtn1").click(function () {
        $(this).toggleClass('active');
        $(".gnav-center").toggleClass("menu_active");
    });
});

// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){
    // その場から要素を出現させる
    $('.fadeInTrigger').each(function(){ //fadeUpTriggerというクラス名が
      let elemPos = $(this).offset().top-0;//要素より、50px上の
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeIn');// 画面内に入ったらfadeUpというクラス名を追記
      }else{
      $(this).removeClass('fadeIn');// 画面外に出たらfadeUpというクラス名を外す
      }
      });
  
  // 左から要素を出現させる
    $('.fadeZoomTrigger').each(function(){ //fadeUpTriggerというクラス名が
      let elemPos = $(this).offset().top-0;//要素より、50px上の
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('zoomIn');// 画面内に入ったらfadeUpというクラス名を追記
      }else{
      $(this).removeClass('zoomIn');// 画面外に出たらfadeUpというクラス名を外す
      }
      });
  

  // 左から要素を出現させる
  $('.fadeLeftTrigger').each(function(){ //fadeUpTriggerというクラス名が
    let elemPos = $(this).offset().top-0;//要素より、50px上の
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeLeft');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('fadeLeft');// 画面外に出たらfadeUpというクラス名を外す
    }
    });
  

  // 右から要素を出現させる
    $('.fadeRightTrigger').each(function(){ 
      let elemPos = $(this).offset().top-0;//要素より、50px上
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeRight');
      }else{
      $(this).removeClass('fadeRight');
      }
      });  
  
    // 下から要素を出現させる
    $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
      let elemPos = $(this).offset().top-0;//要素より、50px上の
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
        $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
        }else{
        $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
        }
      });  
        
    }
  
  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });
  
  // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function(){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });
