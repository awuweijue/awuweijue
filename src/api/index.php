<?php  
	
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$dbname = 'mei';
	$conn = new mysqli($servername,$username,$password,$dbname);
	$conn->set_charset('utf8');
	$sql = 'select imgurl,detail,count from home';
	$result = $conn->query($sql);
	$res = $result->fetch_all(MYSQLI_ASSOC);
	
	echo json_encode($res,JSON_UNESCAPED_UNICODE);

?>