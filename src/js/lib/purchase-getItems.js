import $ from './jquery.esm.js';

let myPurchase = function () {
  let data = JSON.parse(localStorage.getItem('arr'));
  console.log(data);
  let str_arr = data.reduce(function (arr, current) {
    arr.push(current.id);
    return arr;
  }, []);

  let request_data = str_arr.join();
  $.ajax({
    type: 'get',
    url: '../interface/getItems2.php',
    data: {
      ids: request_data,
    },
    dataType: 'json',
  }).then((res) => {
    let template3 = '';
    res.forEach(element => {
      let current = data.find(el => el.id == element.id);
      console.log(current);
      template3 += `<div class="product">
      <div class="side1">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tianmao-"></use>
        </svg>
        <span><strong>店铺&nbsp;:&nbsp;</strong>钥亚化妆品专营店</span>
        <svg class="icon" aria-hidden="true" style="color:skyblue;">
          <use xlink:href="#icon-aliwangwang-fill"></use>
        </svg>
      </div>
      <div class="side2">
        <div class="title">
          <div class="youhui">跨店满减</div>
          <div class="content">每满300减50,可跨店</div>
        </div>
        <div class="product-info">
          <input type="checkbox">
          <div class="imgSide">
            <img
              src="../${element.details}"
              alt="">
            <div class="showBox">
              <img
                src="../${element.details}"
                alt="">
            </div>
            <div class="arrow">
              <em></em>
              <i></i>
            </div>
          </div>
          <div class="product-info-inner">
            <div class="topContent"><a href="#">${element.title}</a></div>
            <div class="bottomContent">
              <a href="#"><img src="https://assets.alicdn.com/sys/common/icon/trade/xcard.png" alt=""></a>
              <a href="#"><img src="https://img.alicdn.com/tps/i3/T1Vyl6FCBlXXaSQP_X-16-16.png" alt=""></a>
              <a href="#"><img src="https://img.alicdn.com/tps/i4/T1BCidFrNlXXaSQP_X-16-16.png" alt=""></a>
            </div>
          </div>
          <div class="size">
            <p>
              净含量&nbsp;:&nbsp;150g
            </p>
          </div>
          <div class="price">
            <p>
              <del>￥${Number(element.price).toFixed(2)}</del>
            </p>
            <p>
              <span>￥${Number(element.price).toFixed(2)}</span>
            </p>
            <div>
              <span>卖家降价</span>
              <i class="iconfont icon-xiala"></i>
              <div>
                <p>卖家降价:品牌促销</p>
                <p>优惠:￥8.10</p>
                <p>比加入购物车时,又优惠了￥1.00</p>
              </div>
            </div>
          </div>
          <div class="count">
            <button class="reduce" my_data_id="${element.id}" myPrice="${element.price}">-</button>
            <input type="text" placeholder="1" value="${current.num}">
            <button class="add" my_data_id="${element.id}" myPrice="${element.price}">+</button>
          </div>
          <div class="total">￥<span>${(Number(element.price)*current.num).toFixed(2)}</span></div>
          <div class="caozuo">
            <p><a href="#">移入收藏夹</a></p>
            <p><a href="#" my_data_id="${element.id}">删除</a></p>
          </div>
        </div>
      </div>
    </div>`;

    });
    $('#purchaseCar-body > .wrapper  .purchaseBody-body > .bottom').html(template3);

    // 写一个方法，计算点击的所有的checkbox的数量
    let count_checkbox = function () {
      let a = $("#purchaseCar-body > .wrapper > .purchaseBody > .purchaseBody-body > .bottom > .product > .side2 .product-info > input[type='checkbox']");
      let count = 0;
      let total = 0;
      $.each(a, function (i) {
        if ($(a[i]).prop('checked') === true) {
          count++;

          let a = $(this).parent();
          let b = a.children(".total").text();
          let price = b.split('￥')[1];
          total += Number(price);
        }
      });
      if (count !== a.length) {
        $("#purchaseCar-body .top > .left > input[type='checkbox'] ").prop('checked', false);
        $("#purchaseCar-body  .purchaseBody > .purchaseBody-bottom > .left > input[type='checkbox']").prop('checked', false);
      } else {
        $("#purchaseCar-body .top > .left > input[type='checkbox'] ").prop('checked', true);
        $("#purchaseCar-body  .purchaseBody > .purchaseBody-bottom > .left > input[type='checkbox']").prop('checked', true);
      }

      // 设置商品的个数
      $("#purchaseCar-body > .wrapper > .purchaseBody > .purchaseBody-top > .left > p > span").text(count);
      $("#purchaseCar-body > .wrapper > .purchaseBody > .purchaseBody-bottom > .right > span:nth-child(1) > strong").text(count);

      $("#purchaseCar-body > .wrapper > .purchaseBody > .purchaseBody-top .right > p .price").text(total.toFixed(2));
      $("#purchaseCar-body > .wrapper > .purchaseBody > .purchaseBody-bottom > .right > span:nth-child(2) > strong").text(total.toFixed(2));
      return count;
    }

    // 设置点击事件 ，然后计算金额
    // 获取商品所在父元素的容器
    let parent_element = $('#purchaseCar-body > .wrapper > .purchaseBody');


    // .on('click',function(){
    //   console.log(1);
    // });

    console.log(1);


    // 给该元素设置点击事件，委派给她下面的子元素
    parent_element.on('click', " .bottom > .product > .side2 .product-info > input[type='checkbox']", function () {
      count_checkbox();

    });

    // 上面的全选框
    parent_element.on('click', " .top > .left > input[type='checkbox']", function () {
      $(".bottom > .product > .side2 .product-info > input[type='checkbox']").prop('checked', $(this).prop('checked'));
      count_checkbox();
    });
    // 下面的全选框
    parent_element.on('click', " > .purchaseBody-bottom > .left > input[type='checkbox']", function () {
      $(".bottom > .product > .side2 .product-info > input[type='checkbox']").prop('checked', $(this).prop('checked'));
      count_checkbox();
    });

    // 删除功能
    parent_element.on('click', ".purchaseBody-body > .bottom > .product > .side2 .product-info > .caozuo > p > a", function () {
      let arr = JSON.parse(window.localStorage.getItem('arr'));
      let id = $(this).attr("my_data_id");
      console.log(id);
      // count_checkbox();
      arr = arr.filter(el => {
        return el.id !== id;
      });
      window.localStorage.setItem('arr', JSON.stringify(arr));
      window.location.reload();
    });


    // 全选删除
   $("#purchaseCar-body > .wrapper > .purchaseBody > .purchaseBody-bottom > .left > span:nth-child(3)").on('click',function(){
    if($("#purchaseCar-body > .wrapper > .purchaseBody > .purchaseBody-bottom > .left > input").prop('checked')){
      let arr = [];
      window.localStorage.setItem('arr',JSON.stringify(arr));
      window.location.reload();
    }else{
      return null;
    }
   });


    // 增加功能
    parent_element.on('click', '.bottom > .product > .side2 .product-info > .count > .reduce', function () {
      let id = $(this).attr("my_data_id");
      let price = $(this).attr("myPrice");
      let arr = JSON.parse(window.localStorage.getItem('arr'));
      let index = arr.findIndex(item => item.id === id);
      if (arr[index].num === 1) {
        return null
      } else {
        arr[index].num -= 1;
      }
      $(this).parent().parent().children(".total").html(`￥<span>${Number(price)*arr[index].num}</span>`);
      $(this).parent().parent().children(".count").children("input").attr('value', arr[index].num);

      window.localStorage.setItem('arr', JSON.stringify(arr));
      count_checkbox();
    });
    parent_element.on('click', '.bottom > .product > .side2 .product-info > .count > .add', function () {
      let id = $(this).attr("my_data_id");
      let price = $(this).attr("myPrice");
      let arr = JSON.parse(window.localStorage.getItem('arr'));
      let index = arr.findIndex(item => item.id === id);

      arr[index].num += 1;

      $(this).parent().parent().children(".total").html(`￥<span>${(Number(price)*arr[index].num).toFixed(2)}</span>`);
      $(this).parent().parent().children(".count").children("input").attr('value', arr[index].num);

      window.localStorage.setItem('arr', JSON.stringify(arr));
      count_checkbox();
    });
    // 减少功能
  }).catch((xhr) => {
    console.log(xhr.status);
  });;

}

export {
  myPurchase
};