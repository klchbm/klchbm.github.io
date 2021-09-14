<?php
//Recourse: https://www.youtube.com/watch?v=h66N2QqDZZI&list=PLpvL1C_oZsr845DR-kMLhUN_8Ls-zZr5t&index=5
    // Set the cookie to expire
	setcookie('username', '', 1);
    // And redirect the user to the login
	header("Location: index.html");
	exit;
?>
