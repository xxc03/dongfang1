define(['jquery'],function(jQuery){
        var $louti=$('.loutibanner');
        var $btnli = $('.lt_circle_btn li');
        var $piclist=$('.banner_pic div');
        var num = 0; //当前点击的索引
        var timer = null;
        var $piclilength = $btnli.size();
        //楼梯的轮播
        $louti.hover(function() {
            clearInterval(timer);
        }, function() {
            timer = setInterval(function() {
                  num++;
            if (num > $piclilength-1) {
                num = 0;
            }
            tabswitch();
            }, 3000);
        });
        $btnli.on('click', function() {
            num = $(this).index();
            tabswitch();
        });
        function tabswitch() {
            $btnli.eq(num).addClass('active').siblings($btnli).removeClass('active');
            $piclist.eq(num).stop(true).animate({ opacity: 1 }).siblings($piclist).stop(true).animate({ opacity: 0 });       
        }
        timer = setInterval(function() {
             num++;
            if (num > $piclilength-1) {
                num = 0;
            }
            tabswitch();
        }, 3000);
        //楼梯点击
        var $loutibtnbtn= $('.loutibutton'); //楼梯
        var $louceng = $('.louti'); //楼层
        //1.拖动滚动条到适当的位置显示楼梯。
        $(window).on('scroll', function() {
            var $scrolltop = $(this).scrollTop();//滚动的距离
            if ($scrolltop >= 1800) {
                $loutibtnbtn.show();
            } else {
                $loutibtnbtn.hide();
            }
        //4.拖动滚动条，楼梯和楼层进行匹配。
        $louceng.each(function(index,element){
            var $top=$(this).offset().top+400;
            if($top>$scrolltop){//滚动条的top值小于楼层的top值，给楼层对应的楼梯添加active
                $('.loutibutton div').removeClass('active');//移出所有楼梯上面的类。
                 $('.loutibutton div').eq($(this).index('.louti')).addClass('active');
                 return false;
            }
        });

    });
    //2.点击对应的楼梯，将楼层的top赋值给滚动条
    $('.loutibutton div').on('click', function() {
        $(this).addClass('active').siblings('.loutibutton div').removeClass('active');
        //获取每一个楼层的top值(楼梯和楼层一一对应的)
        var $top = $louceng.eq($(this).index('.loutibutton div')).offset().top;
        $('html,body').animate({ //兼容赋值
            scrollTop: $top
        })
    });

    //3.回到顶部
    $('.back_top').on('click', function() {
        $('html,body').animate({ //兼容赋值
            scrollTop: 0
        });
    });

})


/*;(function(){
    //顶部的大轮播图
        var $louti=$('.loutibanner');
        var $btnli = $('.lt_circle_btn li');
        var $piclist=$('.banner_pic div');
        var num = 0; //当前点击的索引
        var timer = null;
        var $piclilength = $btnli.size();
        //显示左右箭头
        $louti.hover(function() {
            clearInterval(timer);
        }, function() {
         
            timer = setInterval(function() {
                  num++;
            if (num > $piclilength-1) {
                num = 0;
            }
            tabswitch();
            }, 3000);
        });
        $btnli.on('click', function() {
            num = $(this).index();
            tabswitch();
        });
        function tabswitch() {
            $btnli.eq(num).addClass('active').siblings($btnli).removeClass('active');
            $piclist.eq(num).stop(true).animate({ opacity: 1 }).siblings($piclist).stop(true).animate({ opacity: 0 });
          
        }
        timer = setInterval(function() {
             num++;
            if (num > $piclilength-1) {
                num = 0;
            }
            tabswitch();
        }, 3000);



        //楼梯点击
        var $loutibtnbtn= $('.loutibutton'); //楼梯
	    var $louceng = $('.louti'); //楼层
	    //1.拖动滚动条到适当的位置显示楼梯。
	    $(window).on('scroll', function() {
	        var $scrolltop = $(this).scrollTop();//滚动的距离
	        if ($scrolltop >= 1800) {
	            $loutibtnbtn.show();
	        } else {
	            $loutibtnbtn.hide();
	        }

        //4.拖动滚动条，楼梯和楼层进行匹配。
        $louceng.each(function(index,element){
        	var $top=$(this).offset().top+400;
        	console.log($top);
        	if($top>$scrolltop){//滚动条的top值小于楼层的top值，给楼层对应的楼梯添加active
        		$('.loutibutton div').removeClass('active');//移出所有楼梯上面的类。
        		 $('.loutibutton div').eq($(this).index('.louti')).addClass('active');
        		 return false;
        	}
        });

    });

    //2.点击对应的楼梯，将楼层的top赋值给滚动条
    $('.loutibutton div').not('.last').on('click', function() {
        $(this).addClass('active').siblings('.loutibutton div').removeClass('active');
        //获取每一个楼层的top值(楼梯和楼层一一对应的)
        var $top = $louceng.eq($(this).index('.loutibutton div')).offset().top;
        $('html,body').animate({ //兼容赋值
            scrollTop: $top
        })
    });

    //3.回到顶部
    $('.back_top').on('click', function() {
        $('html,body').animate({ //兼容赋值
            scrollTop: 0
        });
    });
        
})();
*/