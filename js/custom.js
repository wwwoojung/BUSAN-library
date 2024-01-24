$(function () {
    feather.replace();

    $('#content').fullpage({

        onLeave: function (anchorLink, index) {
            console.log(index);
            if (index == 1) {
                $('#Header').removeClass('on');
                document.getElementById("H_logo").src = "../images/logo_wh.png";
            } else {
                $('#Header').addClass('on');
                document.getElementById("H_logo").src = "../images/logo_bk.png";
            }
        },
    });

    const MAIN_NOTICE_SLIDE = new Swiper('.main_notice_slide', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
    })

    $('.MainNotice .tab_menu>li>a').on('click', function (e) {
        e.preventDefault();
        const IDX = $(this).parent().index();
        console.log(IDX);
        $('.MainNotice .tab_menu>li').removeClass('on');
        $('.MainNotice .tab_menu>li').eq(IDX).addClass('on');

        $('.MainNotice .main_notice .main_notice_slide').removeClass('on');
        $('.MainNotice .main_notice .main_notice_slide').eq(IDX).addClass('on');
    })

    $('.MainCategory .tab_menu>li>a').on('click', function (e) {
        e.preventDefault();
        const IDX = $(this).parent().index();
        console.log(IDX);
        $('.MainCategory .tab_menu>li').removeClass('on');
        $('.MainCategory .tab_menu>li').eq(IDX).addClass('on');
    })
})