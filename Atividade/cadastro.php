
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="sucesso.css">
    <title>Confirmação de Cadastro</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="message-container">
    <?php
    include 'conect.php';

    $nome = $_POST['nome'];
    $escolaridade = $_POST['escolaridade'];
    $serie = $_POST['serie'];

//INSERÇÃO NO BANCO DE DADOS

    $sql = "INSERT INTO estudantes (nome, escolaridade, serie) VALUES ('$nome', '$escolaridade', '$serie')";

    if ($conexao -> query ($sql)){
    echo '<div class="message-container">
            <h1>Dados Cadastrados com Sucesso!</h1>
            <p>Seu cadastro foi realizado com sucesso!</p>
            <a href="index.html" class="back-button">Voltar</a>
            </div>';
    
    }else {
    echo 'Houve um erro na conexão!';
    }
    ?>

    </div>
</body>
</html>