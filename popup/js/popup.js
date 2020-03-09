window.onload = function () {
    // 实现多个元素同时绑定相同事件
    /* var link = document.getElementsByClassName("link");
    for (var i = 0; i < link.length; i++) {
        link[i].onclick = function () {
            show(this);
        }
    } */
    var link = document.getElementById('link');
    link.onclick = function () {
        show(this);
    }

    function show(curDiv) {
        // 获取整个页面的宽和高
        var page_width = document.documentElement.scrollWidth;
        var page_height = document.documentElement.scrollHeight;

        // 获取浏览器的宽和高
        var b_width = document.documentElement.clientWidth;
        var b_height = document.documentElement.clientHeight;

        // var e = event || window.event;
        // event兼容火狐
        var evt = window.event || arguments.callee.caller.arguments[0];
        var div_height = curDiv.offsetTop;
        var div2_height = evt.clientY;

        // 创建一个叫mask的div,id是#mask;
        var mask = document.createElement("div");
        mask.id = "mask";

        // mask的宽和高
        mask.style.width = page_width + "px";
        mask.style.height = page_height + "px";

        // 在body里添加一个mask的子元素;
        document.body.appendChild(mask);

        // 创建一个叫kuang的div,id是#kuang;
        var layer_box = document.createElement("div");
        layer_box.id = "layer_box";

        // layer_box在浏览器水平和垂直居中
        layer_box.style.left = (b_width - 400) / 2 + "px";
        layer_box.style.top = (div_height - div2_height + 200) + "px";
        // 在layer_box里放一个div,id=close 
        layer_box.innerHTML = '<div id ="close"></div>';

        // 在body里添加一个kuang的子元素;
        var ku = document.body.appendChild(layer_box);
        ku.innerHTML += '<img src="./images/qrcode.jpg">';
        // close做一个点击事件,关闭mask 和 layer_box
        document.getElementById("close").onclick = function () {
            document.body.removeChild(mask);
            document.body.removeChild(layer_box);
        }
        // mask做一个点击事件,关闭mask 和 layer_box
        document.getElementById("mask").onclick = function () {
            document.body.removeChild(mask);
            document.body.removeChild(layer_box);
        }
    }

    // 浏览器窗口发生变化时
    window.onresize = function () {
        var layer_box = document.getElementById("layer_box");
        var mask = document.getElementById("mask");
        var b_width = document.documentElement.clientWidth;
        var b_height = document.documentElement.clientHeight;
        var page_width = document.documentElement.scrollWidth;
        var page_height = document.documentElement.scrollHeight;

        layer_box.style.left = (b_width - 400) / 2 + "px";
        layer_box.style.top = kuang.offsetTop + "px";

        mask.style.width = page_width + "px";
        mask.style.height = page_height + "px";
    }

    var showImg = document.getElementById('showimg');
    var hideImg = document.getElementById('hideimg');

    showImg.onclick = function () {
        document.getElementById("wxImg").style.display = 'block';
    }

    hideImg.onclick=function () {
        document.getElementById("wxImg").style.display = 'none';
    }
}