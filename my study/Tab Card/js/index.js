$(function () {
    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
    $(".nav").on("click", "a", function (e) {
        e.preventDefault();
        var clname = "." + $(this).data('get');
        $(clname).show().siblings().hide();
        $(this).addClass("bottom").parent().siblings().children().removeClass("bottom");
    })

    function show() {
        var id = GetQueryString("id");
        console.log($("a[data-get='" + id + "']"));
        $("a[data-get='" + id + "']").addClass("bottom").parent().siblings().children().removeClass("bottom");
        $("." + id).show().siblings().hide();
    }
    show();
})

$(function () {
    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
    $(".nav").on("click", "a", function (e) {
        e.preventDefault();
        var clname = "." + $(this).data('get');
        $(clname).show().siblings().hide();
        $(this).addClass("t-tabIn").parent().siblings().children().removeClass("t-tabIn");
    })

    function show() {
        var id = GetQueryString("id");
        console.log($("a[data-get='" + id + "']"));
        $("a[data-get='" + id + "']").addClass("t-tabIn").parent().siblings().children().removeClass("t-tabIn");
        $("." + id).show().siblings().hide();
    }
    show();
})