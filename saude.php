<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="saude.css">
    <title>Document</title>
</head>
<body>
    <div class="central">
        <?php

        // RECEBENDO AS VARIAVEIS GLOBAIS

        $nome = $_POST['nome'];
        $peso = $_POST['peso'];
        $altura = number_format($_POST['altura'],2);
        $hipertenso = $_POST['hipertenso'];

        // CALCULANDO IMC
        $imc = round($peso / ($altura * $altura),2);

        // CONDIÇOES DO IMC
        if ($imc < 18.5) {
            $situacao = "Magreza";
        } else if ($imc >= 18.5 and $imc < 24.9) {
            $situacao = "Normal";
        } else if ($imc >= 25 and $imc < 29.9 and $hipertenso == "sim") {
            $situacao = "Sobrepeso, Pega visão";
        } else if ($imc >= 30 and $imc < 34.9 and $hipertenso == "sim") {
            $situacao = "Obesidade grau I, Faça dieta seu guloso(a)";
        } else if ($imc >= 35 and $imc < 39.9 and $hipertenso == "sim") {
            $situacao = "Obesidade grau II (severa), voce vai morrer";
        } else {
            $situacao = "Obesidade grau III (mórbida), Ja ta com o pé no caixao";
        }
        
        // EXIBIÇÃO DOS RESULTADOS

        echo '<h2> O seu imc é </h2>'.$imc.'<h2> A sua situação é de </h2>'.$situacao;

        ?>
    </div>
</body>
</html>