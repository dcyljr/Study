window.onload = function () {
    const container = document.getElementById('container')
    const pics = document.getElementsByClassName('pics')[0];
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const buttons = document.getElementsByClassName('button');
    let index = 0;

    // button相关
    for (let index = 0; index < buttons.length; index++) {
        buttons[index].addEventListener('click', function () {
            buttonsShow(index)
        }, false);
    }

    function buttonsShow(_index = index) {
        for (var i = 0; i < buttons.length; i++) {
            if (Array.from(buttons[i].classList).includes('on')) {
                buttons[i].classList.remove('on');
            }
        }
        buttons[_index].classList.add('on');
        animate(_index * (-1100), false);
    }

    //播放相关
    function play() {
        timer = setInterval(function () {
            // animate(-600, true);
            next.onclick();
        }, 4000);
    }

    function stop() {
        clearInterval(timer);
    }

    //动画相关
    function animate(offset, isRelative) {
        if (isRelative) {
            if (!pics.style.left) {
                var oldoffset = 0;
                var newoffset = oldoffset + offset;
            } else {
                var newoffset = parseInt(pics.style.left) + offset;
            }
            pics.style.left = newoffset + 'px';

            if (newoffset == 1100) {
                pics.style.left = -2200 + 'px';
            }
            if (newoffset == -3300) {
                pics.style.left = 0 + 'px';
            }
        } else {
            pics.style.left = offset + 'px';
        }
    }

    //前进后退键相关
    prev.onclick = function () {
        animate(-1100, true);
        if (index == 2) {
            index = 0;
        } else {
            index = index + 1;
        }
        buttonsShow();
    }
    next.onclick = function () {
        animate(1100, true);
        if (index == 0) {
            index = 2;
        } else {
            index = index - 1;
        }
        buttonsShow();
    }
    container.addEventListener('mouseover', function () {
        console.log('in');
        prev.style.display = 'block';
        next.style.display = 'block';
        stop();
    }, true)

    container.addEventListener('mouseout', function () {
        prev.style.display = 'none';
        next.style.display = 'none';
        play();
    }, true)

    play();
}