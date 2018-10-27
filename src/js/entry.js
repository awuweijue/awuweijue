requirejs.config({
	baseUrl : 'resgite.js',
	paths : {
		'jquery' : '../../lib/jquery'		
	}
})
requirejs(['jquery'],function(){

	var cookies = document.cookie;
	var pass_phone;
	var pass_psw;
	$('#tip1').css({'height':0,'overflow':'hidden'});
	if (typeof cookies == 'string'&&cookies!='') {
		var cookies = document.cookie.split('=')[1];
		
		location.href = '../index.html';
	}
	$('.bottom').load('../index.html .bottom .container',function(res){	
		$('.bottom img').prop('src','../img/jinghui.png');
	})
	$('document').ready(()=>{
		$('#formBtn1').click(()=>{
			$('.form1').css('display','block');
			$('.form2').css('display','none');
		})
		$('#formBtn2').click(()=>{
			$('.form2').css('display','block');
			$('.form1').css('display','none');
		})
		$('#formBtn3').click(()=>{			
			$('.form1').css('display','block');
			$('.form2').css('display','none');
		})
		$('#formBtn4').click(()=>{
			$('.form2').css('display','block');
			$('.form1').css('display','none');
		})
		$('#phone1').on('blur',function(){

			if(!/^1[34578]\d{9}$/.test(this.value)){
				$('#tip1').css('height',14).css('height',14);
			}else{
				pass_phone = true;
				$('#tip1').css('height',0);
			}
		})
		$('#phone2').on('blur',function(){
			if(!/^1[34578]\d{9}$/.test(this.value)){
				$('#tip2').html('请输入正确的手机号码').css('height',14);
			}else{
				pass_phone = true;
				$('#tip2').css('height',0);
			}
		})

		$('#entry1').click(()=>{
			if (pass_phone==true) {
				
				$.post('../api/entry1.php',{uname:$('#phone1').val()},function(res){
					if(res == 'true'){						
						location.href = '../index.html';
						
					}else if(res == 'false'){
						$('#tip1').html('请输入正确的手机号码').css('height',14);
					}
				})
			}
		})
		$('#entry2').click(()=>{

			if (pass_phone==true) {
				if (!/^[a-zA-Z0-9_]{8,20}$/.test($('#psw').val())) {
					$('#tip2').html('密码格式为8-20位数字字母下划线').css('height',14);
				}else{
					$('#tip3').css('height',0);
					pass_psw = true;
				}
				if (pass_psw==true) {
					//console.log($('input[type="checkbox"]').prop('checked'));
					if ($('input[type="checkbox"]').prop('checked')==true) {
						var d = new Date();
                		d.setDate(d.getDate()+7);
                		console.log(d);
               			document.cookie = "uname="+$('#phone2')[0].value+"; expires="+d.toUTCString()+"; path=/";
                		
					}
					$.post('../api/entry2.php',{uname:$('#phone2').val(),psw:$('#psw').val()},function(res){
					

						if(res == 'true'){
					
							location.href = '../index.html';

						}else if(res == 'false'){
							$('#tip2').html('密码错误').css('height',14);
							
							console.log($('#tip').css('height'));
						}
					})
				}
			}
		})
	})
})