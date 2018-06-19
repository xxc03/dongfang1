;(function(){
	//封装根据cookie值,创建商品列表的函数
	function createcart(sid, num) {//sid：图片的编号  num:商品的数量
    $.ajax({
        url: '../../php/details.php',
        data:{
            sid:sid
        },
        dataType: 'json'
    }).done(function(cartdata) {
       /* for (var i = 0; i < 2; i++) {*/
            if (sid == cartdata.sid) {//图片的sid和数据里面的sid匹配
                var $clonelist = $('.commodity_box:hidden').clone(true);//对隐藏的模块进行克隆
                //都是赋值
                $clonelist.find('.pic').find('img').attr('src', cartdata.url.split(',')[0]);
                $clonelist.find('.pic').find('img').attr('sid', cartdata.sid);
                $clonelist.find('.commodity_name').find('a').html(cartdata.title);
                $clonelist.find('.unit_price').find('i').html(cartdata.price);
                $clonelist.find('.total_prices').find('i').html(cartdata.price*num);
                $clonelist.find('.shuliang').html(num);
                //计算价格,每个商品的价格
                var $dj1 = parseFloat($clonelist.find('.unit_price i').html());//获取单价
                $clonelist.find('.total_prices i').html(($dj1*num).toFixed(2));//num：数量
                $('.has_commodity').css('display', 'block');
                $clonelist.css('display', 'block');//克隆的模块是隐藏，显示出来。
                $('.has_commodity .cangku .commodity_list').append($clonelist);//追加
                //$('.has_commodity').eq(2).css('display', 'none')
                kong();//购物车是否为空
                totalprice();//总价和总数
            }
        //}
    });
}

var sidarr = [];
var numarr = [];
function cookieToArray(){
    if($.cookie('cartsid')){
        sidarr=$.cookie('cartsid').split(',');
    }
    
    if($.cookie('cartnum')){
        numarr=$.cookie('cartnum').split(',');
    }
}
	//1.页面加载检测购物车(cookie里面)是否有数据，有的话创建商品列表
	if ($.cookie('cartsid') && $.cookie('cartnum')) {
	    var s = $.cookie('cartsid').split(',');//存放sid数组
	    var n = $.cookie('cartnum').split(',');//存放数量数组
	    for (var i = 0; i < s.length; i++) {
	        createcart(s[i], n[i]);//遍历创建商品列表
	    }
	}
	//2.商品列表(cookie)不存在，购物车为空
	kong();
	function kong() {
	    if ($.cookie('cartsid')) {//cookie存在，有商品，购物车不再为空
	        $('.cart_content').hide();
	    } else {
	        $('.cart_content').show();
	    }
	}
	//改变商品数量
/*	var $reduce=$('.commodity_box .cols4 .reduce');
	var $add=$('.commodity_box .cols4 .add');
	var $number=$('.commodity_box .cols4 .shuliang');
	var $unit_price=$('.commodity_box .cols3 .unit_price i');
	var $total_prices=$('.commodity_box .cols5 .total_prices i');
    console.log($unit_price.html())
	$reduce.on('click',function(){
		var $num=parseInt($number.html());
		var $jiaqian=parseInt($unit_price.html());
		var $zongjia=parseInt($total_prices.html());

		if($num>1){
			$num--;
			$number.html($num);
			$total_prices.html($zongjia-$jiaqian);
			totalprice();
   			 setcookie($(this));
		}		
	})
	$add.on('click',function(){
		var $num=parseInt($number.html());
		var $jiaqian=parseInt($unit_price.html());
		if($num>=1){
			$num++;
			$number.html($num);
			$total_prices.html($num*$jiaqian);
			totalprice();
    		setcookie($(this));
		}
		
	});*/
//6.修改数量的操作
//改变商品数量++

    $('.commodity_box .cols4 .add').on('click', function() {

    var $count = $(this).parents('.cols4').find('.shuliang').html();
    $count++;
    if ($count >= 99) {
        $count = 99;
    }
    $(this).parents('.cols4').find('.shuliang').html($count);

    $(this).parents('.commodity_box').find('.cols5').find('i').html(singlegoodsprice($(this)));//改变后的价格
    
    totalprice();
    setcookie($(this));
});


//改变商品数量--
$('.commodity_box .cols4 .reduce').on('click', function(ev) {
    console.log($(this))
   var $count = $(this).parents('.cols4').find('.shuliang').html();
    $count--;
    if ($count <= 1) {
        $count = 1;
    }
    $(this).parents('.cols4').find('.shuliang').html($count);
    $(this).parents('.commodity_box').find('.cols5').find('i').html(singlegoodsprice($(this)));//改变后的价格
    totalprice();
    setcookie($(this));
});

//5.每个商品的总价已经通过创建时求得了。求所有商品的总价和总的商品的个数
function totalprice() {//计算总价
    var total = 0;//总的价格
    var countnum = 0;//总的数量
    $('.commodity_box:visible').each(function() {//可视的商品列表进行遍历，循环叠加
        if ($(this).find('input:checkbox').is(':checked')) {//商品的复选框是选中的
            total += parseFloat($(this).find('.total_prices i').html());
            countnum += parseInt($(this).find('.shuliang').html());
        }
    });
    //赋值
    $('.price_num').html('￥' + total.toFixed(2));
    $('.commodity_num_price b').html(countnum);
}



	
//7.计算数量改变后单个商品的价格
function singlegoodsprice(row) { //row:当前元素
    var $dj = parseFloat(row.parents('.commodity_box').find('.unit_price').find('i').html());

    console.log(row.parents('.commodity_box').find('.unit_price').find('i'))

    var $cnum = parseInt(row.parents('.commodity_box').find('.shuliang').html());
    return ($dj * $cnum).toFixed(2);
}

//9.将改变后的数量的值存放到cookie
function setcookie(obj) { //obj:当前操作的对象
    cookieToArray();
    var $index = obj.parents('.has_commodity').find('img').attr('sid');
    numarr[sidarr.indexOf($index)] = obj.parents('.has_commodity').find('.shuliang').html()
    $.cookie('cartnum', numarr.toString(), 7);
}


//8.全选
$('.checkall_btn').on('change', function() {
    $('.commodity_box').find('input:checkbox').prop('checked', $(this).prop('checked'));
    totalprice();//求和
});

var $inputchecked = $('.commodity_box:visible').find('input:checkbox').not('.checkall_btn');//获取委托元素
$('.cart_main').on('change', $inputchecked, function() {
    var $inputs = $('.commodity_box:visible').find('input:checkbox').not('.checkall_btn'); //放内部
    if ($('.commodity_box:visible').find('input:checked').not('.checkall_btn').length == $inputs.size()) {
        $('.checkall_btn').prop('checked', true);
    } else {
        $('.checkall_btn').prop('checked', false);
    }
    totalprice();
});

//10.删除
//删除cookie的函数
function delgoodslist(sid, sidarr) {//sid：当前的sid，sidarr:cookie的sid的值
    var index = -1;
    for (var i = 0; i < sidarr.length; i++) {
        if (sid == sidarr[i]) {
            index = i;
        }
    }
    sidarr.splice(index, 1);//删除数组对应的值
    numarr.splice(index, 1);//删除数组对应的值
    $.cookie('cartsid', sidarr.toString(), 7);//添加cookie
    $.cookie('cartnum', numarr.toString(), 7);
}

//删除单个商品的函数(委托)
$('.cart_main').on('click', '.del_btn .del', function(ev) {
    cookieToArray(); //转数组
   if(confirm('你确定要删除吗？')){
   	 $(this).first().parents('.commodity_box').remove();
   }
    delgoodslist($(this).first().parents('.commodity_box').find('img').attr('sid'), sidarr);
    kong();
    totalprice();
});

//删除全部商品的函数
$('.jiesuan .delete_together').on('click', function() {
    cookieToArray()
    $('.commodity_box:visible').each(function() {
        if ($(this).find('input:checkbox').is(':checked')) {
            $(this).remove();
            delgoodslist($(this).find('img').attr('sid'), sidarr);
        }
    });
    totalprice();
});
//清空购物车
$('.jiesuan .empty_cart').on('click', function() {
    cookieToArray()
   if(confirm('你确定要清空吗？')){
     $(this).parents('.has_commodity').hide();
   }
   delgoodslist($(this).first().parents('.commodity_box').find('img').attr('sid'), sidarr);
});



















	

})()