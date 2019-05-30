<?php

echo "<br><br>";
echo "Задание 1";
echo "<br><br>";

function strName($str) {
    echo basename($str, ".txt"); // someFile
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

$arr_1 = [1, 3, 4, 6, 9];
$arr_2 = [1, 3, 4, 6, 9];
$arr_3 = [1, 3, 4, 6, 9];
$arr_4 = [1, 3, 4, 6, 9];
$arr_5 = [1, 3, 4, 6, 9];

for ($i = 0; i < 5; i++) {
    $random = rand(0, 9);
    echo $random
}