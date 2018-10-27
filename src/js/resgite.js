requirejs.config({
	baseUrl : 'resgite.js',
	paths : {
		'jquery' : '../../lib/jquery'		
	}
})

requirejs(['jquery'],function(){
	$('.bottom').load('../index.html .bottom .container',function(res){
		
		$('.bottom img').prop('src','../img/jinghui.png');
	})
	$('document').ready(()=>{
		


		var see = false;
		$('#see').on('click',function(){
			see = !see;
			if (see == true) {
				$('#psw').prop('type','input');
			}else{
				$('#psw').prop('type','password');
			}
		})
		var pass_phone = false;
		var pass_yanzhengma = false;
		var pass_psw = false;
		var pass_check = false;
		var verifyCode = new GVerify("v_container");
			document.getElementById("code_input").onblur = function(){
				var res = verifyCode.validate(document.getElementById("code_input").value);
				if(res){
					pass_yanzhengma = true;
					$('#tip2').css('height',0);
				}else{
					$('#tip2').css('height',14);
				}
			}
		$('#phone').on('blur',function(){
			if(!/^1[34578]\d{9}$/.test(this.value)){
				$('#tip').css('height',14);
			}else{
				pass_phone = true;
				$('#tip').css('height',0);
			}
		})
		$(':checkbox').on('click',function(){
			if (this.checked == true) {
				pass_check = true;
			}else{
				pass_check = false;
			}
		})
		$('.zhuce').on('click',function(){
			if (!/^[a-zA-Z0-9_-]{8,20}$/.test($('#psw').val())) {
				$('#tip3').html('密码格式为8-20位数字或字母').css('height',14);
			}else{
				$('#tip3').css('height',0);
				pass_psw = true;
			}
			if (pass_check==true&&pass_psw==true&&pass_phone==true&&pass_yanzhengma==true) {
				$('#zhuce').css('cursor','pointer');
				console.log($('#phone').val());
				$.post('../api/resgite.php',{uname:$('#phone').val(),psw:$('#psw').val()},function(res){
					console.log(res);
					if (res == 'true') {

						$('#tip').html('该账号已存在，请直接登录').css('height',14);
					}else if(res == 'false'){

						location.href = '../index.html?uname='+$('#phone').val();
					}
					
				})
			}
		})
		
	})
})
