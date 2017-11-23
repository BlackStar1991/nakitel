window.onload = function() {

    var blackWrapper = $(".blackWrapper"),
        body = $("body");

    var buttonNavigation = $(".button_navigation"),
        arreaNavigation = $(".bl_navigation");

    buttonNavigation.on("click", function () {
        arreaNavigation.toggleClass("hidden");
    });



//    Discount Products  - Скидки

       $(".product_slider__full").owlCarousel({
           items: 5,
           loop: true,
           nav: false,
           navText: true,
           dots: true,
           center:true,
           // dotsEach:true,
           autoplay: false,
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
                   items: 3

               },
               550: {
                   items: 2

               },
               450: {
                   items: 1

               },

               320: {
                   items: 1

               }

           }
       });


};


