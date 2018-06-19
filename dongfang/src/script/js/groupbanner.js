define(['jquery'],function(){
        var $group_buying_banner = $('.group_buying .content_right');
        var $position_box = $('.group_buying .content_right .position_box');
        var num = 0; //当前点击的索引
        var group_timer = null;
        var $piclilength = $position_box.size();
        //滑入滑出定时器开和关
        $group_buying_banner.hover(function() {          
            clearInterval(group_timer);
        }, function() {
            group_timer = setInterval(function() {
                 num++;
            if (num > $piclilength-1) {
                num = 0;
            }
            tabswitch();
                 //$recommend_right.click();
            }, 3000);
        });
        function tabswitch() {
            $position_box.eq(num).stop(true).animate({ opacity: 1 }).siblings('.group_buying .content_right .position_box').stop(true).animate({ opacity: 0 });
            $('.group_buying .btn span').html(num+1).css('color','red');
        }
        group_timer = setInterval(function() {
             num++;
            if (num > $piclilength-1) {
                num = 0;
            }
            tabswitch();
            //$recommend_right.click();
        }, 3000);
})


/*;(function(){

        var $group_buying_banner = $('.group_buying .content_right');
        var $position_box = $('.group_buying .content_right .position_box');
        var num = 0; //当前点击的索引
        var group_timer = null;
        var $piclilength = $position_box.size();
        //滑入滑出定时器开和关
        $group_buying_banner.hover(function() {          
            clearInterval(group_timer);
        }, function() {
            group_timer = setInterval(function() {
                 num++;
            if (num > $piclilength-1) {
                num = 0;
            }
            tabswitch();
                 //$recommend_right.click();
            }, 3000);
        });
        function tabswitch() {
            $position_box.eq(num).stop(true).animate({ opacity: 1 }).siblings($position_box).stop(true).animate({ opacity: 0 });
            $('.group_buying .btn span').html(num+1).css('color','red');
        }
        group_timer = setInterval(function() {
             num++;
            if (num > $piclilength-1) {
                num = 0;
            }
            tabswitch();
            //$recommend_right.click();
        }, 3000);
})();*/