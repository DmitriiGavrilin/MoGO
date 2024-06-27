$(function () {
    let header = $('#header');
    let introHeight = $('#intro').innerHeight();
    let scrollOffset = $(window).scrollTop();
    checkScroll(scrollOffset);

   //  Fixed Header
   $(window).on("scroll",  function () {
       scrollOffset = $(this).scrollTop();
       checkScroll(scrollOffset);
   });
   function checkScroll() {
       if (scrollOffset >= introHeight) {
           header.addClass("fixed");
       } else {
           header.removeClass("fixed");
       }
   }

    //  Smooth Scroll
    $('[data-scroll]').on('click', function (event) {
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        $('#nav').removeClass('active');
        $('#toggle').removeClass("active");
        $('html, body').animate({
           scrollTop: elementOffset
        }, 1500);
        event.preventDefault();
    });

    //  Toggler
    $('#toggle').on('click', function (e) {
        $('#nav').toggleClass("active");
        $('#toggle').toggleClass("active");
        e.preventDefault();
    });

    //  Accordion
    $('[data-collapse]').on('click', function (e) {
        let elementId = $(this).data('collapse');
        $(this).toggleClass("open");
        e.preventDefault();
    })

    //  Slider
    $('[data-slider]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,

    })
});