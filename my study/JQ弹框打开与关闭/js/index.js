$(function () {
    $('#open').click(function () {
        if ($('#cslj').css('display') == 'none') {
            $('#cslj').show();
        }
    });
    $('#gba').click(function () {
        if ($('#cslj').css('display') == 'block') {
            $('#cslj').hide();
        }
    });
});

$(function () {
    $(document).bind('click', function (e) {
        var target = $(e.target);
        if (target.closest('.pop').length == 0) {
            $('.pop').hide();
        }
    });
});

$(function () {
    $('div.down').click(function (e) {
        e.stopPropagation();
        $('div.con').removeClass('hide');
    });
    $('document').click(function () {
        if (!$('div.con').hasClass('hide')) {
            $('div.con').addClass('hide');
        }
    });
});

$(function () {
    $('.btn').click(function (event) {
        var e = window.event || event;
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
        $('#box').show();
    });
    $('#box').click(function (event) {
        var e = window.event || event;
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    });
    document.onclick = function () {
        $('#box').hide();
    }
});