<?php  
	$uname = isset($_POST['uname'])?$_POST['uname']:'';
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$dbname = 'mei';
	$conn = new mysqli($servername,$username,$password,$dbname);
	$conn->set_charset('utf8');
	$sql_search = 'select qty,dataid,color,size from buybag where uname= "'.$uname.'"';
	$result_search = $conn->query($sql_search);
	$result_search = $result_search->fetch_all(MYSQLI_ASSOC);
	//var_dump($result_search[0]['dataid']);
	for($i=0;$i<count($result_search);$i++){

		$sql = 'select * from goodlist where id = "'.$result_search[$i]['dataid'].'"';
		//$sql = 'select price from goodlist where dataid';
		
		$result = $conn->query($sql);
		$result = $result->fetch_all(MYSQLI_ASSOC);
		//var_dump($result[0]);
		$result_search[$i]['detail'] = $result[0];
		
	}
		//var_dump($result_search);
	echo json_encode($result_search,JSON_UNESCAPED_UNICODE);
?>