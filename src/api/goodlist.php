<?php  
	$brand = isset($_POST['brand'])?$_POST['brand']:'';
	$type = isset($_POST['type'])?$_POST['type']:'';
	$sort = isset($_POST['sort'])?$_POST['sort']:'';	
	$currentpage = isset($_POST['currentpage'])?$_POST['currentpage']:1;
	// var_dump($brand);
	// var_dump($currentpage);	
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$dbname = 'mei';
	$conn = new mysqli($servername,$username,$password,$dbname);
	$conn->set_charset('utf8');
	if ($brand) {
		$sql = 'select imgUrl,name,price,brand,count,id from goodlist where brand like "%'.$brand.'%"';
	}else if($type){
		$sql = 'select imgUrl,name,price,brand,count,id from goodlist where type="'.$type.'"';
	}else{
		$sql = 'select imgUrl,name,price,brand,count,id from goodlist';
	}
	
	$result = $conn->query($sql);
	$res = $result->fetch_all(MYSQLI_ASSOC);
	if($sort){
		$sortArr = [];		
		foreach ($res as $key => $value) {
		    $sortArr[$key] = $value['price'];
		}
		if ($sort == 'sort') {
			array_multisort($sortArr,SORT_DESC,$res);
		}else if($sort == 'rsort'){
			array_multisort($sortArr,SORT_ASC,$res);
		}
	}else{

	}
	$total = count($res);
	$res = array_slice($res,($currentpage-1)*9,9);
	$obj = array(
		'res'=>$res,
		'total'=>$total
	);
	//var_dump($obj);
	echo json_encode($obj,JSON_UNESCAPED_UNICODE);	
?>