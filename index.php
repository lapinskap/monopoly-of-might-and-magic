<?php
	$a = mysqli_connect("127.0.0.1","root","");

	if ($a) {
		echo "jest";
	} else {
		echo "brak";
	}
	
	mysqli_select_db($a,'3te') or die(' error'); 
	
	$sql = "CREATE TABLE mojatabela(

		id INTEGER NOT NULL auto_increment;
		login VARCHAR(15) NOT NULL;
		haslo VARCHAR(15) NOT NULL;
		PRIMARY KEY(id)
		)";


	$t = mysqli_query($a,$sql)

	$sql = "INSERT INTO mojaTabela VALUES(O,'admin','hasla')";

	mysql.fetch.array;

?>