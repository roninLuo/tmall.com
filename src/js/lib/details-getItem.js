import $ from './jquery.esm.js';
import myFang from './myBig.js';
import {
  price
} from './details-inner.js';
let fn = function () {
  let id = window.location.search.split('&')[0].split('=')[1];
  $.ajax({
    type: 'get',
    url: '../interface/getitem.php',
    data: {
      id
    },
    dataType: 'json'
  }).then((result) => {
    let picture = JSON.parse(result.picture);
    let template1 = '';
    picture.forEach(element => {
      template1 += `<div>
      <img
        src="../${element.src}"
        alt="">
    </div>`
    });
    $('#side1>.showSide>#imgBox>img').attr('src', '../' + picture[0].src);
    $('#side1>.imgList').html(template1);
    $('#side1>.imgList div').mouseenter(function () {
      let src = $(this).children('img').attr('src');
      $('#side1>.showSide>#imgBox>img').attr('src', src);
      let a = $('#side1>.showSide>#imgBox>img').attr('src');
      myFang('#side1>.showSide>#imgBox', 100, 100, .3, 2, a);
    });

    $("#side2>.title").text(result.title);

    $("#side2>.info3>.price>del").text('¥' + result.price);
    $("#side2>.info3>.price2>div:not('.tip')").html(`<span>¥&nbsp;</span><i style="color: #ff0036;
    font-size: 23px;">${Number(result.price).toFixed(2)}</i>`);
    // 设置按钮 增加数量和增加金额

    // 调用了price插件  因为选择器是复制的,所以特别长
    let up_button = '#detail-body > .wrapper > .detail-info > .left .side2 > .shuliang > div > .count > .button > .up';
    let down_button = '#detail-body > .wrapper > .detail-info > .left .side2 > .shuliang > div > .count > .button > .down';
    let value_input = '#detail-body > .wrapper > .detail-info > .left .side2 > .shuliang > div > .count > input';
    let price_side = '#detail-body > .wrapper > .detail-info > .left .side2 > .info3 .price2 > div>i';
    price(Number(result.price), up_button, down_button,value_input,price_side );


    // 设置跳转购物车的按钮
    let button_shop = $('#detail-body > .wrapper > .detail-info > .left .side2 > .buttons > div > .button2');

    // 将数据存储在localStorage里面
    button_shop.on('click',function(){
      let data = {
        id:result.id,
        num:Number($(value_input).attr('value')),
        timer:Date.now(),
      }
      if(window.localStorage.getItem('arr')){
        let arr = JSON.parse(window.localStorage.getItem('arr'));
        if(arr.some(item=>item.id===data.id)){
          let index = arr.findIndex(item=>item.id===data.id);
          arr[index].num += data.num;
        }else{
          arr.push(data);
        }
        window.localStorage.setItem('arr',JSON.stringify(arr));
      }else{
        let arr = [];
        arr.push(data);
        window.localStorage.setItem('arr',JSON.stringify(arr));
      }
      window.location.href='./purchaseCar.html';
    });
  }).catch((xhr) => {
    console.log(xhr.status);
  });




}


export default fn;