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

    var MAIN_NOTICE_SLIDE = new Swiper('.MainNotice .main_notice_slide', {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 3,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
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

        $('.MainCategory .tab_content .con').removeClass('on');
        $('.MainCategory .tab_content .con').eq(IDX).addClass('on');
    })

    const ONLINE_CONTENT_SLIDE = new Swiper('.MainContent .online_content_slide', {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
    })

    $('.MainContent .online_content .slide_arrows .left').on('click', function () {
        ONLINE_CONTENT_SLIDE.slidePrev();
    })
    $('.MainContent .online_content .slide_arrows .right').on('click', function () {
        ONLINE_CONTENT_SLIDE.slideNext();
    })
})