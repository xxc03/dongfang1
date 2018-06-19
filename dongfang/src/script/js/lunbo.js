define(['jquery'],function(){
        //热销直播的动画
        var $zhibo=$('.advertising_concent .donghua .pic');
        var position=$zhibo.position();
        var $pic_left=position.left;
        var $pic_top=position.top;
        
        var zhibo_timer=setInterval(function(){
            if($pic_left==7&&$pic_top==-8){
                $zhibo.animate({
                    left:-70,
                    top:-15,
                    width:160,
                    height:160
                },2000)
            }
            if ($pic_left==-70&&$pic_top==-15) {
                    $zhibo.animate({
                        top:-85
                    },2000)
              }
              if ($pic_left==-70&&$pic_top==-85) {
                    $zhibo.animate({
                        left:-15
                    },2000)
              }
               if ($pic_left==-15&&$pic_top==-85) {
                    $zhibo.animate({
                        top:-15
                    },2000)
              }
              if ($pic_left==-15&&$pic_top==-15) {
                    $zhibo.animate({
                         left:7,
                        top:-8,
                        width:90,
                        height:90
                    },2000)
              }
                position=$zhibo.position();
                $pic_left=position.left;
                $pic_top=position.top;
        },2000)
    

        //轮播图
       var $big_banner = $('.main_top_banner');
        var $picli = $('.big_banner ul');
        var $btnli = $('.main_top_banner .circle_btn li');
        var $left = $('.main_top_banner .left_btn');
        var $right = $('.main_top_banner .right_btn');
        var num = 0; //当前点击的索引
        var timer = null;
        var $piclilength = $btnli.size();
        //显示左右箭头
        $big_banner.hover(function() {
            $('.main_top_banner .left_btn,.main_top_banner .right_btn').show();
            clearInterval(timer);
        }, function() {
            $('.main_top_banner .left_btn,.main_top_banner .right_btn').hide();
            timer = setInterval(function() {
                 $right.click();
            }, 3000);
        });
        $btnli.on('click', function() {
            num = $(this).index();
            tabswitch();
        });

        $right.on('click', function() {
            num++;
            if (num > $piclilength-1) {
                num = 0;
            }
            tabswitch();
        });
        $left.on('click', function() {
            num--;
            if (num < 0) {
                num = $piclilength-1;
            }
            tabswitch();
        });

        function tabswitch() {
            $btnli.eq(num).addClass('active').siblings('.main_top_banner .circle_btn li').removeClass('active');
            $picli.find('li').eq(num).stop(true).animate({ opacity: 1 }).siblings().stop(true).animate({ opacity: 0 });
            $('.main_top_banner .btn span').html(num+1).css('color','red');
        }
        timer = setInterval(function() {
            $right.click();
        }, 3000);
        //二级导航
        var $navlist=$('.goods_category_nav li');


});



/*;(function(){
    //顶部的大轮播图
        var $big_banner = $('.main_top_banner');
        var $picli = $('.big_banner ul');
        var $btnli = $('.main_top_banner .circle_btn li');
        var $left = $('.main_top_banner .left_btn');
        var $right = $('.main_top_banner .right_btn');
        var num = 0; //当前点击的索引
        var timer = null;
        var $piclilength = $btnli.size();
        //显示左右箭头
        $big_banner.hover(function() {
            $('.main_top_banner .left_btn,.main_top_banner .right_btn').show();
            clearInterval(timer);
        }, function() {
            $('.main_top_banner .left_btn,.main_top_banner .right_btn').hide();
            timer = setInterval(function() {
                 $right.click();
            }, 3000);
        });
        $btnli.on('click', function() {
            num = $(this).index();
            tabswitch();
        });

        $right.on('click', function() {
            num++;
            if (num > $piclilength-1) {
                num = 0;
            }
            tabswitch();
        });
        $left.on('click', function() {
            num--;
            if (num < 0) {
                num = $piclilength-1;
            }
            tabswitch();
        });

        function tabswitch() {
            $btnli.eq(num).addClass('active').siblings($btnli).removeClass('active');
            $picli.find('li').eq(num).stop(true).animate({ opacity: 1 }).siblings($picli).stop(true).animate({ opacity: 0 });
            $('.main_top_banner .btn span').html(num+1).css('color','red');
        }
        timer = setInterval(function() {
            $right.click();
        }, 3000);
        //二级导航
        var $navlist=$('.goods_category_nav li');
        
})();
*/