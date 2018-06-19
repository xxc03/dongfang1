<?php 
	require "conn.php";
/*	$query1=mysql_query("select * from banner");
	$arrurl=array();
	for($i=0;$i<mysql_num_rows($query1);$i++){//
		$arrurl[$i]=mysql_fetch_array($query1,MYSQL_ASSOC);
	};
	echo json_encode($arrurl);*/

	//banner图的数据输出
	$bigbanner=mysql_query("select * from banner");
	$bigbanner_pic=array();
	for($i=0;$i<mysql_num_rows($bigbanner);$i++){
		$bigbanner_pic[$i]=mysql_fetch_array($bigbanner,MYSQLI_ASSOC);
	}

	//主播推荐的数据输出
	$query1=mysql_query("select * from recommend");
	$recommend_pic=array();
	for($i=0;$i<mysql_num_rows($query1);$i++){//
		$recommend_pic[$i]=mysql_fetch_array($query1,MYSQL_ASSOC);
	};
	//商品信息的数据接口
	$commodity=mysql_query("select * from piclist");
	$commodity_info=array();
	for($i=0;$i<mysql_num_rows($commodity);$i++){//
		$commodity_info[$i]=mysql_fetch_array($commodity,MYSQL_ASSOC);
	};

	//店铺的商品信息
	$shop=mysql_query("select * from shoplist");
	$shop_info=array();
	for($i=0;$i<mysql_num_rows($shop);$i++){//
		$shop_info[$i]=mysql_fetch_array($shop,MYSQL_ASSOC);
	};
	//店铺的商品信息
	$smallbanner=mysql_query("select * from smallbanner");
	$smallbanner_pic=array();
	for($i=0;$i<mysql_num_rows($smallbanner);$i++){//
		$smallbanner_pic[$i]=mysql_fetch_array($smallbanner,MYSQL_ASSOC);
	};
	//首页数据接口
	class indexdata{

	}
	$index=new indexdata();
	$index->lunbo=$bigbanner_pic;
	$index->recommend=$recommend_pic;
	$index->commodity=$commodity_info;
	$index->shop=$shop_info;
	$index->smallbanner=$smallbanner_pic;

	echo json_encode($index);
?>
