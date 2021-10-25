<?php
$files = $_FILES['files'];
move_uploaded_file($files['tmp_name'], "C:/laragon/www/javascript_webdesign/aula_33/$files[name]");
