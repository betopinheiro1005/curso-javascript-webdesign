<?php

$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS);
$gender = filter_input(INPUT_POST, 'gender', FILTER_SANITIZE_SPECIAL_CHARS);
$color = filter_input(INPUT_POST, 'color', FILTER_SANITIZE_SPECIAL_CHARS);
$confirmation = filter_input(INPUT_POST, 'confirmation', FILTER_SANITIZE_SPECIAL_CHARS);

$arr = [
  'name' => $name,
  'message' => $message,
  'gender' => $gender,
  'color' => $color,
  'confirmation' => $confirmation,
  'state' => 'SP',
  'city' => 'São Paulo'
];
echo json_encode($arr);
