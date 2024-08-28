<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="sucesso.css">
    <title>Confirmação de Cadastro</title>
</head>
<body>
    <div class="message-container">
        <h1>Lista de Estudantes Cadastrados</h1>
        <?php
        include 'conect.php';

        $sql = "SELECT * FROM estudantes";
        $resultado = $conexao->query($sql);

        if ($resultado->num_rows > 0) {
            echo '<table>';
            echo '<thead>
                    <tr>
                        <th>Nome</th>
                        <th>Escolaridade</th>
                        <th>Série</th>
                    </tr>
                  </thead>';
            echo '<tbody>';
            while ($linha = $resultado->fetch_assoc()) {
                echo '<tr>';
                echo '<td>' . htmlspecialchars($linha["nome"]) . '</td>';
                echo '<td>' . htmlspecialchars($linha["escolaridade"]) . '</td>';
                echo '<td>' . htmlspecialchars($linha["serie"]) . '</td>';
                echo '</tr>';
            }
            echo '</tbody>';
            echo '</table>';
        } else {
            echo '<p>Nenhum estudante cadastrado.</p>';
        }
        ?>
        <a href="index.html" class="back-button">Voltar</a>
    </div>
</body>
</html>
