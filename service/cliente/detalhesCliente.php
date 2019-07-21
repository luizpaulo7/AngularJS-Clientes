<?php

require_once("../db/conexao.php");

$sql = ("SELECT * FROM 
                    TBL_CLIENTE 
                WHERE 
                    ID_CLIENTE = :ID_CLIENTE
            ");

$stmt = Db::init()->prepare($sql);
$stmt->bindValue(":ID_CLIENTE", $_GET['ID_CLIENTE'], PDO::PARAM_INT);
$stmt->execute();

echo json_encode($stmt->fetch(PDO::FETCH_ASSOC));