/**
 * Created by Administrator on 2015/1/14 0014.
 */
/* 商品详情页面 */
(function() {
    /* 配置首页幻灯片 */
    var mySwiper = new Swiper('.slide-banner', {
        //添加需要的选项:
        mode: 'horizontal',
        speed: 500,//延迟
        pagination: '.pagination',
        autoplay: 3500,
        cssWidthAndHeight: true,
        calculateHeight: true,
        autoplayDisableOnInteraction: false,
        loop: true,
        loopedSlides: true,
        watchActiveIndex: true,
        grabCursor: true,
        paginationClickable: true
    });

    /* 配置首页幻灯片 */
    var mySwiper = new Swiper('.productSlide', {
        //添加需要的选项:
        mode: 'horizontal',
        speed: 500,//延迟
        pagination: '.pagination2',
        autoplay: 3500
    });

})()


