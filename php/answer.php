<?php

function checkSquare($x, $y, $r): bool
{
    return (($x <= 0) && ($x >= -$r)) && (($y <= 0) && ($y >= -$r));
}

function checkCircle($x, $y, $r): bool
{
    return ($x >= 0) && ($y <= 0) && ($x * $x + $y * $y <= $r * $r);
}

function checkTriangle($x, $y, $r): bool
{
    return ($x >= 0) && ($y >= 0) && ($x + $y <= $r);
}

function checkHit($x, $y, $r) :bool
{
    return checkSquare($x, $y, $r) || checkCircle($x, $y, $r) || checkTriangle($x, $y, $r);
}

$start = microtime(true);

$r = $_GET["r"];
$x = $_GET["x"];
$y = $_GET["y"];
if (!is_numeric($x) || !is_numeric($y) || !is_numeric($r) || strlen($x) > 10 || strlen($y) > 10 || strlen($r) > 10) {
    http_response_code(400);
    die();
}

$hit = checkHit($x, $y, $r) ? "Попал": "Мимо";
if (isset($_GET["time"])) $current_time = date('H:i:s', time()- $_GET['time']*60);
else $current_time = date('H:i:s');


$current_time = date('H:i:s', time()- $_GET['time']*60);
$script_time = number_format(microtime(true) - $start, 8, ".", "") * 1000000;


$response = "{".
    "\"x\":\"$x\",".
    "\"y\":\"$y\",".
    "\"r\":\"$r\",".
    "\"currentTime\":\"$current_time\",".
    "\"scriptTime\":\"$script_time\",".
    "\"hit\":\"$hit\"".
    "}";

echo $response;
