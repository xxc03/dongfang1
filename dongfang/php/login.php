<?php 

	require "conn.php";
	if(isset($_POST['user'])){
		$username=$_POST['user'];
		$password=md5($_POST['pass']);		
	}
	$result=mysql_query("select * from user where username='$username' and password='$password'");
	if(mysql_fetch_array($result)){
		echo true;
	}else{
		echo false;
	} 
?>