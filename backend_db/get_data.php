<?php
	// //enable cors
	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Credentials: true');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
	header("Access-Control-Allow-Headers: Content-Type");
	$api_data = json_decode(file_get_contents("php://input"));
	if (isset($api_data) && !empty($api_data)) {
		$result;
		$result->status = 0;;
		$file = json_decode(file_get_contents("db/menu.json"));
		if(!empty($file)){
			$result->status = 200;
			$result->menu = $file;
		}
		print json_encode($result); // show contents
	}else{
	    echo "0 results";
	}

?>