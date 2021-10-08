<?php
header('Access-Control-Allow-Origin: *');
$host = "localhost";
$username = "sa";
$password = "123@hex";
$database = "TestDatabase";

sqlsrv_configure("WarningsReturnAsErrors", 0);

$options = array("UID" => $username, "PWD" => $password, "Database" => $database, "CharacterSet" => "UTF-8");		// Sending Options

$str = 'SELECT * FROM test_table1';  // Using Stored Procedure Value

$localserver = sqlsrv_connect($host, $options); 	// Establishing Connection

$query = sqlsrv_query($localserver, $str,array(),array('Scrollable' => SQLSRV_CURSOR_KEYSET)) or die("Select Query Unsuccessful");		// Passing Query

// $obj = sqlsrv_fetch_object($query);		// Fetching Object

// $emp =[];

if ($localserver)								// Checking Connection Established or Not
{
	while($row = sqlsrv_fetch_object($query)){
		$jsonArray[] = $row;
	}
	echo json_encode($jsonArray);

	// echo "<pre>";
	// print_r($jsonData);
	// echo "</pre>";
	// echo $num;
		// $a = sqlsrv_fetch_array($query);
		// foreach($a as $b){
		// 	for($i=0; $i<count($a); $i++)
		// 	{
		// 			$c = array();
		// 			$c[$i] = $b;     
		// 	}

		// 	print_r($c);
		// }
			// echo json_encode($row);
			
			// $arr = array_values($row);
			// $emp = [];
			// // $a = $row['part_name'];
			// for($i=0;$i<count($row);$i++){
				
			// 	$emp[$i] = $row['part_name'];
			// }
			// // print_r($arr);
			// print_r($emp);
			// echo $a;
			// echo $arr;
			// $jsondata = json_encode($obj);		// Encode The Data as JSON (Convert Data as JSON)
			// $arr = [$obj];
			// echo json_encode($arr);
			//echo $jsondata;						// Printed Data in JSON
}
else {
    ?>
      <script>
    		alert ("Connection not Successfull");
    	</script>
    <?php
    echo "Connection Not Established";
	die(print_r(sqlsrv_errors(), true));

}
?>