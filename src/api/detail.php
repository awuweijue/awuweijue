<?php  
	$dataid = isset($_POST['dataid'])?$_POST['dataid']:'';
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$dbname = 'mei';
	//echo $dataid;
	$conn = new mysqli($servername,$username,$password,$dbname);
	$conn->set_charset('utf8');
	$sql = 'select imgUrl,name,price,id,brand,count,type from goodlist where id = "'.$dataid.'"';
	$result = $conn->query($sql);
	$res = $result->fetch_all(MYSQLI_ASSOC);
	echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>