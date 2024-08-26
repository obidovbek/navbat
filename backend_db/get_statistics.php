<?php
	// //enable cors
	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Credentials: true');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
	header("Access-Control-Allow-Headers: Content-Type");

	$filesNames=scandir("statistics/");
	$queue_orders = array();
	foreach ($filesNames as $key => $value) {
		$file = json_decode(file_get_contents("statistics/".$value));
		if((!empty($value))&&!empty($file))array_push($queue_orders, $file);
	}

	$result->queue_orders = $queue_orders;

	print json_encode($result);
		// $myfile = fopen("statistics/view_vacancy/".strtotime(date("h:i:s")).".json", "w") or die("Unable to open file!");
		// fwrite($myfile, json_encode($result));
		// fclose($myfile);
        
		// print json_encode($result);


?>
