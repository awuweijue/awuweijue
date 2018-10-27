<?php  
	$uname = isset($_POST['uname'])?$_POST['uname']:'';
	$dataid = isset($_POST['dataid'])?$_POST['dataid']:'';
	$type = isset($_POST['type'])?$_POST['type']:'';
	$qty = isset($_POST['qty'])?$_POST['qty']:'';
	var_dump($qty);
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$dbname = 'mei';
	//echo $dataid;
	$conn = new mysqli($servername,$username,$password,$dbname);
	$conn->set_charset('utf8');

	if ($type) {
		$sql = 'update buybag set qty = "'.$qty.'" where dataid = "'.$dataid.'" and uname= "'.$uname.'"';
		$result = $conn->query($sql);

	}
?>