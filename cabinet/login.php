<?php
require __DIR__ . '/bootstrap.php';

session_start();
$_SESSION['token'] = md5(uniqid(mt_rand(), true));

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="/cabinet/css/header.css">
    <link rel="stylesheet" href="/cabinet/css/login.css">

    <title>Cabinet</title>
</head>
<body>
    <div class="login-wrapper">
        <div class="login-left">
            <div class="container">
                <?php require __DIR__ . '/header.php';?>
                <h1 class="title"><?=pll__("<span>Персональный</span> кабинет")?></h1>
                <div class="subtitle"><?=pll__("Пожалуйста, введите ваш логин и пароль")?></div>
                <form action="/cabinet/login-action.php" class="form" method="post">
                    <input type="hidden" name="token" value="<?php echo $_SESSION['token'] ?? '' ?>">
                    <div class="fields">
                        <fieldset class="fieldset_login">
                            <label for="login">Логин</label>
                            <input type="text" name="login" id="login" placeholder="Введите ваш логин">
                        </fieldset>
                        <fieldset>
                            <label for="password">Пароль</label>
                            <input type="password" name="password" id="password" placeholder="Например: 481282eyt234">
                        </fieldset>
                    </div>
                    <?php
                        if(!empty($_SESSION['auth_error'])):
                        ?>
                        <div class="errors">
                            <?=$_SESSION['auth_error']?>
                        </div>
                    <?php
                        $_SESSION['auth_error'] = null; 
                        endif;?>
                    <div><input class="loginbtn" type="submit" value="<?=pll__("Войти в кабинет")?>"></div>
                </form>
                <div class="contacts">
                    <div class="contacts__connect">
                        <div class="contacts__problems">Проблемы с авторизацией?</div>
                        <div class="contacts__link"><a href="#">Свяжитесь с нами →</a></div>
                    </div>
                    <div class="contacts__materials">
                        <a href="#"><svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_376_2653)">
<path d="M5.25 9H12.75V10.5H5.25V9ZM5.25 13.5H10.5V12H5.25V13.5ZM16.5 5.6895V18H1.5V2.25C1.5 1.65326 1.73705 1.08097 2.15901 0.65901C2.58097 0.237053 3.15326 0 3.75 0L10.8105 0L16.5 5.6895ZM11.25 5.25H13.9395L11.25 2.5605V5.25ZM15 16.5V6.75H9.75V1.5H3.75C3.55109 1.5 3.36032 1.57902 3.21967 1.71967C3.07902 1.86032 3 2.05109 3 2.25V16.5H15Z" fill="#1260F5" fill-opacity="0.8"/>
</g>
<defs>
<clipPath id="clip0_376_2653">
<rect width="18" height="18" fill="white"/>
</clipPath>
</defs>
</svg>
Promo materials</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="login-right">
            <img src="/cabinet/login.png" alt="login image">
        </div>
    </div>
</body>
</html>