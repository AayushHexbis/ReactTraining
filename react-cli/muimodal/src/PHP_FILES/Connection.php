<? php
header('Access-Control-Allow-Origin: *');
$host = "localhost";
$username = "sa";
$password = "123@hex";
$database = "TestDatabase";

sqlsrv_configure("WarningsReturnAsErrors", 0);

$options = array("UID" => $username, "PWD" => $password, "Database" => $database, "CharacterSet" => "UTF-8");		// Sending Options

$str = 'getpartname';  // Using Stored Procedure Value

$localserver = sqlsrv_connect($host, $options); 	// Establishing Connection

$query = sqlsrv_query($localserver, $str);		// Passing Query

$obj = sqlsrv_fetch_object($query);		// Fetching Object

if ($localserver)								// Checking Connection Established or Not
{
	if ($query)									// Runs Only If Query is fired
	{
		foreach($obj as $key => $value)
		{
			$jsondata = json_encode($obj);		// Encode The Data as JSON (Convert Data as JSON)
			$arr = [$obj];
			echo json_encode($arr);
			//echo $jsondata;						// Printed Data in JSON
		}
	}
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