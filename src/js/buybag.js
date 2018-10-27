$('document').ready(()=>{
	var total = 0;
	var checkAll = false;
	$('.bottom').load('../index.html .bottom .container',function(res){	
		$('.bottom img').prop('src','../img/jinghui.png');
	})
	var $uname;
	if (document.cookie) {
		$uname = document.cookie.split('=')[1];
	}
	if (location.href.includes('?uname=')) {
		console.log(location.href.split('?')[1].split('=')[1]);
    	$uname = location.href.split('?')[1].split('=')[1];
    	//console.log(location.href.split('?')[1].split('=')[2]);
    	$('.youli').parent().css('background','none');
    	$('.youli a span')[0].innerHTML = $uname;
    	//var dataid = location.href.split('?')[1].split('=')[2];
    	
    }else{
    	//var dataid = location.href.split('?')[1].split('=')[1];
    }
    $.ajaxSettings.async = false;

    $.post('../api/buybag.php',{uname:$uname},res=>{
    	console.log(res);
    	if (typeof res=='string'&&res!=''){
    		JSON.parse(res).forEach(function(item,idx){
    			
    			var $i = $(`<tr dataid="${item.dataid}" class="goodlist">
						<th><input type="checkbox"><img src="${item.detail.imgUrl}" width="80px" height="106px">
						</th>
						<th>
							<div class="detail">
								<h5 class="brand">${item.detail.brand}</h5>
								<p class="name">${item.detail.name}</p>
								<p class="color">${item.color}</p>
								<p class="size">${item.size}</p>
							</div>
						</th>
						<th>￥<span class="price">${item.detail.price}</span>
						</th>
						<th>
							<div class="qty">
									
								<span class="jian">-</span>
								<span class="quantity">${item.qty}</span>
								<span class="jia">+</span>
					
							</div>
						</th>
						<th>￥0.00</th>
						<th class="small">￥${item.detail.price*item.qty}</th>
						<th><input type="button" value="删除" class='del' ></th>
					</tr>`)
    				$i.insertAfter($('.firsttr'));

    				
    				

    		})

    	}
    })
    $(':checkbox').click(function(){
    	total = 0;
    	var checked = document.querySelectorAll('input:checked');
    	if ($(this).parent().parent().find('.price').length==0) {
    		var small = document.querySelectorAll('.small');
    		small.forEach(item=>{
    			total += Number(item.innerHTML.slice(1));
    		})
    	}else{
    		checked.forEach(item=>{
    		// console.log($(item).parent().parent().find('.price').length);
    		if ($(item).parent().parent().find('.price').length==0) {
    			total += 0;
    		}else{
    			total += $(item).parent().parent().find('.price').html()*$(item).parent().parent().find('.quantity').html();
    		}
    		
    		//console.log($(item).parent().parent().find('.price'));
    		

    	})
    	}
    	
    	
    	$('#sum').html(total);
    })
    $('.all').click(()=>{
    	checkAll = !checkAll;
    	console.log(checkAll);
    	if (checkAll == true) {
    		console.log($(':checkbox'));
    		$(':checkbox').prop('checked',true);
    	}else if(checkAll == false){
    		$(':checkbox').prop('checked',false);
    	}
    	$()
    })


    $('.jian').click(function(){

    	if ($(this).next().html()>1) {
    		$(this).next().html($(this).next().html()-1);
    		update('jian',this);
    	}
    	
    	
    })
    $('.jia').click(function(){
    	console.log($(this).prev());
    	$(this).prev().html(Number($(this).prev().html())+1);
    	update('jia',this);
    })
    function update(type,btn){
    	var dataid = $(btn).parent().parent().parent().attr('dataid');
    	if (type == 'jian') {
    		var qty = $(btn).next().html();
    	}else if(type == 'jia'){
    		var qty = $(btn).prev().html();
    	}
    	console.log(qty);
    	$.post('../api/update.php',{type:type,uname:$uname,dataid:dataid,qty:qty},function(res){
    		 
    	})
    }

    $('.del').click(function(){
    	
    	remove('del',this);
    	$(this).parent().parent().remove();
    })
    console.log($('.empty'));
    $('.empty').click(function(){
    	remove('empty',this);
    	$('.goodlist').remove();
    })

    function remove(type,btn){
    	if (type=='del') {
    		var dataid = $(btn).parent().parent().attr('dataid');

    		$.post('../api/remove.php',{type:type,uname:$uname,dataid:dataid},function(){})
    	}else if(type == 'empty'){
    		$.post('../api/remove.php',{type:type,uname:$uname},function(){})
    	}
    	
    	
    }
    
    $('.navigation a').attr('href','detail.html?uname='+$uname);
    $('index').attr('href','../index.html?uname='+$uname);
})