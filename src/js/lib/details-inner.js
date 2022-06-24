import $ from './jquery.esm.js';

let price = function(jishu,up1,down1,value1,price1){
  // '#detail-body > .wrapper > .detail-info > .left .side2 > .shuliang > div > .count > .button > .up'
    let up = $(up1);
    // '#detail-body > .wrapper > .detail-info > .left .side2 > .shuliang > div > .count > .button > .down'
  let down = $(down1);
  // '#detail-body > .wrapper > .detail-info > .left .side2 > .shuliang > div > .count > input'
  let value = $(value1);
  // '#detail-body > .wrapper > .detail-info > .left .side2 > .info3 .price2 > div>i'
  let price = $(price1);
  
  // 自动增长;
  up.on('click',function(){
    let val = value.attr('value');
  
    value.attr('value',Number(val)+1);
    // price.text = 
    price.text((jishu*Number(value.attr('value'))).toFixed(2));
  });
  
  // 自动减少
  down.on('click',function(){
    let val = value.attr('value');
    if(val==='1') return null;
    value.attr('value',val-1);
    price.text((jishu*Number(value.attr('value'))).toFixed(2));
  });
}

export {price};