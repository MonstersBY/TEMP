$('.header__burger').on('click', function(evt) {
    $('html').toggleClass('modal');
	let $this = $(this);
    $('.header').toggleClass('active');
	$('.header-container').slideToggle();
});


if($('.catalog-right-box').length){
    if($('.catalog-right__item').length % 2){
        $('.catalog-right__item')[$('.catalog-right__item').length-1].style.border = 'unset'
    } else {
        $('.catalog-right__item')[$('.catalog-right__item').length-1].style.border = 'unset'
        $('.catalog-right__item')[$('.catalog-right__item').length-2].style.border = 'unset'
    }
}
