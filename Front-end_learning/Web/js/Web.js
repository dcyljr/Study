window.onload = function () {
    /* 单独调用开始： */
    /* var display = document.getElementById('block');
    var cite = document.getElementById('cite');
    display.onmouseover = function () {
        cite.style.display = 'block';
    }
    display.onmouseout = function () {
        cite.style.display = 'none';
    }
    cite.onmouseover = function () {
        cite.style.display = 'block';
    }
    cite.onmouseout = function () {
        cite.style.display = 'none';
    }  */
    /* 单独调用结束// */

    /* 调用同一方法开始： */
    eVent('block', 'onmouseover');//调用函数
    eVent('cite', 'onmouseover');
    function eVent(id, event) {
        var ev = document.getElementById(id);//定义变量获取id
        ev[event] = function () {//调用方法 执行事件
            var cite = document.getElementById('cite');
            cite.style.display = 'block';
        }
    }

    function onevent(id,onevent){
        var onev=document.getElementById(id);
        onev[onevent]=function(){
            var cite = document.getElementById('cite');
            cite.style.display = 'none';
        }
    }
    onevent('block','onmouseout');
    onevent('cite','onmouseout');
    /* 调用同一方法结束// */
}