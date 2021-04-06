$(document).ready(function() {
    let header_container = $('.header__container');
    let logo = $('.logo');
    let nav = $('.header__nav');

    $(document).scroll(function() {
        let top = $(this).scrollTop();
        if (top > 5) {
            console.log(top);
            header_container.addClass('headerActive');
            logo.addClass('logoActive');
            nav.addClass('navActive');
        } else {
            header_container.removeClass('headerActive');
            header_container.addClass('header__container');
            logo.removeClass('logoActive');
            logo.addClass('logo');
            nav.removeClass('navActive');
            nav.addClass('header__nav');
        }
    })
})