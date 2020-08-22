<?php
  // Файлы phpmailer
  require 'PHPMailer.php';
  require 'SMTP.php';
  require 'Exception.php';

  // Переменные, которые отправляет пользователь
  $name = $_POST['user_name'];
  $phone = $_POST['user_pnone'];
  $email = $_POST['user_mail'];
  $text = $_POST['user_message'];
  $file = $_FILES['user_file'];

  if(!$name || $name.length < 0) {
    $name = 'данные отсутствуют.';
  }

  if(!$email || $email.length < 0) {
    $email = 'данные отсутствуют.';
  }

  if(!$text || $text.length < 0) {
    $text = 'данные отсутствуют.';
  }

  // Формирование самого письма
  $title = "Данные заявки: ";
  $body = "
    <b>Имя:</b> $name<br>
    <b>Почта:</b> $email<br><br>
    <b>Телефон:</b> $phone<br><br>
    <b>Сообщение:</b><br>$text
  ";

  // Настройки PHPMailer
  $mail = new PHPMailer;

  try {
      $mail->isSMTP();
      $mail->CharSet = "UTF-8";
      $mail->SMTPAuth   = true;
      //$mail->SMTPDebug = 2;
      $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

      // Настройки вашей почты
      $mail->Host       = 'smtp.timeweb.ru'; // SMTP сервера вашей почты
      $mail->Username   = 'stballs@cp06698.tmweb.ru'; // Логин на почте
      $mail->Password   = 'kerqw623n1'; // Пароль на почте
      $mail->SMTPSecure = 'ssl';
      $mail->Port       = 465;
      $mail->setFrom('stballs@cp06698.tmweb.ru', 'Новая заявка с сайта Steel Balls!'); // Адрес самой почты и имя отправителя

      // Получатель письма
      $mail->addAddress('jury19y@mail.ru');

      // Прикрипление файлов к письму
  if (!empty($file['name'][0])) {
      for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
          $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
          $filename = $file['name'][$ct];
          if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
              $mail->addAttachment($uploadfile, $filename);
              $rfile[] = "Файл $filename прикреплён";
          } else {
              $rfile[] = "Не удалось прикрепить файл $filename";
          }
      }
  }
  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  // Проверяем отравленность сообщения
  if ($mail->send()) {$result = "success";}
  else {$result = "error";}

  } catch (Exception $e) {
      $result = "error";
      $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
  }

  // Отображение результата
  echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
