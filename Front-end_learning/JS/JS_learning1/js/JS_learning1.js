window.onload = function () {
    var t_btn = document.getElementById('btn');
    t_btn.onclick = function () {
        var x = document.getElementsByClassName('text');
        x[0].style.color = "red";
    }

    var wenzi = document.getElementById('clickbtn');
    var div = document.getElementById('menu');
    wenzi.onclick = function () {
        if (div.style.display == 'block') { // == 判断div.display是否为显示
            div.style.display = 'none'; //= 赋值也可了解成改变
        } else {
            div.style.display = 'block';
        }
    }


    //for循环
    var btnbg = document.getElementById('btn_bg');
    var btnnbg = document.getElementById('btn_nbg');
    var menubg = document.getElementById('menubg');
    var menuli = menubg.getElementsByTagName('li');
    btnbg.onclick = function () {
        for (var i = 0; i < menuli.length; i++) {
            if (i % 2 == 0) {
                menuli[i].style.backgroundColor = '#4fd4';
            }
        }
    }

    btnnbg.onclick = function () {
        for (var i = 0; i < menuli.length; i++) {
            if (i % 2 == 0) {
                menuli[i].style.backgroundColor = '#fff';
            }
        }
    }
}