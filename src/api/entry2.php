<?php  
	$uname = isset($_POST['uname'])?$_POST['uname']:'';

	$psw = isset($_POST['psw'])?$_POST['psw']:'';
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$dbname = 'mei';
	$conn = new mysqli($servername,$username,$password,$dbname);
	$conn->set_charset('utf8');
	$sql = 'select psw from phone where uname="'.$uname.'"';
	$res = $conn->query($sql);
	$res = $res->fetch_all(MYSQLI_ASSOC);
	if($res==false){
		echo 'false';
	}else{
		if($res[0]['psw']==$psw){
			echo 'true';
		}else{
			echo 'false';
		}

	}
	
?>