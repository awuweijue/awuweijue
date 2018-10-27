$('document').ready(function(){

	$('.bottom').load('../index.html .bottom .container',function(res){	
		$('.bottom img').prop('src','../img/jinghui.png');
	})

	var img;
	var size;
	var $uname;
	if (document.cookie) {
	    $uname = document.cookie.split('=')[1];
	}
	console.log($uname)
	if (location.href.includes('?uname=')) {
    	$uname = location.href.split('?')[1].split('=')[1].split('&')[0];
    	//console.log(location.href.split('?')[1].split('=')[2]);
    	$('.youli').parent().css('background','none');
    	$('.youli a span')[0].innerHTML = $uname;
    	var dataid = location.href.split('?')[1].split('=')[2];
    }else{
    	var dataid = location.href.split('?')[1].split('=')[1];
    }
	console.log($uname);
	
    $.post('../api/detail.php',{dataid:dataid},res=>{
		console.log(res);
		if (typeof res=='string'&&res!='') {
			
			JSON.parse(res).forEach(function(item,idx){
				img = item.imgUrl;
				$('.brand').html(item.brand);
				$('.name').html(item.name);
				$('.price').html('￥'+item.price);
				$('.discount').html(item.count+'折');
				$('del').html(Math.ceil(item.price/item.count*10));
				$('.smallcolor').attr('src',item.imgUrl);
				$('.pic').css('background','url('+item.imgUrl+')');
			})			
		}
	})

	$('.size').on('click','span',function(){
		$('.size span').css({'color':'black','background':'#ccc'});
		$(this).css({'color':'white','background':'black'});
		size = this.innerHTML;
	})		
	 
	$('.qty').on('click','.jian',function(){

		if ($('#qty').html()>1){
			//console.log(1);
			$('#qty').html($('#qty').html()-1);
		}
		return false;		
	})

	$('.qty').on('select',function(){return false});
	$('.qty').on('click','.jia',function(){
		console.log(this);
		$('#qty').html(Number($('#qty').html())+1);
		return false;
	})		
	
	$('.text')[0].oninput=function(){
		if ($(this).val().trim()!='') {
			clearTimeout(timerS);
			$('#search').css('display','block');
			timerS = setTimeout(()=>{
				$('#search').empty();
				$.get('api/search.php',{str:$('.logo .text').val()},function(res){
					console.log(JSON.parse(res));
					if (res!='') {
						JSON.parse(res).forEach(function(item,idx){
							$('#search').append($('<li><a href="detail.html?dataid='+item[1]+'">'+item[0]+'<a></li>'));
							if (idx>6) {
								return;
							}
						})						
					}
				})
			},500)
		}
	}

	$('.text').on('blur',function(){
		
		$('#search').hide(200);
	})


	$('#buycar').click(()=>{

		if (size) {
			//console.log(size);
			if ($uname) {
				$.post('../api/addcar.php',{dataid:dataid,size:size,color:$('.color span').html(),uname:$uname,qty:$('#qty').html()},function(res){
					if (res=='true') {
						$('<img src="'+img+'">').css({'position':'absolute','bottom':'300px','left':'200px','width':'80px','height':'120px'}).appendTo($('.pic')).animate({left:'900px',bottom:'840px'},1200);
					}
				})
			}else{
				console.log($uname);
				location.href = 'entry.html';
			}			
		}		
	})

	$('#buy').click(()=>{
		if (size) {
			if ($uname) {
				$.post('../api/addcar.php',{dataid:dataid,size:size,color:$('.color span').html(),uname:$uname,qty:$('#qty').html()},function(res){
					console.log(res);
					if (res=='true') {
						//console.log(1);
						location.href = 'buybag.html?uname='+$uname;
						
					}					
				})				
			}else{
				location.href = 'entry.html';
			}
		}
	})

})
