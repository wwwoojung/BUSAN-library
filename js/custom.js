$(function () {
    feather.replace();

    $('#content').fullpage({
        scrollOverflow: false,
        responsiveWidth: 1200,
        navigation: true,
        onLeave: function (anchorLink, index) {
            if (index.index == 0) {
                $('#Header').removeClass('on');
                document.getElementById("H_logo").src = "./images/logo_wh.png";
            } else {
                $('#Header').addClass('on');
                if ($('#Header').hasClass('m_active')) {
                    document.getElementById("H_logo").src = "./images/logo_wh.png";

                } else {
                    document.getElementById("H_logo").src = "./images/logo_bk.png";
                }
            }
        },
    });

    $('#Header .mopen').on('click', function () {
        $('#Header').toggleClass('m_active');
    })

    $('#Header').on('wheel touchmove', function (e) {
        if ($('#Header').hasClass('m_active')) {
            e.preventDefault();
        }
    })

    const MAIN_NOTICE_SLIDE = new Swiper('.MainNotice .main_notice_slide.on', {
        loop: true,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    })

    $('.MainNotice .slide_arrows .left').on('click', function () {
        MAIN_NOTICE_SLIDE.slidePrev();
    })
    $('.MainNotice .slide_arrows .right').on('click', function () {
        MAIN_NOTICE_SLIDE.slideNext();
    })


    $('.MainNotice .tab_menu>li>a').on('click', function (e) {
        e.preventDefault();
        const IDX = $(this).parent().index();
        console.log(IDX);
        $('.MainNotice .tab_menu>li').removeClass('on');
        $('.MainNotice .tab_menu>li').eq(IDX).addClass('on');

        $('.MainNotice .main_notice .main_notice_slide').removeClass('on');
        $('.MainNotice .main_notice .main_notice_slide').eq(IDX).addClass('on');

        const MAIN_NOTICE_SLIDE = new Swiper('.MainNotice .main_notice_slide.on', {
            loop: true,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                }
            }
        })

        $('.MainNotice .slide_arrows .left').on('click', function () {
            MAIN_NOTICE_SLIDE.slidePrev();
        })
        $('.MainNotice .slide_arrows .right').on('click', function () {
            MAIN_NOTICE_SLIDE.slideNext();
        })
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
        effect: 'fade',
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