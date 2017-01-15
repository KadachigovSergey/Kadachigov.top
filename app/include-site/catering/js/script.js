;(function ($){
    $(window).on('load', function(){
        //init modal
        $('._order_modal_open').on('click', function (){
            $('#order').bPopup({
                closeClass: 'close'
            });
        });

        // formstyler
        $('select').styler();

        // slide
        $('.omg').slick({
            prevArrow: '.box_for_slider .prev',
            nextArrow: '.box_for_slider .next',
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true
        });
        //slick nav
        $('.header_menu').slicknav({
            prependTo: '.header .container',
            label: ''
        });
    })
})(jQuery);
