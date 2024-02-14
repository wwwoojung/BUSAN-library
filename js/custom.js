$(function () {
    feather.replace();

    $('#content').fullpage({
        scrollOverflow: false,
        responsiveWidth: 1200,
        anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'footer'],
        onLeave: function (anchorLink, index) {
            $('.side_nav>ul>li').removeClass('on');
            $('.side_nav>ul>li').eq(index.index).addClass('on');

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
            };

            if (index.index == 0) {
                $('.side_nav').addClass('on')
            } else if (index.index == 2) {
                $('.side_nav').addClass('on')
            } else if (index.index == 5) {
                $('.side_nav').addClass('__on')
            } else {
                $('.side_nav').removeClass('on')
                $('.side_nav').removeClass('__on')
            };
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

        if (IDX == 2) {
            $('.MainCategory .tab_content .slide_arrows').addClass('on');
        } else {
            $('.MainCategory .tab_content .slide_arrows').removeClass('on')
        }

        const MAIN_CATE_SLIDE = new Swiper('.MainCategory .tab_content .con.on', {
            spaceBetween: 30,
            slidesPerView: 5,
            slidesPerGroup: 5,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },

            // breakpoints: {
            //     320: {
            //         slidesPerView: 1,
            //     },
            //     768: {
            //         slidesPerView: 2,
            //     },
            //     1200: {
            //         slidesPerView: 3,
            //     }
            // }
        })

        $('.MainCategory .tab_content .slide_arrows .left').on('click', function () {
            MAIN_CATE_SLIDE.slidePrev();
        })
        $('.MainCategory .tab_content .slide_arrows .right').on('click', function () {
            MAIN_CATE_SLIDE.slideNext();
        })
    })

    const MAIN_CATE_SLIDE = new Swiper('.MainCategory .tab_content .con.on', {
        spaceBetween: 30,
        slidesPerView: 5,
        slidesPerGroup: 5,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        // breakpoints: {
        //     320: {
        //         slidesPerView: 1,
        //     },
        //     768: {
        //         slidesPerView: 2,
        //     },
        //     1200: {
        //         slidesPerView: 3,
        //     }
        // }
    })

    $('.MainCategory .tab_content .slide_arrows .left').on('click', function () {
        MAIN_CATE_SLIDE.slidePrev();
    })
    $('.MainCategory .tab_content .slide_arrows .right').on('click', function () {
        MAIN_CATE_SLIDE.slideNext();
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