window.onload = function () {
    var arrowLeft = document.getElementById("arrow-left");
    var arrowRight = document.getElementById("arrow-right");
    var multiImages = document.getElementById("multi-images");
    var circles = document.getElementById("multi-circles").getElementsByTagName("li");
    var box = document.getElementById("box");
    var currentIndex = 0;
    var preIndex = 0;
    var timer = null;

    arrowLeft.addEventListener("click", preMove);
    arrowRight.addEventListener("click", nextMove);
    for (let i = 0; i < circles.length; i++) {
        circles[i].setAttribute("id", i);
        circles[i].addEventListener("mouseenter", overCircle);
    }
    /* timer = setInterval(nextMove, 2000); */
    box.addEventListener("mouseover", function () {
        /* clearInterval(timer); */
        arrowLeft.style.display = "block";
        arrowRight.style.display = "block";
    });
    box.addEventListener("mouseout", function () {
        /* timer = setInterval(nextMove, 2000); */
        arrowLeft.style.display = "none";
        arrowRight.style.display = "none";
    });
    changeCircleColor(preIndex, currentIndex);



    function overCircle() {
        preIndex = currentIndex;
        currentIndex = parseInt(this.id);
        // multiImages.style.transition="1.5s";
        changeCircleColor(preIndex, currentIndex);
        moveImage();
    }

    function changeCircleColor(preIndex, currentIndex) {
        circles[preIndex].style.border = "none";
        circles[currentIndex].style.border = "1px solid red";
    }

    function preMove() {
        preIndex = currentIndex;
        if (currentIndex != 0) {
            currentIndex--;
            // multiImages.style.transition="1s";
        } else {
            currentIndex = 4;
            // multiImages.style.transition="0.5s";
        }
        changeCircleColor(preIndex, currentIndex);
        moveImage();
    }

    function nextMove() {
        preIndex = currentIndex;
        if (currentIndex != 4) {
            currentIndex++;
            // multiImages.style.transition="1s";
        } else {
            currentIndex = 0;
            // multiImages.style.transition="0.5s";
        }
        changeCircleColor(preIndex, currentIndex);
        moveImage();
    }

    function moveImage() {
        multiImages.style.left = -currentIndex * 400 + "px";
    }

    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var moveBox = document.getElementById("move_box_tab");
    var count = moveBox.children.length;
    var clickCount = 1;
    moveBox.innerHTML += moveBox.children[0].outerHTML;
    moveBox.innerHTML = moveBox.children[count - 1].outerHTML + moveBox.innerHTML;
    var width = parseInt(moveBox.children[0].style.width);
    moveBox.style.marginLeft = "-" + width + "px";
    moveBox.style.width = width * moveBox.children.length + "px";
    var flag = true;
    prev.onclick = function () {
        if (flag) {
            flag = false;
            var left = parseFloat(moveBox.style.marginLeft);
            clickCount--;
            var interval = setInterval(function () {
                left += 21;
                if (left >= -(width * clickCount)) {
                    if (clickCount == 0) {
                        clickCount = count;
                        left = -width * count;
                    } else {
                        left = -(width * clickCount);
                    }
                    moveBox.style.marginLeft = left + "px";
                    clearInterval(interval);
                    flag = true;
                } else {
                    moveBox.style.marginLeft = left + "px";
                }
            });
        }
    };
    next.onclick = function () {
        if (flag) {
            flag = false;
            var left = parseFloat(moveBox.style.marginLeft);
            clickCount++;
            var interval = setInterval(function () {
                left -= 21;
                if (left <= -(width * clickCount)) {
                    if (clickCount == count + 1) {
                        clickCount = 1;
                        left = "-" + width;
                    } else {
                        left = -(width * clickCount);
                    }
                    moveBox.style.marginLeft = left + "px";
                    clearInterval(interval);
                    flag = true;
                } else {
                    moveBox.style.marginLeft = left + "px";
                }
            });
        }
    };
    /* var touch = document.getElementById('touch');
    var cliclBtn = document.getElementById('clibtn');
    var moveBtn = cliclBtn.querySelectorAll('.move_btn');
    touch.onmouseover = function () {
        for (var i = 0; i < moveBtn.length; i++) {
            moveBtn[i].style.display = 'block';
        }
    }
    touch.onmouseout = function () {
        for (var z = 0; z < moveBtn.length; z++) {
            moveBtn[z].style.display = 'none';
        }
    } */
}