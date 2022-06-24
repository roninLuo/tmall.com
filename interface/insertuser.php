<?php
  include('./conn.php');

  $uname = $_REQUEST['uname'];

  $password = $_REQUEST['password'];

  $sql1 = "select * from user where uname='$uname'";

  $res1 = $conn->query($sql1);

  if($res1->num_rows>0){
    echo '{"message":"注册失败","href":"../src/register.html"}';
    die();
  }

  $sql = "INSERT INTO `user` (`uname`, `password`, `touxiang`) VALUES ('$uname', '$password', './img/touxiang/touxiang1.webp');";


  $res = $conn->query($sql);

  if($res){
    echo '{"message":"注册成功","href":"../src/login.html"}';
    die();
  }
?>