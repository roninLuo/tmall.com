import $ from './jquery.esm.js';

let myFang = function (imgBox, shadowW, shadowH, opacity, size, imgSrc) {
  // 首先获取图片的大小
  let main = $(imgBox);
  main.css({
    position: "relative",
  });

  let img = $(imgBox).children('img');

  // 获取图片的大小
  let imgH = $(img).height();
  let imgW = $(img).width();

  let shadow = document.createElement('div');
  $(shadow).height(100);
  $(shadow).width(100);
  $(shadow).attr('id', 'shadow');
  $(shadow).css({
    'background': 'url(https://img-tmdetail.alicdn.com/tps/i4/T12pdtXaldXXXXXXXX-2-2.png)',
    opacity: opacity,
    backgroundColor: 'yellow',
    position: "absolute",
    display: 'none',
  });


  let showImg = document.createElement('div');
  $(showImg).height(shadowH * size);
  $(showImg).width(shadowW * size);
  $(showImg).attr('id', 'showImg');
  $(showImg).css({
    'backgroundImage': `url(${imgSrc})`,
    'backgroundSize': `${imgW*size}px ${imgH*size}px`,
    border: '1px solid black',
    position: "absolute",
    display: 'none',
    top: '0px',
    left: main.width() + 10 + 'px',
  });

  $('#shadow').remove();
  $('#showImg').remove();

  main.append(shadow);
  main.append(showImg);

  // if (!main.children('#shadow')) {
  // };
  // if (!main.children('#showImg')) {
  // };

  main.mouseover(function () {
    main.children('#shadow').css({
      display: 'block',
      'zIndex': 999,
    });
    main.children('#showImg').css({
      display: 'block',
      'zIndex': 999,
    });
  });

  main.mouseout(function () {
    main.children('#shadow').css({
      display: 'none',
      'zIndex': 999,
    });
    main.children('#showImg').css({
      display: 'none',
      'zIndex': 999,
    });
  });




  // 获取鼠标的位置

  main.mousemove(function (e) {

    // 获取距离父元素的顶部和左边的距离
    let mainL = main.offset().left;
    let mainT = main.offset().top;

    // 获取 main的宽高
    let mainH = main[0].offsetHeight;
    let mainW = main[0].offsetWidth;

    let currentX = e.pageX - mainL;
    let currentY = e.pageY - mainT;
    let zuobiao = {
      x: 0,
      y: 0
    };

    if (currentX < $(shadow)[0].offsetWidth / 2) {
      zuobiao.x = 0;
    } else if (currentX > mainW - $(shadow)[0].offsetWidth / 2) {
      zuobiao.x = mainW - $(shadow)[0].offsetWidth;
    } else {
      zuobiao.x = currentX - $(shadow)[0].offsetWidth / 2;
    }


    if (currentY < $(shadow)[0].offsetHeight / 2) {
      zuobiao.y = 0;
    } else if (currentY > mainH - $(shadow)[0].offsetHeight / 2) {
      zuobiao.y = mainH - $(shadow)[0].offsetHeight;
    } else {
      zuobiao.y = currentY - $(shadow)[0].offsetHeight / 2;
    }

    main.children('#shadow').css({
      left: zuobiao.x + 'px',
      top: zuobiao.y + 'px',
    });
    // console.log(currentX,currentY);
    main.children('#showImg').css({
      'backgroundPosition': `-${zuobiao.x*size}px -${zuobiao.y*size}px`
    });
  });
}
// 参数   图片大小  大小  .5  2  
// myFang('.demo2', 100, 100, .5, 2, './img/img2/3/mainImg.jpg');

export default myFang;