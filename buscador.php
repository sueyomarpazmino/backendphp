<?php
  $nameFile = "data-1.json";
  $file = fopen($nameFile, "r");
  $data = fread($file, filesize($nameFile));
  $dataArray = json_decode($data);
  $newData = array();
  $jsonResponse = [];

  foreach ($dataArray as $key => $obj) {
  $Id = $obj->Id;
  $Direccion = $obj->Direccion;
  $Ciudad = $obj->Ciudad;
  $Telefono = $obj->Telefono;
  $Codigo_Postal = $obj->Codigo_Postal;
  $Tipo = $obj->Tipo;
  $Precio = $obj->Precio;

  array_push($jsonResponse, $obj);
  }

  echo json_encode($jsonResponse);

 ?>
