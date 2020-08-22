<?php
    $fName = 'Имя: '.$_POST['name'].' <br />';
    $fMail =  'Почта: '.$_POST['phone'].' <br />';
    //$fMessage =  'Сообщение: '.$_POST['ask-us-text'].' <br />';
    $AllInOne =  $fName.$fMail;//.$fMessage;
    $to = 'jury19y@mail.ru';
    $headers="From: Заявка с сайта Steel Balls\nContent-Type: text/html; charset=\"utf-8\"\n";
    // функция, которая отправляет наше письмо
    mail($to, 'Свяжитесь с нами', $AllInOne, $headers);
?>
