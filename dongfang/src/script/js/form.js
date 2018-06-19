;(function(){
	var $input=$('label input');
		var $username=$('#username');
		var $password=$('#password');
		var $repass=$('#repass');
		var $yzm=$('#yzm');
		var $usevalue=$username.val();
		var $passvalue=$password.val();
		var $repassvalue=$repass.val();
		var $yzmvalue=$yzm.val();
		var $usernamelock = false;
	    var $passwordlock = false;
	    var $repasswordlock = false;
	    var $yzmlock = false;
		var $produceyzm=$('.register_info i strong');
		var $updateyzm=$('.register_info i a');
		//得到焦点提示格式
		$username.on('focus',function(){
			$('p span').eq(0).css('color','#787878').html('手机号可用于登录、找回密码、接收订单通知等服务');
		})
		$username.focus();//刷新就得到焦点
		//手机号码验证
		$username.on('blur',function(){
			$usevalue=$username.val();
			var reg=/^1[3|5|7|8|9]\d{9}$/;
			if($usevalue!=''){
				if(reg.test($usevalue)){
					//验证用户名是否已经存在
					$.ajax({
						type:'post',
						url:'../../php/reg.php',
						data:{
							repeatname:$usevalue
						}
					}).done(function(d){
						if(!d){//手机号码还没注册
							$('p span').eq(0).css('color', 'green').html('√');
							$usernamelock = true;
						}else {
							$('p span').eq(0).css('color', 'red').html('该手机号已经注册');
							$usernamelock = false;
						}
					});	
				}else {
					$('p span').eq(0).css('color', 'red').html('手机号码格式错误');
					$usernamelock = false;
				}
			}else{				
				$('p span').eq(0).css('color', 'red').html('手机号码不能为空');
					$usernamelock=false;
			}
		});
		//密码得到焦点提示规则
		$password.on('focus',function(){
			$('p span').eq(1).css('color','#787878').html('密码为6-20个字符,可由英文、数字及符号组成');
		})
		//密码验证
		$password.on('blur',function(){
			$passvalue=$password.val();
			var reg=/^[\w|\W]{6,20}$/;
			if($passvalue!=''){
				if(reg.test($passvalue)){
					$('p span').eq(1).css('color','green').html('√');
					$passwordlock=true;
				}else {
					$('p span').eq(1).css('color','red').html('密码长度6-20个字符，请重新输入');
					$passwordlock=false;
				}
			}else{				
				$('p span').eq(1).css('color','red').html('密码不能为空');
					$passwordlock=false;
			}
		})
		//验证密码强度
		$password.on('input',function(){
			$passvalue=$password.val();
			var leve = 0;
			var reg1 = /\d+/
			var reg2 = /[a-zA-Z]+/
			var reg3 = /\W+/
			if (reg1.test($passvalue)) {
				leve++;
			}
			if ($passvalue.length>=6&&reg2.test($passvalue)) {
				leve++;
			}
			if ($passvalue.length>=7&&reg3.test($passvalue)) {
				leve++;
			}
			switch (leve) {
				case 1:
					$('p span').eq(1).css('color','red').html('密码过于简单');
					break;
				case 2:
					$('p span').eq(1).css('color','orange').html('试试字母、符号、数字的组合更安全');
					break;
				case 3:
					$('p span').eq(1).css('color','green').html('密码设置安全，放心使用');
					break;
			}
		})
		//密码确认得到焦点
		$repass.on('focus',function(){
			$('p span').eq(2).css('color','#787878').html('请再次输入密码');
		})
		//密码确认验证
		$repass.on('blur',function(){
			$repassvalue=$repass.val();
			if($repassvalue!=''){
				if($repassvalue==$passvalue){
					$('p span').eq(2).css('color','green').html('√');
					$repasswordlock=true;
				}else {
					$('p span').eq(2).css('color','red').html('密码不一致，请重新输入');
					$repasswordlock=false;
				}
			}else{				
				$('p span').eq(2).css('color','red').html('密码不能为空');
					$repasswordlock=false;	
			}
		})	
		//产生随机验证码
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
			$('p span').eq(3).css('color','#787878').html('请输入右边的字符,不区分大小写');
		})
		$produceyzm.on('click',function(){
			num();
		})
		//验证码验证
		$yzm.on('blur',function(){
			$yzmvalue=$yzm.val();
			if($yzmvalue!=''){
				if($yzmvalue==$produceyzm.html().toLowerCase()){
					$('p span').eq(3).css('color','green').html('√');
					$yzmlock=true;
				}else {
					$('p span').eq(3).css('color','red').html('验证码不一致');
					$yzmlock=false;
				}
			}else{
				$('p span').eq(3).css('color','red').html('验证码不能为空');
					$yzmlock=false;		
			}
		});
		//submit自动跳转--基于form表单的action
    	//当提交表单时，会发生 submit 事件。
    	$('form').on('submit',function(){
    		if($usevalue==''){
    			$('p span').eq(0).css('color','red').html('手机号码不能为空');
				return false;
    		};
    		if($passvalue==''){
    			$('p span').eq(1).css('color','red').html('密码不能为空');
				return false;
    		};
    		if($repassvalue==''){
    			$('p span').eq(2).css('color','red').html('密码不能为空');
				return false;
    		};
    		if($yzmvalue==''){
    			$('p span').eq(3).css('color','red').html('验证码不能为空');
				return false;
    		};
    		if (!$usernamelock || !$passwordlock || !$repasswordlock || !$yzmlock) { //如果namelock为false，阻止跳转。
            return false;
        }
    	});
})();