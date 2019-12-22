$(document).ready(function () {
    $('.button[filter]').click(function () {
        if ($(this).attr('filter') == 'all') {
            if ($(this).attr('val') == 'off') {
                $('.button[filter]').attr('val', 'off');
                $(this).attr('val', 'on');
                $('.button[filter]').removeClass('focused');
                $(this).addClass('focused');
                $('.filter > div').show(300);
            }
        } else
            if ($(this).attr('val') == 'off') {
                $('.button[filter]').attr('val', 'off');
                $(this).attr('val', 'on');
                $('.button[filter]').removeClass('focused');
                $(this).addClass('focused');
                $('.filter > div').hide(300);
                var filter = $(this).attr('filter');
                $('.filter > div[filter=' + filter + ']').show(3000);
            }
    });

    $('.multiple-items').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        dotsClass: 'dots-style',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});