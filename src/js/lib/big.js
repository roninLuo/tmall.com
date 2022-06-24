
//window.onload 之后图片才加载完，才能获取宽高
var fangda = function (mainId, boxWidth, boxHeight, bgcolor, opacity, multiple, imgsrc) {
  //获取主容器
  var main = document.getElementById(mainId);
  //获取图片
  var img = main.getElementsByTagName('img')[0];
  //获取图片宽高，设置给其父容器
  var imgW = img.offsetWidth;
  var imgH = img.offsetHeight;
  main.style.width = imgW + 'px';
  main.style.height = imgH + 'px';
  main.style.position = 'relative';
  //hidden为了后面的方块在鼠标移出后消失
  main.style.overflow = 'hidden';
  //动态创建放大的小方块，设置属性，并且添加到main内
  var box = document.createElement("div");
  box.style.width = boxWidth + 'px';
  box.style.height = boxHeight + 'px';
  box.style.backgroundColor = bgcolor;
  box.style.opacity = opacity;
  //设置绝对定位时，要想起来给其父容器设置相对定位
  box.style.position = 'absolute';
  box.style.top = 0;
  box.style.left = 0;
  box.style.cursor = 'move';
  //none是为了一开始隐藏，鼠标移入main再显示
  box.style.display = 'none';
  main.appendChild(box);




  //给main添加鼠标移入事件
  //移入显示box
  main.onmouseover = function () {
    box.style.display = 'block';
    showBox.style.display = 'block';
    showBox.style.zIndex = 999;
  }
  //移出隐藏box
  main.onmouseout = function () {
    box.style.display = 'none';
    showBox.style.display = 'none';
    showBox.style.zIndex = -999;
  }
  //设置main的鼠标移动事件，带着box走
  //提前获取一些值
  //获取main距离左边与顶部的距离
  var mainL = main.offsetLeft;
  var mainT = main.offsetTop;
  //获取main和box的宽高;
  var mainW = main.offsetWidth;
  var mainH = main.offsetHeight;
  //getComputedStyle(box).width获取到的是带有单位px的值，需要转化为整数
  var boxW = parseInt(getComputedStyle(box).width);
  var boxH = parseInt(getComputedStyle(box).height);

  //动态创建显示的容器以及其内的图片,为了使用mainL等已经获取的值
  //并且设置其属性
  var showBox = document.createElement("div");
  showBox.style.width = boxWidth * multiple + 'px';
  showBox.style.height = boxHeight * multiple + 'px';
  showBox.style.position = 'fixed';
  showBox.style.left = (mainL + mainW + 5) + 'px';
  showBox.style.top = mainT + 'px';
  showBox.style.overflow = 'hidden';
  showBox.style.display = 'none';
  showBox.style.zIndex = -999;
  //创建图片
  var showImg = document.createElement("img");
  if (imgsrc == '') {
    showImg.src = img.src;
  } else {
    showImg.src = imgsrc;
  }

  showImg.style.width = imgW * multiple + 'px';
  showImg.style.height = imgH * multiple + 'px';
  showImg.style.position = 'absolute';
  //把图片添加到showBox内，
  showBox.appendChild(showImg);
  //再把showBox添加到body内
  document.getElementsByTagName('body')[0].appendChild(showBox)

  main.onmousemove = function (event) {
    //获取鼠标位置
    var x = event.pageX;
    var y = event.pageY;
    //把获取box的宽高放在显示之后才能获取到，若想在之前获取，用getComputedStyle(box).width
    var boxW = box.offsetWidth;
    var boxH = box.offsetHeight;

    //对box的left和top进行赋值
    //赋值前进行判断。让box不能超出main范围
    var left = x - mainL - boxW / 2;
    var top = y - mainT - boxH / 2;

    console.log(left, top);
    if (left <= 0) {
      left = 0;
    }
    if (top <= 0) {
      top = 0;
    }
    if (left >= mainW - boxW) {
      left = mainW - boxW;
    }
    if (top >= mainH - boxH) {
      top = mainH - boxH;
    }
    box.style.left = left + 'px';
    box.style.top = top + 'px';
    //根据放大倍数设置showImg的位置
    showImg.style.left = -left * multiple + 'px'
    showImg.style.top = -top * multiple + 'px';
  }
}

export default fangda;