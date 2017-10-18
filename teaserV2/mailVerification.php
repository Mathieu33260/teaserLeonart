<?php
$mail = $_POST["mail"];
$servername = "playfanfipddb.mysql.db";
$username = "playfanfipddb";
$password = "Dawinweb123";
$dbname = "playfanfipddb";
	try{
		$connect = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
		}
	catch(PDOException $e)
		{
			echo($e->getMessage());
		}	
	$stmt = $connect->prepare("INSERT IGNORE INTO tableMail (mail) VALUES (:mail)");
	$stmt->bindParam(':mail',$mail);
	$stmt->execute();
	if (filter_var($mail, FILTER_VALIDATE_EMAIL)) {
	if($stmt->rowCount() == 0){
				echo "Erreur: Votre mail est déjà présent dans la base de donnée.";
	}else{
				echo "Mail enregistré !";

	}
}else{
	echo "Mail incorrect, veuillez réessayer.";
}
	$connect = null;

?>