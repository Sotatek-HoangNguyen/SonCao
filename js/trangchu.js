$(document).ready(function () {
    //Contact
    $(window).scroll(function () {
        var x = $(window).scrollTop();
        if (x >= 50) {
            $('.header__contact').addClass('contact');
        }
        else {
            $('.header__contact').removeClass('contact');
        }
        var h1 = $('.hang1').offset().top - 800;
        var h2 = $('.hang2').offset().top - 800;
        var h3 = $('.hang3').offset().top - 800;
        if (x >= h1) {
            $('#h1c1').addClass('device-1');
            $('#h1c2').addClass('device-2');
        }
        if (x >= h2) {
            $('#h2c1').addClass('device-3');
            $('#h2c2').addClass('device-4');
        }
        if (x >= h3) {
            $('#h3c1').addClass('device-5');
            $('#h3c2').addClass('device-6');
        }
    });
    //Slide
    $('.banner__btn-right').click(function () {
        clearInterval(time);
        time = setInterval(function () {
            $('.banner__btn-right').delay(5000).trigger('click');
        }, 3000);
        var slide__sau = $('.active').next();
        if (slide__sau.length == 0) {
            $('.active').removeClass('active');
            $('.banner__bg-img:first-child').addClass('active');
        }
        else {
            $('.active').removeClass('active');
            slide__sau.addClass('active');
        }
    });
    $('.banner__btn-left').click(function () {
        clearInterval(time);
        time = setInterval(function () {
            $('.banner__btn-left').delay(5000).trigger('click');
        }, 3000);

        var slide__trc = $('.active').prev();
        if (slide__trc.length == 0) {
            $('.active').removeClass('active');
            $('.banner__bg-img:last-child').addClass('active');
        }
        else {
            $('.active').removeClass('active');
            slide__trc.addClass('active');
        }
    });
    time = setInterval(function () {
        $('.banner__btn-right').trigger('click');
    }, 3000);
    // Hãng sản xuất
    $('.manufacturer__btn-right i').click(function(){
            clearInterval(timeInterval);
            timeInterval = setInterval(function () {
                $('.manufacturer__btn-right i').delay(5000).trigger('click');
            }, 3000);
            $('.manufacturer__item:first').clone().appendTo(".manufacturer__list")
            $('.manufacturer__item:first').remove();
    });
    
    $('.manufacturer__btn-left i').click(function(){
        clearInterval(timeInterval);
        timeInterval = setInterval(function () {
            $('.manufacturer__btn-left i').delay(5000).trigger('click');
            }, 3000);
        $('.manufacturer__item:last').clone().prependTo(".manufacturer__list")
        $('.manufacturer__item:last').remove();
    });
    timeInterval = setInterval(function () {
            $('.manufacturer__btn-right i').trigger('click');
    }, 300);
    // kiến thức y tế
        $('.knowledge__point li').on('click',function(){   
            let dataID = $(this).data('id');
            $('.knowledge__point li').removeClass('active');
            $(this).addClass('active');
        
            switch(dataID){
                case 1:
                    $('.knowledge__list').css({"transform":"translateX(0)"})
                    break;
                case 2:
                    $('.knowledge__list').css({"transform":"translateX(-470px)"})
                    break;
                case 3:
                    $('.knowledge__list').css({"transform":"translateX(-940px)"})
                    break;
                case 4:
                    $('.knowledge__list').css({"transform":"translateX(-1410px)"})
                    break;
                case 5:
                    $('.knowledge__list').css({"transform":"translateX(-1880px)"})
                    break;
            }
        });
});
