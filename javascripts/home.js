
jQuery('.banner-owl').owlCarousel({
    margin:0,
    responsiveClass:true,
    dots: true,
    nav:false,
    autoHeight:false,
    loop:true,
    autoplay: true,
    autoplayTimeout: 10000,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive:{
        0:{
            items:1,
            nav: false,
            dots: true
        },
        768:{
            items:1
        },
        992:{
            items:1
        },
        1200:{
            items:1
        }
    }
})

jQuery('.owl-logo').owlCarousel({
    margin:0,
    responsiveClass:true,
    dots: false,
    nav: true,
    autoHeight:false,
    loop:true,
    autoplay: true,
    autoplayTimeout: 10000,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive:{
        0:{
            items:1,
            nav: false,
            dots: true
        },
        373:{
            items:3,
            nav: false,
            dots: true
        },
        576:{
            items:4
        },
        768:{
            items:5
        },
        992:{
            items:6
        },
        1200:{
            items:6
        }
    }
})
