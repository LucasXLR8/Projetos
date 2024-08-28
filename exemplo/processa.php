<?php
include 'config.php';

$nome = $_POST['nome'];
$email = $_POST['email'];
$idade = $_POST['idade'];

//INSERÇÃO NO BANCO DE DADOS

$sql = "INSERT INTO usuarios (nome, email, idade) VALUES ('$nome', '$email', '$idade')";

if ($conexao -> query ($sql)){
    echo 'Seus dados foram cadastrados com Sucesso!';
}else {
    echo 'Houve um erro na conexão!';
}

?>