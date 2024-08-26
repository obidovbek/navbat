<?php
	// //enable cors
	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Credentials: true');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
	header("Access-Control-Allow-Headers: Content-Type");
	$api_data = json_decode(file_get_contents("php://input"));
	if (isset($api_data) && !empty($api_data)) {
		$menu_new = $api_data->menu_new;
		$result;
		$result->status = 0;
		if(!empty($menu_new)){
			if(file_put_contents("db/menu.json", json_encode($menu_new))){
				$result->status = 200;
			}
		}
		print json_encode($result); // show contents
	}else{
	    echo "0 results";
	}

?>