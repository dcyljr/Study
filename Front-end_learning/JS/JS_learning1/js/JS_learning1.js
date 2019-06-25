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


    //for循环 获取奇偶数:
    var btnbg = document.getElementById('btn_bg');
    var btnnbg = document.getElementById('btn_nbg');
    var menubg = document.getElementById('menubg');
    var menuli = menubg.getElementsByTagName('li');
    btnbg.onclick = function () {
        for (var i = 0; i < menuli.length; i++) {
            if (i % 2 == 0) {
                menuli[i].style.backgroundColor = '#4fd4'; //奇数
            } else {
                menuli[i].style.backgroundColor = '#3df52c'; //偶数
            }
        }
    }

    btnnbg.onclick = function () {
        for (var i = 0; i < menuli.length; i++) {
            if (i % 2 == 0) {
                menuli[i].style.backgroundColor = '#fff'; //奇数
            } else {
                menuli[i].style.backgroundColor = '#fff'; //偶数
            }
        }
    }


    //轮播图一:
    var imgBox = document.getElementById('img_box');
    var ulBox = document.getElementById('ul_box');
    var picImg = document.getElementById('pic');
    var lbtn = document.getElementById('left');
    var rbtn = document.getElementById('right');
    var iLi = ulBox.getElementsByTagName('li');
    //第一个按钮设置为红色
    var currentNUM = 1;
    iLi[0].style.backgroundColor = 'red';
    //图片循环改变
    var timer = setInterval(startloop, 4000);

    function startloop() {
        currentNUM++
        changeIMG()
    }

    function changeIMG() {
        if (currentNUM == 0) {
            currentNUM = 8;
        }
        if (currentNUM == 9) {
            currentNUM = 1;
        }
        picImg.src = 'images/Roll/' + currentNUM + '.jpg';
        //清空圆点颜色，改变下一个颜色
        for (var i = 0; i < iLi.length; i++) {
            iLi[i].style.backgroundColor = '#aaa';
        }
        iLi[currentNUM - 1].style.backgroundColor = 'red'; //设置当前圆点颜色
    };
    //鼠标进入img_box和离开
    imgBox.addEventListener('mouseover', function () {
        //左右显示出来
        lbtn.style.display = 'block';
        rbtn.style.display = 'block';
        window.clearInterval(timer);
    }, false);
    imgBox.addEventListener('mouseout', function () {
        lbtn.style.display = 'none';
        rbtn.style.display = 'none';
        timer - setInterval(startloop, 5000);
    }, false);
    //左右按钮点击
    lbtn.addEventListener('click', deep, false);
    lbtn.addEventListener('click', nodeep, false);
    rbtn.addEventListener('click', deep, false);
    rbtn.addEventListener('click', nodeep, false);
    lbtn.addEventListener('click', function () {
        currentNUM--;
        changeIMG();
    }, false);
    rbtn.addEventListener('click', startloop, false);

    function deep() {
        this.style.backgroundColor = 'rgba(0,0,0,0.4)';
    };

    function nodeep() {
        this.style.backgroundColor = 'rgba(0,0,0,0.2)';
    };
    //小圆点转换
    for (var i = 0; i < iLi.length; i++) {
        iLi[i].index = i + 1;
        iLi[i].addEventListener('click', function () {
            iLi[0].style.backgroundColor = '#aaa'
            currentNUM = this.index;
            console.log(currentNUM)
            changeIMG();
        }, false);
    }

    //轮播图二:
    var time = null;
    var index = 0;
    var pics = document.getElementsByClassName('banner-slide');
    var mNav = document.getElementById('m_nav');
    var liS = mNav.getElementsByTagName('li');
    //封装代替getElementById()的方法
    function byId(id) {
        return typeof (id) === 'string' ? document.getElementById(id) : id;
    }

    function slideImg() {
        var main = byId('main');
        var banner = byId('banner');
        main.onmouseover = function () {
            stopAutoPlay();
        }
        main.onmouseout = function () {
            startAutoPlay();
        }
        main.onmouseout();
        //点击导航切换图片
        for (var i = 0; i < pics.length; i++) {
            liS[i].id = i;
            //每个li绑定点击事件
            liS[i].onclick = function () {
                index = this.id; //获取当前li的index值
                changeImg();
            }
        }
    }

    function startAutoPlay() { //开始轮播
        time = setInterval(function () {
            index++;
            if (index > 3) {
                index = 0;
            }
            changeImg();
        }, 3000);
    }

    function stopAutoPlay() { //暂停轮播
        if (time) {
            clearInterval(time);
        }
    }

    function changeImg() { //改变轮播
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.display = 'none';
            liS[i].className = '';
        }
        pics[index].style.display = 'block';
        liS[index].className = 'changeColor';
    }
    slideImg();

    //选项卡:
    var tabMenu = document.getElementById('tab_menu');
    var menuLi = tabMenu.getElementsByTagName('li');
    var tabCon = document.getElementById('tab_content');
    var conTab = tabCon.getElementsByClassName('c_tab');
    for (var i = 0; i < menuLi.length; i++) { //使用 循环依次得到li 
        menuLi[i].index = i;
        menuLi[i].onclick = function () { //每次鼠标点击操作触发事件
            for (var i = 0; i < menuLi.length; i++) { //在li的个数内依次展示内容
                menuLi[i].className = '';
                conTab[i].style.display = 'none';
            }
            this.className = 'act';
            conTab[this.index].style.display = 'block'
        }
        for (var m = 1; m < menuLi.length; m++) {
            menuLi[m].className = '';
            conTab[m].style.display = 'none';
        }
    }

    //滚动图一:
    var rollBox = document.getElementById('roll_box');
    var rollUl = document.getElementById('u_roll');
    var rollLi = rollUl.getElementsByTagName('li');
    rollUl.innerHTML = rollUl.innerHTML + rollUl.innerHTML; //li下的内容相加
    rollUl.style.width = rollLi[0].offsetWidth * rollLi.length + 'px'; //ul的宽度等于每个li的宽度乘以所有li长度
    var speed = 2
    //主方法
    function move() {
        //如果左边长度横向滚动了长度一半之后，回到初始位置
        if (rollUl.offsetLeft < -rollUl.offsetWidth / speed) {
            rollUl.style.left = '0'
        }
        //如果有变横向滚动的距离大于0，就让他的位置回到一半
        if (rollUl.offsetLeft > 0) {
            rollUl.style.left = -rollUl.offsetWidth / speed + 'px';
        }
        rollUl.style.left = rollUl.offsetLeft - 2 + 'px'; //进行左横向滚动
        //rollUl.style.left = rollUl.offsetLeft + speed + 'px'; //进行有横向滚动
    }
    //调用方法
    var mtimer = setInterval(move, 100)
    //鼠标指向时暂停
    rollBox.onmouseover = function () {
        clearInterval(mtimer);
    }
    //鼠标离开后继续滚动
    rollBox.onmouseout = function () {
        mtimer = setInterval(move, 100)
    }

    //滚动图二:
    var rBox = document.getElementById('ii_roll');
    var rollt = document.getElementById('ulroll');
    var rolls = document.getElementById('rollt');
    rolls.innerHTML = rollt.innerHTML; //克隆第一个ul的数据
    function scrollup() {
        if (rBox.scrollLeft >= rollt.offsetWidth) {
            //滚动条距离左边的值恰好等于div的宽度时，达到滚动临界点，此时将让scrollLeft=0,让ul回到初始位置，实现无缝滚动
            rBox.scrollLeft = 0;
        } else {
            rBox.scrollLeft++;
        }
    }
    var scrollMove = setInterval(scrollup, 30); //数值越大，滚动速度越慢
    //鼠标经过时滚动停止与继续
    rBox.onmouseover = function () {
        clearInterval(scrollMove);
    }
    rBox.onmouseout = function () {
        scrollMove = setInterval(scrollup, 30);
    }
}