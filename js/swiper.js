// Пересчет rem в px для swiper
// spaceBetween: rem(5),
const rem = function (rem) {
    if ($(window).width() > 768) {
        return 0.005208335 * $(window).width() * rem;
    } else {
        // где 375 это ширина моб версии макета
        return (100/375) * (0.1 * $(window).width()) * rem;
    }
}

var baner_swiper = new Swiper(".baner-swiper", {
    navigation: {
        nextEl: ".baner-button-next",
        prevEl: ".baner-button-prev",
    },
});

if($('.baner-swiper__number').length){
    document.querySelector('.baner-swiper__number-all').innerHTML = `${$('.baner-swiper .swiper-slide').length}`
}
baner_swiper.on('slideChange', function (x) {
    document.querySelector('.baner-swiper__number-now').innerHTML = `${(x.activeIndex+1)}`
})

var bestsellers_swiper = new Swiper(".bestsellers-swiper", {
    spaceBetween: rem(4.4),
    slidesPerView: 4,
    slidesPerGroup: 4,
    navigation: {
        nextEl: ".bestsellers-button-next",
        prevEl: ".bestsellers-button-prev",
    },
});