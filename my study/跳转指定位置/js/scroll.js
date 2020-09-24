function scrollToTop() {
    document.getElementById('scrollBody').scrollTop = 200;
}

$(function () {
    $('#nav').on('click', 'li', function (e) {
        var target = e.target;
        var id = $(target).data("to");
        $('html,body').animate({
            scrollTop: $('#' + id).offset().top
        }, 800);
    });
});