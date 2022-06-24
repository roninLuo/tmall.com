<?php
  include('./conn.php');

  $uname = $_REQUEST['uname'];

  $password = $_REQUEST['password'];

  $sql1 = "select * from user where uname='$uname' and password='$password'";

  $res = $conn->query($sql1);

  if(!$res->num_rows>0){
    echo '{"message":"登录失败","href":"../src/login.html"}';
    die();
  }else{
    $data = $res->fetch_assoc();
    echo json_encode($data);
  }
?>