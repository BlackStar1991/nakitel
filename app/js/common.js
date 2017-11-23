window.onload = function() {

    var blackWrapper = $(".blackWrapper"),
        body = $("body");


//    Discount Products  - Скидки

       $(".product_slider__full").owlCarousel({
           items: 5,
           loop: true,
           nav: false,
           navText: true,
           dots: true,
           autoplay: false,
           stopOnHover: true,
           // margin: 20,
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
                   items: 2,
                   margin: 5
               },
               450: {
                   margin: 0,
                   items: 1,
                   center: true
               },

               320: {
                   items: 1,
                   center: true
               }

           }
       });


};


