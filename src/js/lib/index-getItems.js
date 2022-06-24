import $ from './jquery.esm.js';
let fn = function(){

 $.ajax({
  type:'get',
  url: "../interface/getItems.php",
  dataType: "json"
 }).then((result) => {

  let tmp = '';
  result.forEach(element => {
    let time2 = Date.now();
    tmp += `<a href="./details.html?id=${element.id}&_${time2}"><figure>
    <img src="../${element.details}" alt="">
    <figcaption>${element.title}</figcaption>
    <p>￥${element.price}</p>
  </figure></a>`;
  });
  tmp += tmp;
  $('#section2>.section2-body').html(tmp);
 }).catch((xhr) => {
  console.log(xhr.status);
 });
}



export default fn;