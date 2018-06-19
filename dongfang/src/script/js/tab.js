define(['jquery'],function(){
	var $divs=$('.tab .tabbox');
    	$('.btntab li').click(function(){
    		$(this).addClass('active').siblings('.btntab li').removeClass('active');
    		$(".bg_pic").eq($(this).index()).addClass('xianshi').siblings().removeClass('xianshi');
    		$divs.eq($(this).index()).show().siblings('.tab .tabbox').hide();
    	});
})
/*;(function(){
	var $divs=$('.tab .tabbox');
    	$('.btntab li').click(function(){
    		$(this).addClass('active').siblings('.btntab li').removeClass('active');
    		$(".bg_pic").eq($(this).index()).addClass('xianshi').siblings().removeClass('xianshi');
    		$divs.eq($(this).index()).show().siblings('.tab .tabbox').hide();
    	});
})();*/