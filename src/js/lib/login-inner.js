import $ from './jquery.esm.js';

let my_login_check = function(){
  $("#reg-banner > .wrapper > .reg-body .reg-body-middle .reg-body-middle-input .submit").prop('disabled',true);

  
  $("#reg-banner > .wrapper > .reg-body .reg-body-middle .reg-body-middle-input .submit").on('click',function(){
    let uname = $("#reg-banner > .wrapper > .reg-body .reg-body-middle .reg-body-middle-input > div:nth-child(1) > input").val();
    let password = $("#reg-banner > .wrapper > .reg-body .reg-body-middle .reg-body-middle-input > div:nth-child(2) > input").val();
  
    console.log(uname,password);


    $.ajax({
      type:'get',
      url:'../interface/getuser.php',
      data:{
        uname,
        password,
      },
      dataType:'json',
    }).then((result) => {
      console.log(typeof result);
      console.log(result);
     if(result.message){
      alert(result.message);
     }else{
      window.localStorage.setItem('person',JSON.stringify(result));
      window.location.href = '../src/index2.html';
     }
    }).catch((xhr) => {
      console.log(xhr.status);
    });;

  });
}

export {my_login_check};