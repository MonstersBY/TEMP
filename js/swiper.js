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
    spaceBetween: rem(0),
    slidesPerView: 2,
    slidesPerGroup: 2,
    grid: {
        rows:2,
    },
    navigation: {
        nextEl: ".bestsellers-button-next",
        prevEl: ".bestsellers-button-prev",
    },
    breakpoints: {
        769: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: rem(4.4),
            grid: {
                rows:1,
            },
        }
    }
});

bestsellersBorder()

$( window ).on( "resize", function(x) {
    bestsellersBorder()
});

function bestsellersBorder() {
    if($('.bestsellers-swiper').length){
        if ($( window ).width() < 769) {
            $('.bestsellers-slide').each(function (x){
                if (x%4 == 0 || x%4 == 1) {
                    $(this).css('border-right','1px solid rgba(18, 24, 32, 0.20)')
                }
            })
        } else {
            $('.bestsellers-slide').each(function (x){
                if (x%4 == 0 || x%4 == 1) {
                    $(this).css('border-right','unset')
                }
            })
        }
    }
}