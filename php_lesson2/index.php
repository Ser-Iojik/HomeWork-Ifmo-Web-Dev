<?php

echo "Задание 1"

echo "<br/><br/>";

$num = 800;
$i = 0;

do {
    $i++;
    $num = $num/2;
} while($num >= 50);

echo "Цикл While: <br/>";
echo "Кол-во итераций: $i<br/>";
echo "Получилось число: $num<br/><br/>";

$num = 800;
$i = 0;

for (1;1;) {
    $i++;
    $num = $num/2;

    if ($num < 50) 
        break;
}

echo "Цикл For: <br/>";
echo "Кол-во итераций: $i<br/>";
echo "Получилось число: $num";

echo "<br/><br/>";

echo "Задание 2"

echo "<br/><br/>";

$goods = [
    [
        'id'=>1,
        'title'=>'Piano',
        'price'=>2345
    ],
    [
        'id'=>2,
        'title'=>'Guitar',
        'price'=>1753
    ],
    [
        'id'=>3,
        'title'=>'Drum',
        'price'=>1224
    ],
];
// TODO: получить товар из массива $goods по id, сохранить в переменную $good
$id = (int) $_GET['id'];

foreach($goods as $item) {
    if($item['id'] == $id) {
        $good = $item;
    }
}

$isAuth = true; // флаг - авторизован пользователь или нет
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<section>
<!--    TODO: вывести информацию о товаре $good-->
<?php if($good): ?>
    <p>ID: <?php echo $good['id']; ?></p>
    <p>Заголовок: <?php echo $good['title']; ?></p>
    <p>Цена: <?php echo $good['price']; ?></p>
<?php else:?>
    <p>Товар не найден!</p>
<?php endif;?>
</section>


<!--    TODO: если пользователь авторизован $isAuth - отобразить блок для добавления комментариев, в противном случае, сообщить, что ему нужно авторизоваться-->
<?php if($isAuth === true): ?>
    <textarea></textarea><br>
    <input type="submit" value="Добавить комментарий">
<?php else:?>
    <p>Для добавления комментариев вам следует авторизоваться</p>
<?php endif;?>

</body>
</html>


<?php

echo "Задание 3"

echo "<br/><br/>";

$week = array (
    1 => 'Понедельник',
    2 => 'Вторник',
    3 => 'Среда',
    4 => 'Четверг',
    5 => 'Пятница',
    6 => 'Суббота',
    7 => 'Воскресенье'
);
foreach ($week as $key => $day) {
    if(date('N') == $key) {
        echo '<b>'.$day.'</b><br/>';
    }
    else {
        echo $day.'<br/>';
    }
}

echo "<br/><br/>";

echo "Задание 4"

echo "<br/><br/>";

$arr = [
    '1'=> [
        'price' => 1500,
        'count' => 10
    ],
    '2'=> [
        'price' => 300,
        'count' => 40
    ],
    '3'=> [
        'price' => 2000,
        'count' => 50
    ],
    '4'=> [
        'price' => 1900,
        'count' => 3
    ],
    '5'=> [
        'price' => 8000,
        'count' => 0
    ],
];
usort ($arr, function ($item1, $item2) {
    return $item1['price'] <=> $item2['price'];
});