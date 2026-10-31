<?php
header('Content-Type: application/json');

$data = [
    "status" => "success",
    "application" => "Web Development Stack",
    "message" => "PHP dan Apache berhasil berjalan!",
    "php_version" => PHP_VERSION,
    "database" => "MySQL"
];

echo json_encode($data, JSON_PRETTY_PRINT);