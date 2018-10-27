<?php  
	$dataid = isset($_POST['dataid'])?$_POST['dataid']:'';
	$qty = isset($_POST['qty'])?$_POST['qty']:'';
	$color = isset($_POST['color'])?$_POST['color']:'';
	$size = isset($_POST['size'])?$_POST['size']:'';
	$uname = isset($_POST['uname'])?$_POST['uname']:'';
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$dbname = 'mei';
	$conn = new mysqli($servername,$username,$password,$dbname);
	$conn->set_charset('utf8');
	$sql_search = 'select qty from buybag where dataid = "'.$dataid.'" and uname= "'.$uname.'"';
	$result_search = $conn->query($sql_search);
	$result_search = $result_search->fetch_all(MYSQLI_ASSOC);
	//var_dump($result_search[0]['qty']);
	//var_dump($qty);
	if ($result_search) {
		$qty = $qty + $result_search[0]['qty'];
		//var_dump($qty);
		$sql_update = 'update buybag set qty = "'.$qty.'" where dataid = "'.$dataid.'" and uname= "'.$uname.'"';
		//$sql_update = 'update buybag set qty=5 where uname = "'.$uname.'"';
		$result_update = $conn->query($sql_update);
		//var_dump($result_update);
		echo 'true';
	}else{
		$sql_add = 'insert into buybag(uname,qty,color,size,dataid) values("'.$uname.'","'.$qty.'","'.$color.'","'.$size.'","'.$dataid.'") ';
		$result_add = $conn->query($sql_add);
		if ($result_add) {
			echo 'true';
		}else{
			echo 'false';
		}
	}
	
?>