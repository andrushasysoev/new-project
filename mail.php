<?php

$bio = $_POST['bio'];
$tel = $_POST['tel'];


$bio = htmlspecialchars($bio);
$tel = htmlspecialchars($tel);


$bio = urldecode($bio);
$tel = urldecode($tel);


$bio = trim($bio);
$tel = trim($tel);



if (mail("sysoev00@mail.ru",
		 "Новое письмо с сайта",
		 "Имя: ".$bio."\n".
		 "Телефон: ".$tel."\n".
		 "From: no-reply@mydomain.ru \r\n")

) {
	echo ('Письмо успешно отправленно!');
}

else {
	echo ('Есть ошибки! Проверьте данные...');
}

?>