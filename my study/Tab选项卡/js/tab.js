$(function () {
    $('#tabBox li').each(function (index) { //历遍所有的li，让所有的li都触发一个函数
        $(this).mouseover(function () { //鼠标滑过哪一个li时，当前li都触发一mouseover事件
            $('li.tabIn').removeClass('tabIn'); //本来具有tabIn的li的tabIn类移除
            $(this).addClass('tabIn'); //给当前的li增加一个tabIn类，让它的背景以及样式区别于其他的li
            $('#tabBox div.tabCont').removeClass('tabCont'); //让本来就有tabCont的div的tabCont的类移除
            $('#tabBox div').eq(index).addClass('tabCont') //找到#tabBox框架里的div然后通过eq()函数通过设置index值当前的div块，给他增加一个类tabCont
        });
    });
});

$(function () {
    $('#t_tabBox li').click(function () {
        $(this).addClass('t_tabIn').siblings().removeClass('t_tabIn'); //给当前的li增加一个t_tabIn类，同时让它所有的同级(siblings)的li不显示
        var index = $('#t_tabBox li').index(this); //定义一个变量，获取每次鼠标划过时对应的li的索引值
        $('#kk>div').eq(index).show().siblings().hide(); //找到kk下的div，获取相应的索引值，然后显示出来，同时让它所有的同级div不显示
    });
});

$(function () {
    $('.s_tab').mouseover(function () {
        $('.tabcontent').css('display', 'block');
    });
    $('.s_tab').mouseout(function () {
        $('.tabcontent').css('display', 'none');
    });
});