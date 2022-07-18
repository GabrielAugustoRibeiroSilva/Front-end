<?php

include_once('conexaologin.php');

$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);

$result_usuarios = "INSERT INTO usuarios (nome, email, created) VALUES ('$name', '$email', Now())";
$resultado_usuario = mysqli_query($conn, $result_usuarios);
