$('nav ul li a').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('class') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top - 80
    });
})

$(function () {
    $(document).scroll(function () {
        var $nav = $("nav");
        var $img = $("nav ul li img");
        // var $height = $("nav ul li a");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $img.toggleClass('changeSize', $(this).scrollTop() > $nav.height());
        // $height.toggleClass('lineHeight', $(this).scrollTop() > $nav.height());
    });
})