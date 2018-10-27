<?php  
	$uname = isset($_POST['uname'])?$_POST['uname']:'';
		$servername = 'localhost';
		$username = 'root';
		$password = '';
		$dbname = 'mei';
		$conn = new mysqli($servername,$username,$password,$dbname);
		$conn->set_charset('utf8');
		
		$sql = 'select dataid,qty from buybag where uname="'.$uname.'"';
				
		$result = $conn->query($sql);
		//$result = $result->fetch_all(MYSQLI_ASSOC);
		//
			
		if ($result) {
			$res = $result->fetch_all(MYSQLI_ASSOC);
			//var_dump(count($res));
			for($i=0;$i<count($res);$i++){
				$sql = 'select price,imgUrl,name,id from goodlist where id="'.$res[$i]['dataid'].'"';
				//var_dump($res[$i]);
				if($result = $conn->query($sql)){
					$result = $result->fetch_all(MYSQLI_ASSOC);
					$result[0]['qty'] = $res[$i]['qty'];
					$arr[$i] = $result[0];
				}
				
				
				
				//echo json_encode($res,JSON_UNESCAPED_UNICODE);
			}
			//var_dump($arr);
			echo json_encode($arr,JSON_UNESCAPED_UNICODE);
		}
		
?>