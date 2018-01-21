<?php

$myfile = fopen("topic.txt", "w") or die("Unable to open file!");
$txt = $_POST['topic'];
fwrite($myfile, $txt);
fwrite($myfile, "nott");

$python = `python test.py`;
echo $python + " ddd";

?>
