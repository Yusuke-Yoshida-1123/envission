
$(function () {
    $(".slider").slick({
        // フェードで表示
        fade: true,
        // 自動再生
        autoplay: true,
        // スライド速度
        speed: 1500,
        // 画像切り替え間隔
        autoplaySpeed: 2000,
        
        // 矢印なしに
        arrows: false,
    })
    $(window).scroll(function () {
        // fadeinクラスに対して順に処理を行う
        $(".nav").each(function () {
            // スクロールした距離
            let scroll = $(window).scrollTop();
            // navクラスの要素までの距離
            let target = $(this).offset().top;
            // 画面の高さ
            let windowHeight = $(window).height();
            // navクラスの要素が画面下にきてから20px通過した
            // したタイミングで要素を表示
            if (target >20) {
                $(this).css("background-color","#FFFFFF");
                $(this).find("a").css("color","#294C7A");
                $(this).find("span").css("background-color","black");
            }
            if(target <19){
                $(this).css("background-color","transparent");
                $(this).find("a").css("color","#FFFFFF");
                $(this).find('span').css("background-color","#FFFFFF")
            }
        });
    });
    $('.toggle-btn').click(function(){
        $('header').toggleClass('open');
    });
});
