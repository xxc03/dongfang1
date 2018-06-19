define(['jquery'],function($){
    //详情页
    $('.chuangsid').on('click',function(){
        $picsid=$(this).attr('picid');
        location.href = 'details.html?sid='+$picsid;
      /*  $.ajax({
            type:'post',
            url:'../../php/details.php',
            data:{
                sid:$picsid
            }
        }).done(function(d){
             
        }); */
    })
    //登录信息判断
         function addCookie(key, value, day) {
            var date = new Date(); //创建日期对象
            date.setDate(date.getDate() + day); //过期时间：获取当前的日期+天数，设置给date
            document.cookie = key + '=' + encodeURI(value) + ';expires=' + date; //添加cookie，设置过期时间
        }

        function getCookie(key) {
            var str = decodeURI(document.cookie);
            var arr = str.split('; ');
            for (var i = 0; i < arr.length; i++) {
                var arr1 = arr[i].split('=');
                if (arr1[0] == key) {
                    return arr1[1];
                }
            }
        }

        function delCookie(key) {
            addCookie(key, '', -1); //添加的函数,将时间设置为过去时间
        }
      
        //判断用户名是否存在,存在显示欢迎词
        if(getCookie('xingming')){

            $('.login').hide();
            $('.admin').show().find('.nicheng').html('你好，'+getCookie('xingming')+'欢迎光临 OCJ.COM.CN');//将获取的cookie值添加到span元素中
        }

        //点击退出按钮，清除cookie，显示请登录和请注册。
        $('.admin a').on('click',function(){
            if(confirm('你确定要退出吗？')){
                delCookie('xingming');
                $('.admin').hide();
                $('.login').show()
             }
            ;
        });

    // 顶部的轮播
    $.ajax({
        url: 'http://localhost/dongfang1/dongfang/php/index.php',
        dataType:'json'
    }).done(function(indexdata) {
        //console.log(indexdata.lunbo);array
        $.each(indexdata.lunbo,function(index,value){
            $('.big_banner ul').append(
                 '<li>'
                    +'<a href="javascript:;"><img src="'+value.url.split(',')[0]+'" alt=""></a>'
                    +'<div class="banner_right">'
                        +'<div class="banner_right_t">'
                            +'<a href="javascript:;"><img src="'+value.url.split(',')[1]+'" alt=""></a>'
                            +'<div>'
                                +'<div class="sanjiaotu"></div>'
                                +'<h4>你值得拥有</h4>'
                                +'<p>花嫁美满 质量保证</p>'
                            +'</div>'
                        +'</div>'
                        +'<div class="banner_right_b">'
                            +'<a href="javascript:;"><img src="'+value.url.split(',')[2]+'" alt=""></a>'
                            +'<div>'
                                +'<div class="sanjiaotu"></div>'
                                +'<h4>商城精选</h4>'
                                +'<p>多效过滤 物美价廉</p>'
                            +'</div>'
                        +'</div>'
                    +'</div>'
                +'</li>'
            );
        });
    })
    //主播推荐的轮播
    
    $.ajax({
        url: 'http://localhost/dongfang1/dongfang/php/index.php',
        dataType:'json'
    }).done(function(indexdata) {
        $.each(indexdata.recommend,function(index,value){
            $('.recommend_banner').append(
                    '<li>'  
                        +'<div class="banner">'
                            +'<a href="javascript:;"><img src="'+value.url+'" alt=""></a>' 
                        +'</div>'
                        +'<p class="intro">'+value.title+'</p>'
                        +'<p class="price">'+value.price+'</p>'
                        +'<div class="recommend">'
                            +'<h3>某某人推荐 :</h3>'
                            +'<div>'
                                +'推荐理由'
                            +'</div>'
                        +'</div>'
                    +'</li>'
                )
        })
    })
    //右侧的商品信息
        var $commodity_pic=$('.commodity_img img');
        var $commodity_title=$('.commodity_intro a');
        var $commodity_price=$('.commodity_price .price');
         var $commodity_sid=$('.chuangsid');
        var num=0;
     $.ajax({
        url: 'http://localhost/dongfang1/dongfang/php/index.php',
        dataType:'json'
    }).done(function(indexdata) {
        var $commodity=indexdata.commodity;
        //如果数据够的话 用each,each会把每一个都遍历出来
         /* $.each(indexdata.commodity,function(index,value){
            $commodity_pic.eq(index).attr({src:value.url});
            $commodity_title.eq(index).html(value.title);
            $commodity_price.eq(index).html(value.price);            
        }) */
        for(var $i=0;$i<2;$i++){
           $commodity_pic.eq($i).attr({src:$commodity[$i].url.split(',')[$i]});
            $commodity_title.eq($i).html($commodity[$i].title);
            $commodity_price.eq($i).html($commodity[$i].price);
            $commodity_sid.eq($i).attr({picid:$commodity[$i].sid});
        }
           /* $commodity_pic.eq(0).attr({src:$commodity[0].url.split(',')[0]});
            $commodity_title.eq(0).html($commodity[0].title);
            $commodity_price.eq(0).html($commodity[0].price);
            $commodity_sid.attr({picid:$commodity[0].sid});

            $commodity_pic.eq(1).attr({src:$commodity[1].url.split(',')[1]});
            $commodity_title.eq(1).html($commodity[1].title);
            $commodity_price.eq(1).html($commodity[1].price);
            $commodity_sid.attr({picid:$commodity[1].sid});*/
           
   

        for(var $i=2;$i<15;$i++){
            $commodity_pic.eq($i).attr({src:$commodity[$i].url});
            $commodity_title.eq($i).html($commodity[$i].title);
            $commodity_price.eq($i).html($commodity[$i].price);
        }
        var num=1;
        for(var $i=15;$i<32;$i++){

            $commodity_pic.eq($i).attr({src:$commodity[num].url});
            $commodity_title.eq($i).html($commodity[num].title);
            $commodity_price.eq($i).html($commodity[num].price);
            num++;
        }
        var num=1;
        for(var $i=32;$i<52;$i++){
            $commodity_pic.eq($i).attr({src:$commodity[num].url});
            $commodity_title.eq($i).html($commodity[num].title);
            $commodity_price.eq($i).html($commodity[num].price);
            num++;
        }
      
         //具有详情页的商品
        
    })
    //商场优选的商品信息
    var $shop_pic=$('.three_shop .commodity .shop_img');
    var $shop_title=$('.three_shop .shop_info a');
    var $shop_price=$('.three_shop .price');
     $.ajax({
        url: 'http://localhost/dongfang1/dongfang/php/index.php',
        dataType:'json'
    }).done(function(indexdata) {
        var $shop=indexdata.shop;
        for(var $i=0;$i<12;$i++){
            $shop_pic.eq($i).attr({src:$shop[$i].url});
            $shop_title.eq($i).html($shop[$i].title);
            $shop_price.eq($i).html($shop[$i].price);
        }   
    })
    //会员特权商品信息
    var $huiyuan_pic=$('.huiyuan_pic');
    var $huiyuan_title=$('.huiyuan .tab .content .jianjie a');
    var $huiyuan_price=$('.huiyuan .tab .content .price');
    var num=0;
     $.ajax({
        url: 'http://localhost/dongfang1/dongfang/php/index.php',
        dataType:'json'
    }).done(function(indexdata) {
        var $shop=indexdata.shop;
        for(var $i=12;$i<22;$i++){
            $huiyuan_pic.eq(num).attr({src:$shop[$i].url});
            $huiyuan_title.eq(num).html($shop[$i].title);
            $huiyuan_price.eq(num).html($shop[$i].price);
            num++;
        }   
    })
    //网页左边的小轮播图
    var $sbanner_pic=$('.smallbanner li a img');
     $.ajax({
        url: 'http://localhost/dongfang1/dongfang/php/index.php',
        dataType:'json'
    }).done(function(indexdata) {
        $.each(indexdata.smallbanner,function(index,value){
            $sbanner_pic.eq(index).attr({src:value.url});
        });
    })
 
 });   
