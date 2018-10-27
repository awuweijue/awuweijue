<?php  
	$uname = isset($_POST['uname'])?$_POST['uname']:'';

	$psw = isset($_POST['psw'])?$_POST['psw']:'';
	
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$dbname = 'mei';
	$conn = new mysqli($servername,$username,$password,$dbname);
	$conn->set_charset('utf8');
	$sql = 'select uname from phone';
	$result = $conn->query($sql);
	$res = $result->fetch_all(MYSQLI_ASSOC);
	$row = array_column($res,'uname');	
	$has = in_array($uname,$row);
	if ($has==false) {
		$sqlAdd = 'insert into phone (uname,psw) values ("'.$uname.'","'.$psw.'")';
		if($conn->query($sqlAdd)){
			echo 'false';
		}
	}else if($has==true){
		echo 'true';
	}
?>