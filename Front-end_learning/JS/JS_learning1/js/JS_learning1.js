window.onload = function () {
    //原生JS+CSS实现一个简单带二级菜单顶部导航
    var navBarBox = document.getElementById('navBarBox');
    var liTags = navBarBox.querySelectorAll('li');
    for (var i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function (e) {
            var li = e.currentTarget;
            li.classList.add("at");
        }
        liTags[i].onmouseleave = function (e) {
            var li = e.currentTarget;
            li.classList.remove('at');
        }
    }

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

    //for循环有三个表达式：申明循环变量、判断循环条件、更新循环变量;
    //for循环执行特点：先判断，再执行，与while相同。
    //for循环三个表达式都可以由多部分组成；第二部分多个判断条件用&& || 链接，第一二部分用逗号分隔；
    //break与continue:
    //break:跳出本层循环剩余的代码，继续执行下一次循环。如果有多层嵌套，则只跳出一层
    //continue:跳出本次循环剩余的代码，继续执行下一次循环。对于for循环，continue之后执行的代码，是循环变量更新的语句i++对于while、do-while循环，continue之后执行的语句，是循环条件判断；因此使用这两个循环时，必须将continue放到i++之后使用，否则continue跳出i++导致死循环。
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
        timer - setInterval(startloop, 4000);
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

    //轮播图三:
    var container = document.getElementById('container');
    var cliList = document.getElementById('rollList');
    var buttons = document.getElementById('cliButton').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var ind = 1;
    var ntimer;

    function animate(offset) {
        //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，且style.left获取的是字符串，需要用parseInt()取整转化为数字
        var newLeft = parseInt(cliList.style.left) + offset;
        cliList.style.left = newLeft + 'px';
        //无限滚动判断
        if (newLeft > -600) {
            cliList.style.left = -3000 + 'px';
        }
        if (newLeft < -3000) {
            cliList.style.left = -600 + 'px';
        }
    }

    function play() {
        //重复执行的定时器
        ntimer = setInterval(function () {
            next.onclick();
        }, 3000);
    }

    function stop() {
        clearInterval(ntimer);
    }

    function buttonsShow() {
        //将之前的小圆点样式清除
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == 'on') {
                buttons[i].className = '';
            }
        }
        //数组从0开始，故ind需要-1
        buttons[ind - 1].className = 'on';
    }
    prev.onclick = function () {
        ind -= 1;
        if (ind < 1) {
            ind = 5
        }
        buttonsShow();
        animate(600);
    };

    next.onclick = function () {
        //由于上边定时器的作用，ind会一直递增下去，七个小圆点需要做出判断
        ind += 1;
        if (ind > 5) {
            ind = 1
        }
        animate(-600);
        buttonsShow();
    };
    for (var i = 0; i < buttons.length; i++) {
        (function (i) {
            buttons[i].onclick = function () {
                //获取鼠标移动到小圆点的位置，用this把ind绑定到对象buttons[i]上
                //由于此处ind是自定义属性，需要用到getAttribute()这个DOM2级方法，去获取自定义ind的属性
                var clickIndex = parseInt(this.getAttribute('index'));
                var offset = 600 * (ind - clickIndex); //ind是当前图片停留时的ind
                animate(offset);
                ind = clickIndex; //存放鼠标点击后的位置，用于小圆点正常显示
                buttonsShow();
            }
        })(i)
    }
    container.onmouseover = stop;
    container.onmouseout = play;
    play();



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

    //无缝循环滚动:
    //数组形式：
    //1、使用字面量申明：var arr=[];2、在JS中，同一数组，可以存储各种数据类型，直接将数据存储在数组中，eg:var arr=[1,'chuan',true,{},null,func];3、使用new关键字申明：var arr=new Array(参数);参数可以是：1)参数省略，表示创建一个空数组;2）参数为一个整数，表示申明一个length为指定长度的数组。但是这个length可以随时可变可追加。3）参数为逗号分隔的多个数值，表示数组的多个值，eg:new Array(1,2,3)==[1,2,3]
    var arr = new Array();
    arr[0] = 'images/num1.jpg';
    arr[1] = 'images/num2.jpg';
    arr[2] = 'images/num3.jpg';
    arr[3] = 'images/num4.jpg';
    arr[4] = 'images/num5.jpg';
    arr[5] = 'images/num3.jpg';
    arr[6] = 'images/num2.jpg';
    var curIndex = 0;
    setInterval(function () { //以setInterval设置定时器，每隔n秒执行一次，接受两个参数：需要执行的function、毫秒数。clearInterval就是用来清楚定时器
        var arrimg = document.getElementById('arr_img');
        var aimg = document.getElementById('arrimg');
        if (curIndex == arr.length - 1) {
            curIndex = 0;
        } else {
            curIndex += 1;
        }
        arrimg.src = arr[curIndex];
        //console.log(curIndex);
    }, 4000);

    //返回顶部
    //创建变量
    var scroll_Top = document.getElementById('top');
    var scrolltimer = null;

    function scrollTop() {
        //取消一个通过调用requestAnimationFrame()方法添加到计划中的动画帧请求
        cancelAnimationFrame(scrolltimer);
        //requestAnimationFrame会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率一般来说，这个频率为每秒60帧。
        scrolltimer = requestAnimationFrame(function sTop() {
            var top = document.body.scrollTop || document.documentElement.scrollTop;
            if (top > 0) {
                //以定时器将scrollTop的值每次减少20（自行设置），直到减少到0，则滚动完毕
                document.body.scrollTop = document.documentElement.scrollTop = top - 3000; //数值越大，回滚越接近顶部，一般数值与页面高度相等
            } else {
                cancelAnimationFrame(scrolltimer);
            }
        });
    }
    scroll_Top.addEventListener('click', scrollTop, false);

    //添加分别点击按钮
    //one:
    var btnBox = document.getElementById('btn_box');
    var button = btnBox.getElementsByTagName('button');
    var alertWin = document.getElementById('alert_win');
    var win = alertWin.getElementsByTagName('div');
    for (i = 0; i < button.length; i++) {
        button[i].index = i;
        button[i].onclick = function () {
            for (var i = 0; i < button.length; i++) {
                win[i].className = '';
            }
            win[this.index].className = 'win'
        }
        for (var m = 1; m < button.length; m++) {
            win[i].className = '';
        }
    }

    //two:
    var btnText1 = document.getElementById('btn_text1');
    var btnText2 = document.getElementById('btn_text2');
    btnText1.addEventListener('click', () => {
        alert('按钮一')
    })
    btnText2.addEventListener('click', () => {
        alert('按钮二')
    })

    //four:
    function arrayButtons(buttons) {
        buttons.map(btn_text_four => {
            document.getElementById(btn_text_four.id).onclick = function () {
                alert(btn_text_four.text)
            }
        })
    }

    arrayButtons([{
            id: 'btn_text_four1',
            text: '按钮1'
        },
        {
            id: 'btn_text_four2',
            text: '按钮2'
        }
    ])

    //swiper横向轮播——阶梯式滚动轮播
    var certifySwiper = new Swiper('#certify .swiper-container', {
        watchSlidesProgress: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        autoplay: true,
        loopedSlides: 5,
        autoplay: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            //clickable :true,
        },
        on: {
            progress: function (progress) {
                for (i = 0; i < this.slides.length; i++) {
                    var slide = this.slides.eq(i);
                    var slideProgress = this.slides[i].progress;
                    modify = 1;
                    if (Math.abs(slideProgress) > 1) {
                        modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                    }
                    translate = slideProgress * modify * 260 + 'px';
                    scale = 1 - Math.abs(slideProgress) / 5;
                    zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                    slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                    slide.css('zIndex', zIndex);
                    slide.css('opacity', 1);
                    if (Math.abs(slideProgress) > 3) {
                        slide.css('opacity', 0);
                    }
                }
            },
            setTransition: function (transition) {
                for (var i = 0; i < this.slides.length; i++) {
                    var slide = this.slides.eq(i)
                    slide.transition(transition);
                }

            }
        }

    })

    //BMI判断
    /* var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value; */
    /* 
        var height = parseFloat(prompt('请输入身高(m):'));
        var weight = parseFloat(prompt('请输入体重(kg):')); */
    var bmiBtn = document.getElementById('bmi_btn');
    bmiBtn.onclick = function () {
        var height = document.getElementById('height').value;
        var weight = document.getElementById('weight').value;
        var bmi = weight / height * height;

        var result = document.getElementById('result');
        if (bmi > 32) {
            result.innerHTML = ('严重肥胖');
        } else if (bmi >= 28) {
            result.innerHTML = ('肥胖');
        } else if (bmi >= 25) {
            result.innerHTML = ('过重');
        } else if (bmi >= 18.5) {
            result.innerHTML = ('正常');
        } else {
            result.innerHTML = ('过轻');
        }
        //result.innerHTML = ('BMI指数为：' + bmi.toFixed(2))

    }
}