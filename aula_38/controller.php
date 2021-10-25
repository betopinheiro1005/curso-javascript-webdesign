<?php

/* O controller executará no lado servidor a requisição e retornará uma resposta. */

$arr = [
  'name' => 'Thiago',
  'age' => 18
];

echo json_encode($arr);
