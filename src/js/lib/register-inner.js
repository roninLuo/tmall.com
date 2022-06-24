import $ from './jquery.esm.js'
let reg = function(){
  

  // let root = $("#root").val();
  // let password = $("#password").val();
  $("#login-body .wrapper .login-body-side .checkbox > input[type='checkbox']").on('click',function(){

    $("#login-body .wrapper .login-body-side .button button").prop('disabled',!$(this).prop('checked'));

  });

  $("#login-body .wrapper .login-body-side .button button").on('click',function(){
    let uname = $("#root").val();
    let password = $("#password").val();
    $.ajax({
      type:'get',
      url:"../interface/insertuser.php",
      data:{
        uname,
        password,
      },
      dataType:'json',
    }).then((result) => {
      console.log(typeof result);
      alert(result.message);
      window.location.href =result.href;
    }).catch((xhr) => {
      console.log(xhr.status);
    });
  });
}

export {reg};