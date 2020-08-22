<?php

  $recepient = "jury19y@mail.ru";
  $sitename = "Steel Balls";

  $name = trim($_POST["name"]);
  $message = "Имя: $name;

  $pagetitle = "Новая заявка с сайта \"$sitename\"";
  mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>
