<?php 

	require "conn.php";

	$id=$_GET['sid'];
	/*$result=mysql_query("select * from piclist where sid=$id");
	$pic_id=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$pic_id[$i]=mysql_fetch_array($result,MYSQLI_ASSOC);
	}
	echo json_encode($pic_id);*/
	$result=mysql_query("select * from piclist where sid='$id'");
	echo json_encode(mysql_fetch_array($result,MYSQLI_ASSOC))
?>