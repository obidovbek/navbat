<?php
	// //enable cors
	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Credentials: true');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
	header("Access-Control-Allow-Headers: Content-Type");
	$api_data = json_decode(file_get_contents("php://input"));
	if (isset($api_data) && !empty($api_data)) {
		$result;
		$result->status = 0;
		$file = json_decode(file_get_contents("db/menu.json"));
		$menu_idx = $api_data->menu_idx;
		$menu_sub_idx = $api_data->menu_sub_idx;
		if(!empty($file)){
			if($file[$menu_idx]->inner_menu[$menu_sub_idx]->queue->overall>$file[$menu_idx]->inner_menu[$menu_sub_idx]->queue->current){
				$file[$menu_idx]->inner_menu[$menu_sub_idx]->queue->current += 1;
	            if(file_put_contents("db/menu.json", json_encode($file))){
					$result->status = 200;
	            }
			}else{
				$result->status = 201;
			}
			$result->menu = $file;
		}
		print json_encode($result); // show contents
	}else{
	    echo "0 results";
	}

?>