/**
 * Created by Administrator on 2016/6/18.
 */

var mySwiper1 = new Swiper('#swiper-container1', {
    autoplay: 3000,
    pagination : '#swiper-page1',
    paginationElement : 'li',
    loop:true,
});

//tab导航定位显示区
var mySwiper2 = new Swiper('#swiper-container2', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 4.5,
})
//var mySwiper3 = new Swiper('#swiper-container3', {
//    onSlideChangeStart: function(a, b, c) {
//    }
//})
//tab导航吸附与懒加载
$(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() >= $(".index_top").outerHeight()) {
            $("#nav").css({
                "position": "fixed",
                "top": "0"
            });
        } else {
            $("#nav").css({
                "position": "relative",
                "top": "0",
                "z-index": "2"
            });
        }
    });
});