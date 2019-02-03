<?php
$array = range(0, 9);

function sumReducer($acc, $x) { return $acc + $x; }

$n = array_reduce($array, sumReducer, 0);

echo "result: " . $n;
