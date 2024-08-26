<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
$file = "example.txt";
$content = "This is the content I want to write to the file.\n";

// Write content to the file
$result = file_put_contents($file, $content, FILE_APPEND);

if ($result !== false) {
    echo "Content has been written to the file.";
} else {
    echo "Failed to write content to the file.";
}
?>