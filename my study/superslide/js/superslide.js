/* $(function () {
    $(".leftMarqueen").slide({
        mainCell: ".leftMarqueen ul",
        effect: "leftMarquee",
        vis: 5,
        interTime: 40,
        autoPlay: true
    });
}); */

$(function () {
    var box0 = $('.leftMarqueen'),
        v0 = 1;
    Rin(box0, v0);

    function Rin($Box, v) {
        var left = 0,
            s = 0,
            timer;

        $('.left li').each(function (index) {
            s += $(this).outerWidth(true);
        });
        window.requestAnimationFrame = window.requestAnimationFrame || function (Tmove) {
            return setTimeout(Tmove, 1000 / 60)
        };
        window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;
        if (s >= $Box.width()) {
            $('.left li').clone(true).appendTo($('.left'));
            Tmove();

            function Tmove() {
                left -= v;
                if (left <= -s) {
                    left = 0;
                    $('.left').css('left', left)
                } else {
                    $('.left').css('left', left)
                }
                timer = requestAnimationFrame(Tmove);
            }
            $('.left').hover(function () {
                cancelAnimationFrame(timer)
            }, function () {
                Tmove()
            })
        }
    }
});