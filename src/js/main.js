$(function() {

    $('ul.benefits__list').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.benefits__content').removeClass('active').eq($(this).index()).addClass('active');
    });
});
var swiper = new Swiper(".team__swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".team-next",
        prevEl: ".team-prev",
    },
    autoplay: {
        delay: 2000
    },
    loop: true
});