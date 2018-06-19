<?php 
	require "conn.php";
	$query1=mysql_query("select * from recommend");
	$arrurl=array();
	for($i=0;$i<mysql_num_rows($query1);$i++){//
		$arrurl[$i]=mysql_fetch_array($query1,MYSQL_ASSOC);
	};
	echo json_encode($arrurl);
 ?>