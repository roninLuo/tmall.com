import $ from './jquery.esm.js';

let check = function(){
  console.log(1);
  let data = window.localStorage.getItem('person');
  let person = JSON.parse(data);
  console.log(data,person);
  if(data==='{}'){
    return null;
  }else{
    $("#header .header-nav .left #uname").html(`<a href="#">${person.uname}，欢迎来天猫</a>`);
    $("#header .header-nav .left #display").css({
      display:'none',
    });
    $("#main #section1 .contentSide .contentRight .contentRight-right #img123").attr('src',person.touxiang)
    $("#main #section1 .contentSide .contentRight .contentRight-right #img123").attr('height','80px');
    $("#main #section1 .contentSide .contentRight .contentRight-right #img123").attr('width','80px');
  }
}

// check();
export default check;