<?php
/**
 * Created by PhpStorm.
 * User: Elsolo
 * Date: 06.09.2017
 * Time: 15:59
 */
if((isset($_POST['userid'])&&$_POST['userid']!="")&&(isset($_POST['tel'])&&$_POST['tel']!="")){
    $to = 'elsolo1710@gmail.com';
    $subject = 'Обратный звонок формы №_1';
    $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['userid'].'</p>
                        <p>Телефон: '.$_POST['tel'].'</p>
                        <br>
                    </body>
                </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: Отправитель <Form_WP_Landing@wp.com>\r\n";
    $is_mail = mail($to, $subject, $message, $headers);
}
if((isset($_POST['userid2'])&&$_POST['userid2']!="")&&(isset($_POST['email'])&&$_POST['email']!="")&&(isset($_POST['tel2'])&&$_POST['tel2']!="")&&(isset($_POST['message2'])&&$_POST['message2']!="")){
    $to = 'elsolo1710@gmail.com';
    $subject = 'Обратный звонок формы №_2';
    $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['userid2'].'</p>
                        <br>
                        <p>Эмайл: '.$_POST['email'].'</p>
                        <br>
                        <p>Телефон: '.$_POST['tel2'].'</p>
                        <br>
                        <p>Сообщение: '.$_POST['message2'].'</p>
                    </body>
                </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: Отправитель  <Form_WP_Landing@wp.com>\r\n";
    $is_mail = mail($to, $subject, $message, $headers);
}
exit;