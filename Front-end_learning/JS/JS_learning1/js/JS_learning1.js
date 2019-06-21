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


    //for循环 获取奇偶数
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
    //轮播图一
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

    //轮播图二
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

    //选项卡
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
}