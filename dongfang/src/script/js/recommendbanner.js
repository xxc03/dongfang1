define(['jquery'],function(){
     var $recommend_banner = $('.anchor_recommend .content_left');
        var $recommend_picli = $('.anchor_recommend .content_left ul');
        var $recommend_btnli = $('.anchor_recommend .circle_btn li');
        var $recommend_left = $('.anchor_recommend .left_btn');
        var $recommend_right = $('.anchor_recommend .right_btn');
        var num = 0; //当前点击的索引
        var recommend_timer = null;
        var $piclilength = $recommend_btnli.size();
        //显示左右箭头
        $recommend_banner.hover(function() {
            $('.anchor_recommend .left_btn,.anchor_recommend .right_btn').show();
            clearInterval(recommend_timer);
        }, function() {
            $('.anchor_recommend .left_btn,.anchor_recommend .right_btn').hide();
            recommend_timer = setInterval(function() {
                 num++;
            if (num > $piclilength-1) {
                num = 0;
            }
            tabswitch();
                 //$recommend_right.click();
            }, 3000);
        });

        $recommend_btnli.on('click', function() {
            num = $(this).index();
            tabswitch();
        });

        $recommend_right.on('click', function() {
            num++;
            if (num > $piclilength-1) {
                num = 0;
            }
            tabswitch();
        });


        $recommend_left.on('click', function() {
            num--;
            if (num < 0) {
                num = $piclilength-1;
            }
            tabswitch();
        });

        function tabswitch() {
            $recommend_btnli.eq(num).addClass('active').siblings('.anchor_recommend .circle_btn li').removeClass('active');
            $recommend_picli.find('li').eq(num).stop(true).animate({ opacity: 1 }).siblings().stop(true).animate({ opacity: 0 });
            $('.anchor_recommend .btn span').html(num+1).css('color','red');
        }
        recommend_timer = setInterval(function() {
             num++;
            if (num > $piclilength-1) {
                num = 0;
            }
            tabswitch();
            //$recommend_right.click();
        }, 3000);

})

 





















/*;(function(){

        var $recommend_banner = $('.anchor_recommend .content_left');
        var $recommend_picli = $('.anchor_recommend .content_left ul');
        var $recommend_btnli = $('.anchor_recommend .circle_btn li');
        var $recommend_left = $('.anchor_recommend .left_btn');
        var $recommend_right = $('.anchor_recommend .right_btn');
        var num = 0; //当前点击的索引
        var recommend_timer = null;
        var $piclilength = $recommend_btnli.size();
        //显示左右箭头
        $recommend_banner.hover(function() {
            $('.anchor_recommend .left_btn,.anchor_recommend .right_btn').show();
            clearInterval(recommend_timer);
        }, function() {
            $('.anchor_recommend .left_btn,.anchor_recommend .right_btn').hide();
            recommend_timer = setInterval(function() {
                 num++;
            if (num > $piclilength-1) {
                num = 0;
            }
            tabswitch();
                 //$recommend_right.click();
            }, 3000);
        });

        $recommend_btnli.on('click', function() {
            num = $(this).index();
            tabswitch();
        });

        $recommend_right.on('click', function() {
            num++;
            if (num > $piclilength-1) {
                num = 0;
            }
            tabswitch();
        });


        $recommend_left.on('click', function() {
            num--;
            if (num < 0) {
                num = $piclilength-1;
            }
            tabswitch();
        });

        function tabswitch() {
            $recommend_btnli.eq(num).addClass('active').siblings($recommend_btnli).removeClass('active');
            $recommend_picli.find('li').eq(num).stop(true).animate({ opacity: 1 }).siblings($recommend_picli).stop(true).animate({ opacity: 0 });
            $('.anchor_recommend .btn span').html(num+1).css('color','red');
        }
        recommend_timer = setInterval(function() {
             num++;
            if (num > $piclilength-1) {
                num = 0;
            }
            tabswitch();
            //$recommend_right.click();
        }, 3000);
})();*/