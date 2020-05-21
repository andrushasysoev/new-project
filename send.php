<?php

$bio = $_POST['bio'];
$tel = $_POST['tel'];
$email = $_POST['email'];


$bio = htmlspecialchars($bio);
$tel = htmlspecialchars($tel);
$email = htmlspecialchars($email);


$bio = urldecode($bio);
$tel = urldecode($tel);
$email = urldecode($email);


$bio = trim($bio);
$tel = trim($tel);
$email = trim($email);


if (mail("sysoev00@mail.ru",
		 "Новое письмо с сайта",
		 "Имя: ".$bio."\n".
		 "Телефон: ".$tel."\n".
		 "Почта: ".$email."\n".
		 "From: no-reply@mydomain.ru \r\n")

) {
	echo ('Письмо успешно отправленно!');
}

else {
	echo ('Есть ошибки! Проверьте данные...');
}

?>