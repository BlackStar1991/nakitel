window.onload = function () {

    var blackWrapper = $(".blackWrapper"),
        body = $("body");

    var buttonNavigation = $(".button_navigation"),
        arreaNavigation = $(".bl_navigation");

    buttonNavigation.on("click", function () {
        arreaNavigation.toggleClass("hidden");
    });

/// Mobile search

    $(".js-search").on("click", function () {
        $(".bl_search").toggleClass("bl_search__active");

    });
///// CEO text
    $(".bl_ceo__showMore").on("click", function () {
        $(".bl_ceo__wrapper").css({"overflow": "visible", "height": "auto"});
        $(this).remove();

    });

//    Discount Products  - Скидки

    $(".product_slider__full").owlCarousel({
        items: 5,
        loop: true,
        nav: false,
        navText: true,
        dots: true,
        margin: 120,
        dotsEach: false,
        autoplay: true,
        stopOnHover: true,
        smartSpeed: 1000,
        autoplayTimeout: 4000,
        pagination: false,
        responsiveClass: true,
        responsive: {
            1200: {
                items: 5

            },
            991: {
                margin: 20,
                items: 3

            },
            550: {
                autoplayTimeout: 2000,
                dots: false,
                items: 2


            },
            450: {
                autoplayTimeout: 2000,
                dots: false,
                items: 1

            },

            320: {
                autoplayTimeout: 2000,
                dots: false,
                items: 1

            }

        }
    });


};


