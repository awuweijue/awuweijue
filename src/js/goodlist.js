$('document').ready(()=>{
	
	$('.bottom').load('../index.html .bottom .container',function(res){	
		$('.bottom img').prop('src','../img/jinghui.png');
	})
	var sorttype;
	var sort = true;
	var $uname;
	if (document.cookie) {
		$uname = document.cookie.split('=')[1];
	}

	function sorting(sorttype){
		$.post('../api/goodlist.php',{sort:sorttype},res=>{
			console.log(res);
			if (typeof res=='string'&&res!='') {
				$('.goodlist').empty();
				var total = JSON.parse(res).total;
				JSON.parse(res).res.forEach(function(item,idx){
					$('<div class="goodlist" dataid="'+item.id+'"><img src="'+item.imgUrl+'"><p>'+item.brand+'</p><p>'+item.name+'</p><p>￥'+item.price+'<del style="margin-left:16px">'+Math.ceil(item.price/item.count*10)+'</del><span>'+item.count+'折</span></p></div>').insertBefore($('.pages'));
					})
				var goodlists = document.querySelectorAll('.goodlist');
				$('.curpage').remove();				
				for(var i=1;i<=Math.ceil(total/9);i++){
					//console.log($('.firstpage'))
					$('<span class="curpage">'+i+'</span>').insertBefore($('.lastpage'));
				}
				$('.total').html(total);
				$('.totalpage').html(Math.ceil(total/9));
				$('.currentpage').html(1);
			}
		})
	}
	$.post('../api/goodlist.php',{},res=>{
		console.log(res);
		if (typeof res=='string'&&res!='') {
			var total = JSON.parse(res).total;
			JSON.parse(res).res.forEach(function(item,idx){
				$('<div class="goodlist" dataid="'+item.id+'"><img src="'+item.imgUrl+'"><p>'+item.brand+'</p><p>'+item.name+'</p><p>￥'+item.price+'<del style="margin-left:16px">'+Math.ceil(item.price/item.count*10)+'</del><span>'+item.count+'折</span></p></div>').insertBefore($('.pages'));
			})
			var goodlists = document.querySelectorAll('.goodlist');
			
			
			for(var i=1;i<=Math.ceil(total/9);i++){
				//console.log($('.firstpage'))
				$('<span class="curpage">'+i+'</span>').insertBefore($('.lastpage'));
			}
			$('.total').html(total);
			$('.totalpage').html(Math.ceil(total/9));
			$('.currentpage').html(1);
		}
		
	})
	$('.pages').on('click','.curpage',function(){
		// var scrolly = window.scrollY;
		// var scrollx = window.scrollX;
		$('.click').removeClass('click');
		var currentp = this.innerHTML;
		
		$.post('../api/goodlist.php',{currentpage:currentp},res=>{
			console.log(res);
			if (typeof res=='string'&&res!='') {
				
				$('.goodlist').empty();
				var total = JSON.parse(res).total;
				JSON.parse(res).res.forEach(function(item,idx){
					$('<div class="goodlist" dataid="'+item.id+'"><img src="'+item.imgUrl+'"><p>'+item.brand+'</p><p>'+item.name+'</p><p>'+item.price+'<span>'+item.count+'折</span></p></div>').insertBefore($('.pages'));
				})
				$('.curpage').remove();
				for(var i=1;i<=Math.ceil(total/9);i++){
					//console.log($('.firstpage'))
					$('<span class="curpage">'+i+'</span>').insertBefore($('.lastpage'));
				}
				$('.total').html(total);
				$('.totalpage').html(Math.ceil(total/9));
				$('.currentpage').html(currentp);
				//window.scrollTo(scrollx,scrolly);
			}
		})
		console.log(this);
		$(this).addClass('click');
		// if (sorttype) {
		// 	sorting(sorttype);
		// }
	})

	$('.brand').click(function(){
		var brand = this.innerHTML;
		$.post('../api/goodlist.php',{brand:brand},res=>{
			console.log(res);
			if (typeof res=='string'&&res!='') {
				
				$('.goodlist').empty();
				var total = JSON.parse(res).total;
				JSON.parse(res).res.forEach(function(item,idx){
					$('<div class="goodlist" dataid="'+item.id+'"><img src="'+item.imgUrl+'"><p>'+item.brand+'</p><p>'+item.name+'</p><p>'+item.price+'<span>'+item.count+'折</span></p></div>').insertAfter($('table'));
				})
				$('.curpage').remove();
				for(var i=1;i<=Math.ceil(total/9);i++){
					//console.log($('.firstpage'))
					$('<span class="curpage">'+i+'</span>').insertBefore($('.lastpage'));
				}
				$('.total').html(total);
				$('.totalpage').html(Math.ceil(total/9));
				
				
				//window.scrollTo(scrollx,scrolly);
			}
		})
		if (sorttype) {
			sortting(sortype);
		}
	})

	$('.type').click(function(){
		var type = this.innerHTML;

		$.post('../api/goodlist.php',{type:type},res=>{
			console.log(res);
			if (typeof res=='string'&&res!='') {
				
				$('.goodlist').empty();
				var total = JSON.parse(res).total;
				JSON.parse(res).res.forEach(function(item,idx){
					$('<div class="goodlist" dataid="'+item.id+'"><img src="'+item.imgUrl+'"><p>'+item.brand+'</p><p>'+item.name+'</p><p>'+item.price+'<span>'+item.count+'折</span></p></div>').insertAfter($('table'));

				})
				$('.curpage').remove();
				for(var i=1;i<=Math.ceil(total/9);i++){
					//console.log($('.firstpage'))
					$('<span class="curpage">'+i+'</span>').insertBefore($('.lastpage'));
				}
				$('.total').html(total);
				
				//window.scrollTo(scrollx,scrolly);
			}
		})
		if (sorttype) {
			sortting(sortype);
		}
	})
	
	
	$('.sort').click(function(){
		console.log(sort);		
		if (sort == true) {
			sorttype = 'sort';
		}else{
			sorttype = 'rsort';
		}
		sorting(sorttype);
		sort = !sort;
	})

	$('.main').on('click','.goodlist',function(){
		if ($uname){
    	
    		$('.youli').parent().css('background','none');
    		$('.youli a span')[0].innerHTML = $uname;
    	
    	}
    	console.log(1);
		location.href = 'detail.html?uname='+$uname+'&dataid='+this.getAttribute('dataid');
	});
		
	// $('.pages').on('click','.lastpage',function(){
	// 	// var scrolly = window.scrollY;
	// 	// var scrollx = window.scrollX;
	// 	if ($('.click').html()<=1) {
	// 		return;
	// 	}
	// 	var currentpage = $('.click').html()-1;
	// 	$('.click').prev().addClass('click');
	// 	$($('.click')[1]).removeClass('click');
	// 	console.log(window.scrollY);
	// 	$.post('../api/goodlist.php',{currentpage:currentpage},res=>{
	// 		console.log(res);
	// 		if (typeof res=='string'&&res!='') {
				
	// 			$('.goodlist').empty();
	// 			var total = JSON.parse(res).total;
	// 			JSON.parse(res).res.forEach(function(item,idx){
	// 				$('<div class="goodlist"><img src="'+item.imgUrl+'"><p>'+item.brand+'</p><p>'+item.name+'</p><p>'+item.price+'<span>'+item.count+'折</span></p></div>').insertAfter($('table'));
	// 			})
	// 			$('.curpage').remove();
	// 			for(var i=1;i<=Math.ceil(total/9);i++){
	// 				//console.log($('.firstpage'))
	// 				$('<span class="curpage">'+i+'</span>').insertBefore($('.lastpage'));
	// 			}
	// 			$('span:nth-of-type(2)').addClass('click');
	// 			//window.scrollTo(scrollx,scrolly);
	// 		}
			
	// 	})
	// })

})