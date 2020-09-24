/* $(function(){
    $(window).resize(function(){
        var cliWidth=document.body.clientWidth;
        var divWidth=cliWidth-1000;
        $('#resizeDiv').css({'width':divWidth+'px'});
    });
}); */


/* $(document).ready(function () {
    //书讯快递循环垂直向上滚动
    function movedome() {
        var margintop = 0; //上边距的偏移量
        var stop = false;
        setInterval(function () {
            if (stop == true) {
                return;
            }
            $("#express").children("li").first().animate({
                "margin-top": margintop--
            }, 0, function () {
                var $li = $(this);
                if (!$li.is(":animated")) { //第一个li的动画结束时
                    if (-margintop > $li.height()) {
                        $li.css("margin-top", "0px").appendTo($("#express"));
                        margintop = 0;
                    }
                }
            });
        }, 20);
        //鼠标放到快递信息(ul)上时
        $("#express").hover(function () {
            $(this).css("cursor", "pointer");
            stop = true; //停止动画
        }, function () {
            stop = false; //开始动画
        });
    }
    movedome();
}); */

/* $(function () {
    var box0 = $('.to-top'),
        v0 = 1;
    Rin(box0, v0);

    function Rin($Box, v) {
        var top = 0,
            s = 0,
            timer;

        $('.u-top li').each(function (index) {
            s += $(this).outerHeight(true);
        });
        window.requestAnimationFrame = window.requestAnimationFrame || function (Tmove) {
            return setTimeout(Tmove, 1000 / 60)
        };
        window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;
        if (s >= $Box.height()) {
            $('.u-top li').clone(true).appendTo($('.u-top'));
            Tmove();

            function Tmove() {
                top -= v;
                if (top <= -s) {
                    top = 0;
                    $('.u-top').css('top', top)
                } else {
                    $('.u-top').css('top', top)
                }
                timer = requestAnimationFrame(Tmove);
            }
            $('.u-top').hover(function () {
                cancelAnimationFrame(timer)
            }, function () {
                Tmove()
            })
        }
    }
}); */

$(function () {
    var $this = $(".renav");
    var scrollTimer;
    $this.hover(function () {
        clearInterval(scrollTimer);
    }, function () {
        scrollTimer = setInterval(function () {
            scrollNews($this);
        }, 2000);
    }).trigger("mouseout");
});

function scrollNews(obj) {
    var $self = obj.find("ul:first");
    var lineHeight = $self.find("li:first").height();
    $self.animate({
        "margin-top": -lineHeight + "px"
    }, 600, function () {
        $self.css({
            "margin-top": "0px"
        }).find("li:first").appendTo($self);
    })
}

$(function () {
    $(".xbox").scroll(); //默认横向滚动
    $(".ybox").scroll({
        direction: "y"
    }); //设置为纵向滚动
});

$(function () {
    var gunHeight = $(".gun").height();
    console.log(gunHeight);
    var boxHeight = $(".box").height();
    console.log(boxHeight);


    var direction = -1;
    var strop = setInterval(function () {
        var i = 0;
        var gunTop = parseInt($(".gun").css("top"));
        if (-gunTop > gunHeight - boxHeight) {
            direction = -direction;
            // gunTop = 0; 滚完一遍，从头开始滚
        }
        if (gunTop > 0) {
            direction = -direction;
        }
        $(".gun").css({
            "top": gunTop + 1 * direction
        });
    }, 50);
});


$(function () {
    var $this = $(".r-nav");
    var scrollTimer;
    $this.hover(function () {
        clearInterval(scrollTimer);
    }, function () {
        scrollTimer = setInterval(function () {
            scrollNews($this);
        }, 2000);
    }).trigger("mouseout");
});

function scrollNews(obj) {
    var $self = obj.find(".r-nav:first");
    var lineHeight = $self.find("ul:first").height();
    $self.animate({
        "margin-top": -lineHeight + "px"
    }, 600, function () {
        $self.css({
            "margin-top": "0px"
        }).find("ul:first").appendTo($self);
    })
}

$(function () {

    //数据进行滚动
    var $this = $('.scrollNews');
    var scrollTimer = setInterval(function () {
        scrollNews($this);
    }, 1000);
    $this.hover(function () {
        clearInterval(scrollTimer);
    }, function () {
        scrollTimer = setInterval(function () {
            scrollNews($this);
        }, 1000);
    });
});

function scrollNews(obj) {
    var $self = obj.find('ul:first');
    var lineHeight = $self.find('li:first').height();
    $self.animate({
        'marginTop': -lineHeight + 'px'
    }, 600, function () {
        $self.css({
            marginTop: 0
        }).find('li:first').appendTo($self);
    });
}

/* $(function(){
    $('.z-hide ul li a').hover(function(){
        if($('.two').width>$('.one').width){
            $('.two').css({'position':'absolute','margin-left':'114px','width':'auto','z-index':'999','background-color':'#fff'})
        }
    });
}); */