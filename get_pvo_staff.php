<?php
	// //enable cors
	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Credentials: true');
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
	header("Access-Control-Allow-Headers: Content-Type");
	$api_data = json_decode(file_get_contents("php://input"));
	$hotel_data = array();
	//if (isset($api_data) && !empty($api_data)&& ($api_data->d === "YGFDSFBDUnu89345njkdf")) {
		$result;
		$result->status = 0;
		// $api_data = $api_data->index_data;
		$filesNames=scandir("pvoIns");
		$users=array();
		foreach ($filesNames as $key => $value) {
			if (file_exists("pvoIns/".$value)) {
				$file = json_decode(file_get_contents("pvoIns/".$value));
				if(!empty($file)){
					
					// $pvo->academic_degree = $file->academic_degree;
					// $pvo->academic_title = $file->academic_title;
					// $pvo->added_id = $file->added_id;
					// $pvo->born = $file->born;
					// $pvo->fakul = $file->fakul;
					// $pvo->fname = $file->fname;
					// $pvo->kafed = $file->kafed;
					// $pvo->lname = $file->lname;
					// $pvo->patronymic = $file->patronymic;
					// $pvo->rank = $file->rank;
					// $pvo->state_type = $file->state_type;
					// $pvo->wagerate = $file->wagerate;
					array_push($users,$file);
				};
			}
		}
		$result->users = $users;
		$result->status = 200;
		print json_encode($result); // show contents
		echo $result;
	/*}else{
	    echo "0 result";
	}*/

?>