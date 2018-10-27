$('document').ready(function(){
	var $left;
	var timerS;
	var $uname;
	if (document.cookie) {
		$uname = document.cookie.split('=')[1];
	}
	$.get('api/index.php',{},res=>{
		//console.log(res)
		if (typeof res=='string'&&res!='') {
			JSON.parse(res).forEach(function(item,idx){
				$('.main img')[idx].src = item.imgurl;
				// console.log($($('.main img')[idx]).next().next())
				$($('.main img')[idx]).next().next().html(item.detail+'<span>'+item.count+'折</span>')
			})
		}
		
	})
	$(window).on('scroll',()=>{
		var $mart = parseInt($('.main').css('margin-top'));
		var $scr = window.scrollY;
		//console.log($mart,$scr);
		$('.main').css('margin-top',-window.scrollY/2);
	})
	$('.main img').click(function(){
		location.href="html/goodlist.html";
	})
	
	console.log(location.href.split('?')[1]);
	
    if ($uname) {
    	
    	$('.youli').parent().css('background','none');
    	$('.youli a span')[0].innerHTML = $uname;
    	
    }
    
    if ($uname) {
    	$.post('api/indexBag.php',{uname:$uname},function(res){
    		console.log(res);
    		if (res!=''&&typeof res=='string') {
    			$('#buybag')[0].innerHTML = JSON.parse(res).map(function(item,idx){
    				console.log(item.id);
    				return '<li dataid="'+item.id+'"><span>'+item.name+'</span><br><img src="'+item.imgUrl.slice(3)+'"><input type="button" value="删除" class="del"></li>'
    			}).join('');	
    		}
    	})
    }
    
    $('.jiesuan').click(()=>{
    	if($('#buybag').children().length>0&&$uname){
    		location.href = 'html/buybag.html?uname='+$uname;
    	}
    })

    $('.bag').parent().on('mouseover',function(){    	
    	$('.buybag').stop().show(600);   
    })

    $('.empty').click(function(){    	
	    $('.buybag').stop().hide(600);
	})
    $('#buybag').on('click',".del",function(){
    	if($uname){
    		console.log($(this).parent().attr('dataid'),$uname)
    		$.post('api/remove.php',{dataid:$(this).parent().attr('dataid'),uname:$uname},function(res){

    		})
    	}
    	//console.log($(this).parent());
    	$(this).parent().remove();

    })
   
    $('.list a').prop('href','html/goodlist.html');
    
    

    
    

	$('#leftarrow').click(()=>{
		$left = $('.box').css('left');
		$left = parseInt($left);
		if ($left>=0) {
			$('.box').css('left',-5400);
			$left = -5400;	
		}
		$('.box').animate({left:$left+1800},1000);	
	})
	$('#rightarrow').click(()=>{
		$left = $('.box').css('left');
		$left = parseInt($left);
		if ($left<=-5400) {
			$('.box').css('left',0);
			$left = 0;	
		}
		$('.box').animate({left:$left-1800},1000);	
	})
	var timer = setInterval(()=>{
		$left = $('.box').css('left');
		$left = parseInt($left);

		$('#rightarrow').click(()=>{
			$left -= 1800;  
		})
		if ($left<=-5400) {
					$left = 0;					
					$('.box').css('left',0);
				}
		$('.box').animate({left:$left-1800},1000);

		
	},4000)
	
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
							if ($uname) {
								$('#search').append($('<li><a href="html/detail.html?uname='+$uname+'&dataid='+item[1]+'">'+item[0]+'</a></li>'));
								if (idx>6) {
									return;
								}
							}else{
								$('#search').append($('<li><a href="html/detail.html?dataid='+item[1]+'">'+item[0]+'</a></li>'));
								if (idx>6) {
									return;
								}
							}
							
						})						
					}
				})
			},500)
		}
	}
	$('.text').on('blur',function(){
		//setTimeout(()=>{
			
			$('#search').hide(400);
		//},100)
		
	})

})