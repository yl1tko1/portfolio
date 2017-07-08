<?php
/* Здесь мы проверяем существуют ли переменные, которые передала форма обратной связи. Если не существуют, то мы их создаем */
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['phone'])) {$tel = $_POST['phone'];}
if (isset($_POST['email'])) {$text = $_POST['email'];}


/* Здесь необходимо вписать ваш e-mail адрес */
$address = "info@freshsweetbox.com"; 

/* Здесь вписуете тему, которая будет отображаться в теме письма */
$sub = "Заявка на бесплатную консультацию [Шапка]";

/* А здесь прописываете сам текст сообщения, который будет Вам отправлен. Если Вам необходимо начать новую строку необходимо поставить n */
$mes = "Имя: $name \nТелефон: $phone \nE-mail: $email";

/* А это функция, как раз занимается отправкой письма на указанный выше адрес */
$send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8");

ini_set('short_open_tag', 'On');
// header('Refresh: 3; URL=index.html');
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- <meta http-equiv="refresh" content="3; url=index.html"> -->
<title>Спасибо за Вашу заявку</title>
<meta name="generator">

    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,800' rel='stylesheet' type='text/css'>
<style>
    body {
        margin: 0;
        padding: 0
    }
    .wrapper {
        font-family: 'Open Sans';
        width: 1024px;
        margin: 0 auto;

    }
    h1 {
        text-align: center;
        color: green;
        font-weight: 700;

    }
    p {
        text-align: center;
    }
    img {
        margin: 0 auto;
        width: 10%;
        display: block;
    }
    .wrapsend {
        min-height: 600px;
        background: url(img/torty-na-zakaz.jpg) center bottom no-repeat;
        width: 100%;
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .white {
    background: #FFF;
    width: 50%;
    margin: 50px auto;
    padding: 20px;
}
</style>
 
</head>
<body>

<section class="wrapsend">
	<div class="wrapper">
        <div class="white">
             <h1>Спасибо! Ваша Заявка Принята!</h1>
             <p>В ближайшее время с Вами свяжется наш менеджер и проконсультирует по всем вопросам, которые Вас интересует.</p>   
        </div>
    </div>
</section>
</body>
</html>