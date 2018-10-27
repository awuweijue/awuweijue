<?php  
	$str = isset($_GET['str'])?$_GET['str']:'';
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$dbname = 'mei';
	$conn = new mysqli($servername,$username,$password,$dbname);
	$conn->set_charset('utf8');
	$sql = 'select name,id from goodlist where brand like "%'.$str.'%"';
	$result = $conn->query($sql);
	$res = $result->fetch_all();
	echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>
