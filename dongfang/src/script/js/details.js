;
(function($) {
	//点击按钮增加数量
	var $reduce=$('.number .reduce');
	var $add=$('.number .add');
	var $number=$('.number .shuliang');
	var $serweima=$('.sma_erweima');
	var $berweima=$('.big_erweima');
	$reduce.on('click',function(){
		var $num=$number.html();
		if($num>1){
			$num--;
			$number.html($num);
		}
		
	})
	$add.on('click',function(){
		var $num=$number.html();
		if($num>=1){
			$num++;
			$number.html($num);
		}
		
	});
	$serweima.hover(function() {
		$berweima.css('display', 'block');
	},function(){
		$berweima.css('display', 'none');
	});

	//点击加入购物车,获取sid和商品数量,并存入cookie
	var $add_cart=$(".add_cart");
	var sidarr=[];
	var numarr=[];
	//点击前先获取cookie,判断购物车是否有物品
	function getcookievalue(){
		if($.cookie('cartsid')){//cartsid：cookie里面id的名称
			sidarr=$.cookie('cartsid').split(',');//cookie转数组
		}
		
		if($.cookie('cartnum')){//cartnum：cookie里面数量的名称
			numarr=$.cookie('cartnum').split(',');
		}
	}
	$add_cart.on('click',function(){
		var sid=$(this).parents('.particulars_info').find('.spic').attr('sid');//获取点击元素的sid
		getcookievalue()
		if ($.inArray(sid, sidarr)!=-1) {//判断点击对象的sid是否存在于sidarr里面=-1说明不存在 这个方法的返回值是对应的下标
			if($.cookie('cartnum')==''){//此情况是id存在但是商品数量不存在
				var num=parseInt(parseInt($('.number .shuliang').html()));//获取商品数量
				numarr[$.inArray(sid, sidarr)]=num;//添加到对应的位置
				$.cookie('cartnum',numarr.toString(),7);
				//sid也重新添加到对应的位置
				sidarr[$.inArray(sid, sidarr)]=sid;
				$.cookie('cartsid',sidarr.toString(),7)
			}	
				var num=parseInt(numarr[$.inArray(sid, sidarr)])+parseInt($('.number .shuliang').html())
				numarr[$.inArray(sid, sidarr)]=num;
				$.cookie('cartnum',numarr.toString(),7);
		}else{
			 sidarr.push(sid);
			 $.cookie('cartsid',sidarr.toString(),7);
			 numarr.push(parseInt($('.number .shuliang').html()));
			 $.cookie('cartnum',numarr.toString(),7);
			
		}
	})








	var $wrap=$('.particulars_info_left');
	var $spic=$('.spic');
	var $sf=$('.sf');
	var $bpic=$('.bpic');
	var $bf=$('.bf');
	var $picul=$('.picbox ul');
	var $picli=$('.picbox ul li');
	var $left=$('.left_btn');
	var $right=$('.right_btn');

	$spic.hover(function(){
		$bf.css({
			visibility:	'visible',
			display:'block'
		});
		$sf.css('visibility','visible');
		$sf.css({
			width:$spic.width()*$bf.width()/$bpic.width(),
			height:$spic.height()*$bf.height()/$bpic.height()
		});
		var $scale=$bf.width()/$sf.width();
		$(this).on('mousemove',function(ev){
			var $left=ev.pageX-$wrap.offset().left-$sf.width()/2;
			var $top=ev.pageY-$wrap.offset().top-$sf.height()/2;
			if($left<=0){
				$left=0;
			}else if($left>=$spic.width()-$sf.width()){
				$left=$spic.width()-$sf.width();
			}

			if($top<=0){
				$top=0;
			}else if($top>=$spic.height()-$sf.height()){
				$top=$spic.height()-$sf.height();
			}

			$sf.css({
				left:$left,
				top:$top
			});
			$bpic.css({
				left:-$left*$scale,
				top:-$top*$scale
			})
		});
	},function(){
		$bf.css('visibility','hidden');
		$sf.css('visibility','hidden');
	});


	/*$picli.on('mousehover',function(){
		var $url=$(this).find('img').attr('src');
		$spic.find('img').attr('src',$url);
		$bpic.attr('src',$url);
	});*/
	$picli.hover(function(){
		var $url=$(this).find('img').attr('src');
		$spic.find('img').attr({
			src:$url,
			border:'1 soid #333'
		});
		$bpic.attr('src',$url);
	})
	var $num=5;//图片的个数
	var $liwidthlength=$picli.size();//li的个数
	var $liwidth=$picli.eq(0).outerWidth();
	if($liwidthlength<=5){
		$right.css('color','#fff');
	}
	$picul.css('width',$liwidthlength*$liwidth+'px');
	$right.on('click',function(){
		if($liwidthlength>$num){
			$num++;
			$left.css('display','block');
			if($num==$liwidthlength){
				$right.css('display','none');
			}
			$picul.animate({
				left:-($num-5)*$liwidth
			});
		}
	});

	$left.on('click',function(){
		if($num>5){
			$num--;
			$right.css('display','block');
			if($num==5){
				$left.css('display','none');
			}
			$picul.animate({
				left:-($num-5)*$liwidth
			});
		}
	});

})(jQuery);