;(function(){
		var $yzm=$('#yzm');
		var $produceyzm=$('.xianshi .randnum');
		var $updateyzm=$('.xianshi .aclick');
		var $yzmlock = false;
		function num(){
			var arr=[];
			var str=''
			for (var i=48;i<=57;i++) {
				arr.push(String.fromCharCode(i))
			}
			for(var i=97;i<=122;i++){
				arr.push(String.fromCharCode(i));
			}
			for (var i=0;i<4;i++) {
				var random=parseInt(Math.random()*arr.length);
				if(random>9){
					var bool=Math.random()>0.5?true:false;
					if(bool){
						str+=arr[random].toUpperCase();
					}else{
						str+=arr[random]
					}
				}else{
					str+=arr[random]
				}
			}
			return $produceyzm.html(str)
		}
			num()
		//点击按钮更新验证码
		$updateyzm.on('click',function(){
			num()
		})
		
		$yzm.on('focus',function(){
			$('.xianshi_info').css('color','#787878').html('请输入右边的字符,不区分大小写');
		})
		$produceyzm.on('click',function(){
			num();
		})
		//验证码验证
		$yzm.on('blur',function(){
			$yzmvalue=$yzm.val();
			if($yzmvalue!=''){
				if($yzmvalue==$produceyzm.html().toLowerCase()){
					$('.xianshi_info').css('color','green').html('√');
					$yzmlock=true;
				}else {
					$('.xianshi_info').css('color','red').html('验证码不一致');
					$yzmlock=false;
				}
			}else{
				$('.xianshi_info').css('color','red').html('验证码不能为空');
					$yzmlock=false;		
			}
		});

		//后端验证用户名和密码是否存在
		function addCookie(key, value, day) {
            var date = new Date(); //创建日期对象
            date.setDate(date.getDate() + day); //过期时间：获取当前的日期+天数，设置给date
            document.cookie = key + '=' + encodeURI(value) + ';expires=' + date; //添加cookie，设置过期时间
        };

	        $('.login_btn').on('click', function() {

	        	if ($yzmlock) {
		            $.ajax({
		                type: 'post',
		                url: '../../php/login.php',
		                data: {
		                    user: $('#username').val(),
		                    pass: $('#password').val()
		                }
		            }).done(function(d) {
		                if (!d) {
		                    $('#error').css('color','red').html('用户名或者密码错误');
		                } else {
		                    location.href = 'index.html';
		                    addCookie('xingming',$('#username').val(),7);
		                }
		            })
	        	}
	        });

})();