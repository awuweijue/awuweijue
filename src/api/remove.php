<?php  
	$uname = isset($_POST['uname'])?$_POST['uname']:'';
	$dataid = isset($_POST['dataid'])?$_POST['dataid']:'';
	$type = isset($_POST['type'])?$_POST['type']:'';
	var_dump($uname,$dataid,$type);
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$dbname = 'mei';
	$conn = new mysqli($servername,$username,$password,$dbname);
	$conn->set_charset('utf8');
	if ($type=='empty') {
		$sql = 'delete from buybag where uname="'.$uname.'"';
	}else{
		$sql = 'delete from buybag where uname="'.$uname.'" and dataid="'.$dataid.'"';
	}
	
			
	$result = $conn->query($sql);
	var_dump($result);
?>