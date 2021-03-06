$(document).ready(function () {
    $('.sliderSec').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false,
        pagination: false,
        touchDrag: true,
        responsiveClass: true,
        navigationText: false,
        navigation: false,
        autoPlay: true,
        mouseDrag: false,
        responsive: true,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
    /*FixHeader Start By Shagor */
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 200)
        {
            $(".headFIx").addClass('fixedHeader');
        } else
        {
            $(".headFIx").removeClass('fixedHeader');
        }
    });

    /*FixHeader End By Shagor */
    
    /*MobileMenu Start By Shagor */
    
    $(".MobileMenu").on('click', function() {
        $(".Hmenu > ul").slideToggle('slow');
    });
    $(".SubSer").on('click', function() {
        $(".Hmenu ul li .Submenu").slideToggle('slow');
    });
    
    /*MobileMenu End By Shagor */

    /*back to top by shagor*/
    $("body, html").on("click", ".BackTo", function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800);
    });

});
