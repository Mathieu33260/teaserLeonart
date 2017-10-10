<!DOCTYPE html>
<html>
<head>
	<script type="text/javascript" src="src/minified/TweenMax.min.js"></script>
	<script type="text/javascript" src="src/script.js"></script>
	<link rel="stylesheet" type="text/css" href="src/style.css"/>
	<title>Test</title>
</head>
<body>
<div id="container">
	<div id="containerAnim">
	  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 729 110" xml:space="preserve">

	<defs>
		<clipPath id="mm1">
			<rect x="184.279" y="77.308" width="87.764" height="120"></rect>
		</clipPath>
	</defs>
<g id="bg">
	</g>

	<rect id="a3v" x="28.974" y="0.903" fill="#33B0E5"/>
	<rect class="mult" id="a3h" x="28.974" y="76.903" fill="#DA3F8A" width="74.857" height="34.203"/>
	<rect class="mult" id="b3h" x="120.939" y="0.903" fill="#FCB915" width="74.858" height="28.202"/>
	<rect class="mult" id="b4h" x="120.939" y="0.903" fill="#FCB915" width="74.858" height="28.202"/>
	<rect class="mult" id="b5h" x="120.939" y="0.903" fill="#FCB915" width="74.858" height="28.202"/>
	<circle id="b5b" fill="#DB3C7D" cx="306.926" cy="98.005" r="41.626"/>
	<circle class="mult" id="b5s" fill="#25B3D6" cx="264.926" cy="54.005" r="15.876" opacity="0"/>
	<rect id="b6r" x="378.974" y="0.903" fill="#33B0E5" width="30.365" height="109.706"/>
		<polygon id="b1l" fill="#3BB889" points="410,110.5 338,0 338,110.5 	"/>
			
			<polygon id="a1t" fill="#DC3B7D" points="475,0 425,110 525,110"/>
		<polygon id="b2l" fill="#3BB889" points="618,110.5 543,29 543,110.5 	"/>
	<circle id="b6b" fill="#DB3C7D" cx="580.926" cy="38.005" r="38.626"/>
	<rect id="a3y" x="658.974" y="0.903" fill="#33B0E5" width="39.365" height="109.706"/>
	<rect class="mult" id="a3z" x="640.974" y="0.903" fill="#DA3F8A" width="74.857" height="34.203"/>
	</g>
</svg>
</div>
</div>

<form method="POST">
	<input type="email" name="mail" >
	<input type="submit" value="Send">
</form>
<?php
$mail = $_POST["mail"];
$servername = "playfanfipddb.mysql.db";
$username = "playfanfipddb";
$password = "Dawinweb123";
$dbname = "playfanfipddb";

try{
	$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$sql = "INSERT INTO testMail (mail) VALUES ('$mail')";
	$conn->exec($sql);
	echo "SUCCESS";
}catch(PDOException $e)
{
}
$conn = null;
?>
</body>
	<script type="text/javascript" src="src/script.js"></script>

</html>