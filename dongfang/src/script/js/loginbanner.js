;(function(){
	   	var $login_box=$('.login .login_banner');
        var $btnli = $('.login .circle_btn li');
        var $piclist=$('.login .login_banner div');
        var num = 0; //当前点击的索引
        var timer = null;
        var $piclilength = $btnli.size();
        //楼梯的轮播
        $login_box.hover(function() {
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
            $piclist.eq(num).stop(true).animate({ opacity: 1 }).siblings('.login .login_banner div').stop(true).animate({ opacity: 0 });       
        }
        timer = setInterval(function() {
             num++;
            if (num > $piclilength-1) {
                num = 0;
            }
            tabswitch();
        }, 3000);
})();