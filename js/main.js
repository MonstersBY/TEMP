$(document).ready(function() {
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
    
    if($('.product-page').length) {
        $('.product-page-left__btn').on('click', function(evt) {
            if(!$(this).hasClass('active')) {
                $(this).siblings()[0].classList.remove("active")
                $(this).toggleClass('active')
                $(this).closest('.product-page-left').children('.product-page-left__img').each(function(){
                    $(this).toggleClass('active')
                })
            }
        });
        $('.product-page-left__img.document, .modal-box__zoom').on('click', function(evt) {
            evt.preventDefault();
            $('html').toggleClass('modal');
          
            const $modal_box = $('.modal-box')
            const $container = $modal_box.children('.modal-box__zoom')
            $modal_box.toggleClass('active');
            $container.toggleClass('active');
        });
        $('.product-page-right__help-btn').on('click', function(evt) {
            evt.preventDefault();
            $('html').toggleClass('modal');
          
            const $modal_box = $('.modal-box')
            const $container = $modal_box.children('.application-order')
            $modal_box.toggleClass('active');
            $container.toggleClass('active');
        });
        $('.modal-box__exit').on('click', function(evt) {
            evt.preventDefault();
            $('html').toggleClass('modal');
          
            const $container = $(this).parent('.modal-box-container')
            const $modal_box = $container.parent('.modal-box')
            $modal_box.toggleClass('active');
            $container.toggleClass('active');
        });
        $('.modal-box__form-btn').on('click', function(evt) {
            evt.preventDefault();
            console.log($(this).parents());
            const $container = $(this).parents('.modal-box-container')
            const $modal_box = $container.siblings('.application-order-sent')
            $modal_box.toggleClass('active');
            $container.toggleClass('active');
        });
    }

    
    function init(){
        // Создание карты.
        var map = new ymaps.Map("map", {
            center: [55.797286, 37.655436],
            zoom: 15,
        },{
            yandexMapDisablePoiInteractivity: true
        });

        let placemark = new ymaps.Placemark([55.797286, 37.655436], {}, {
            iconLayout: 'default#image',
            iconImageHref: '../img/icon/location-black.svg',
            iconImageSize: [32, 32],
            iconImageOffset: [-16,-32],
        })

        map.controls.remove('geolocationControl');
        map.controls.remove('searchControl');
        map.controls.remove('trafficControl');
        map.controls.remove('typeSelector');
        map.controls.remove('fullscreenControl');
        map.controls.remove('zoomControl');
        map.controls.remove('rulerControl');
        map.controls.remove('scrollZoom');
        map.controls.remove('drag');
        map.behaviors.disable('drag')
        map.behaviors.disable(['scrollZoom']);
        map.behaviors.disable('multiTouch')

        map.geoObjects.add(placemark)
    }
    if($('.contacts').length) ymaps.ready(init);
});
