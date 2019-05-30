<?php

echo "<br><br>";
echo "Задание 1";
echo "<br><br>";

function strName ($str) {
    echo basename($str, ".txt");
}

strName('C:\OpenServer\testsite\www\someFile.txt');

echo "<br><br>";
echo "Задание 2";
echo "<br><br>";

$isOperation = 'three';

if ($isOperation === 'one') {
    function strConverter($str) {
        echo strtoupper($str);
    }
} elseif ($isOperation === 'two') {
    function strConverter($str) {
        echo strtolower($str);
    }
} elseif ($isOperation === 'three') {
    function strConverter($str) {
        echo ucwords(strtolower($str));
    }
}

echo strConverter('THis is str for CONVERTATION');

echo "<br><br>";
echo "Задание 3";
echo "<br><br>";


function strNotationConverter(string $str){
   
    $words = explode('_',$str);
   
    if(count($words) > 1){
        $output = '';
        foreach($words as $word){
            $tmp = strtolower($word);
            $output .= ucfirst($tmp);      
        }
        return $output;    
    }else{
        return $str;       
    }      
}
echo strNotationConverter('this_is_string');

echo "<br><br>";
echo "Задание 4";
echo "<br><br>";

$array = [];
$sumArray = [];

for ($i = 0; $i < 5; $i++) {
    for ($k = 0; $k < 5; $k++) {
        $random = rand(0, 9);
        array_push($array, $random);
    }
    print_r($array);
    echo "<br><br>";    
    echo "Sum = " ;
    print_r(array_sum($array)); 
    echo "<br><br>";
    array_push($sumArray, array_sum($array));      
    array_splice($array, 0);
}

$maxValue = max($sumArray);
echo $maxValue;
}