define(['jquery'],function(){
     //顶部的大轮播图
        var $food_banner = $('.food_beverage .banner');
        var $food_picli = $('.food_beverage  .smallbanner');
        var $food_btnli = $('.food_beverage .circle_btn li');
        var $food_left = $('.food_beverage .left_btn');
        var $food_right = $('.food_beverage .right_btn');
        var num = 0; //当前点击的索引
        var food_timer = null;
        var $piclilength = $food_btnli.size();
        //显示左右箭头
        $food_banner.hover(function() {
            $('.food_beverage .left_btn,.food_beverage .right_btn').show();
            clearInterval(food_timer);
        }, function() {
            $('.food_beverage .left_btn,.food_beverage .right_btn').hide();
            food_timer = setInterval(function() {
                 $food_right.click();
            }, 3000);
        });
        $food_btnli.on('click', function() {
            num = $(this).index();
            tabswitch();
        });

        $food_right.on('click', function() {
            num++;
            if (num > $piclilength-1) {
                num = 0;
            }
            tabswitch();
        });


        $food_left.on('click', function() {
            num--;
            if (num < 0) {
                num = $piclilength-1;
            }
            tabswitch();
        });

        function tabswitch() {
            $food_btnli.eq(num).addClass('active').siblings('.food_beverage .circle_btn li').removeClass('active');
            $food_picli.find('li').eq(num).stop(true).animate({ opacity: 1 }).siblings().stop(true).animate({ opacity: 0 });
            $('.food_beverage .btn span').html(num+1).css('color','red');
        }
        food_timer = setInterval(function() {
            $food_right.click();
        }, 3000);
    
})














/*;(function(){
    //顶部的大轮播图
        var $food_banner = $('.food_beverage .banner');
        var $food_picli = $('.food_beverage  .smallbanner');
        var $food_btnli = $('.food_beverage .circle_btn li');
        var $food_left = $('.food_beverage .left_btn');
        var $food_right = $('.food_beverage .right_btn');
        var num = 0; //当前点击的索引
        var food_timer = null;
        var $piclilength = $food_btnli.size();
        //显示左右箭头
        $food_banner.hover(function() {
            $('.food_beverage .left_btn,.food_beverage .right_btn').show();
            clearInterval(food_timer);
        }, function() {
            $('.food_beverage .left_btn,.food_beverage .right_btn').hide();
            food_timer = setInterval(function() {
                 $food_right.click();
            }, 3000);
        });
        $food_btnli.on('click', function() {
            num = $(this).index();
            tabswitch();
        });

        $food_right.on('click', function() {
            num++;
            if (num > $piclilength-1) {
                num = 0;
            }
            tabswitch();
        });


        $food_left.on('click', function() {
            num--;
            if (num < 0) {
                num = $piclilength-1;
            }
            tabswitch();
        });

        function tabswitch() {
            $food_btnli.eq(num).addClass('active').siblings($food_btnli).removeClass('active');
            $food_picli.find('li').eq(num).stop(true).animate({ opacity: 1 }).siblings($food_picli).stop(true).animate({ opacity: 0 });
            $('.food_beverage .btn span').html(num+1).css('color','red');
        }
        food_timer = setInterval(function() {
            $food_right.click();
        }, 3000);
        
})();
*/