
$( document ).ready(function () {

    $('#myCarousel').bind('slide.bs.carousel', function (e) {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        console.log('slide event!');
    });

});
