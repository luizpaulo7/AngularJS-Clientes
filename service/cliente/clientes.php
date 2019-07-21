<?php

require_once("../db/conexao.php");

$clientes = Db::init()->query("SELECT * FROM TBL_CLIENTE")->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($clientes);