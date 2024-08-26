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
		if(!empty($file)){
			foreach ($api_data->changes as $key => $value) {
				$idx1 = $value->idx1;
				$idx2 = $value->idx2;
				$idx2_name = $value->idx2_name;

			   	$time = time();
				$statistics = (object)[
					'service_name' => $idx2_name,
					'date' => date("d.m.Y H:i:s", $time + 18000)
				];
				$myfile = fopen("statistics/".$time.".json", "w") or die("Unable to open file!");
				fwrite($myfile, json_encode($statistics));
				fclose($myfile);

				$queue = $value->queue;
				$date = $value->date;
				if(($file[$idx1]->inner_menu[$idx2]->queue->date)!=$date){
					foreach ($file as $key_m => $menu) {
						foreach ($menu->inner_menu as $key_s => $sub) {
							$sub->queue->date = $date;
							$sub->queue->current = 1;
							$sub->queue->overall = 1;
						}
					}
					// $file[$idx1]->inner_menu[$idx2]->queue->date = $date;
					$queue = 2;
		            // $file[$idx1]->inner_menu[$idx2]->queue->current = $queue;

				}
	            $file[$idx1]->inner_menu[$idx2]->queue->overall = $queue;
			}
    // this.dataService.menu[this.dataService.selected.index].inner_menu[idx].queue.overall ++;
            if(file_put_contents("db/menu.json", json_encode($file))){
				$result->status = 200;
				$result->menu = $file;
            }
		}
		print json_encode($result); // show contents
	}else{
	    echo "0 results";
	}

?>