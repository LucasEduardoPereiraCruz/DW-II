<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>If somente - PHP</title>
    <style>
        #resposta{
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>If somente - PHP</h1>
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
        <label for="idade">Idade: </label>
        <input type="text" id="idade" name="idade"/>
        <input type="submit" value="Verificar">
    </form>
    <hr/>
    <?php
        if($_SERVER["REQUEST_METHOD"] == "POST"){
            $_idade = $_POST["idade"];
            $_resultado = "Você é menor de idade!";

            if($_idade >= 18){
                $_resultado = "Você é maior de idade!";
            }
            echo "<p id='resposta'>$_resultado</p>";
        }
    ?>
</body>
</html>
