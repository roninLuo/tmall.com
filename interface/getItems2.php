<?php
  include('./conn.php');
  $ids = $_REQUEST['ids'];
  $sql = "select * from product where id in($ids)";

  $res = $conn->query($sql);

  $arr = [];

  while($row = $res->fetch_assoc()){
    array_push($arr,$row);
  }

  echo json_encode($arr);
?>