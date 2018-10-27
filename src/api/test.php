<?php  

$a = [
    [
        'name' => '张三',
        'score' => 60
    ],
    [
        'name' => '李四',
        'score' => 90
    ],
    [
        'name' => '王二',
        'score' => 80
    ],
];
$score = [];
foreach ($a as $key => $value) {
    $score[$key] = $value['score'];
}
array_multisort($score, SORT_DESC, $a);
echo "<pre>";
var_dump($score);
var_dump($a);
echo "</pre>";

?>