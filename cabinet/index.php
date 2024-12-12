<?php
session_start();

if(!$_SESSION["is_auth"]) {
    header("Location: " . "/cabinet/login.php");
    exit;
}

require __DIR__ . '/bootstrap.php';
$description_post = get_post(pll_get_post(1));

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="/cabinet/css/login.css">
    <link rel="stylesheet" href="/cabinet/css/cabinet.css">
    <link rel="stylesheet" href="/wp-includes/blocks/social-links/style.min.css?ver=6.7.1">
    <link rel="stylesheet" href="/cabinet/css/header.css">
    
    <title>Document</title>
</head>
<body>
    <div class="container">
        <?php require __DIR__ . '/header.php';?>
        <a href="/cabinet/logout.php" class="logout"><svg viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.75 2.375L13.75 13.625C13.75 13.7908 13.6842 13.9497 13.5669 14.0669C13.4497 14.1842 13.2908 14.25 13.125 14.25L10 14.25L10 15.5L13.125 15.5C13.6223 15.5 14.0992 15.3025 14.4508 14.9508C14.8025 14.5992 15 14.1223 15 13.625L15 2.375C15 1.87772 14.8025 1.40081 14.4508 1.04917C14.0992 0.697544 13.6223 0.5 13.125 0.5L10 0.5L10 1.75L13.125 1.75C13.2908 1.75 13.4497 1.81585 13.5669 1.93306C13.6842 2.05027 13.75 2.20924 13.75 2.375Z" fill="#EF6630"/>
<path d="M0.548126 9.32564L3.41437 12.1919L4.29813 11.3081L1.63313 8.64314L11.875 8.62502L11.875 7.37502L1.59812 7.39314L4.29938 4.69189L3.41563 3.80814L0.549375 6.67439C0.197701 7.02584 1.09004e-05 7.50258 -0.000223747 7.99976C-0.000458394 8.49694 0.196783 8.97386 0.548126 9.32564Z" fill="#EF6630"/>
</svg>
Выйти</a>
        <h1 class="title"><?=pll__("<span>Персональный</span> кабинет")?></h1>
        <iframe src="" frameborder="0" class="iframe"></iframe>
        <div class="news__content_single">
            <?=$description_post->post_content?>
        </div>
        <div class="contacts">
                    <div class="contacts__connect">
                        <div class="contacts__problems">Возникли вопросы или необходима консультация?</div>
                        <div class="contacts__link"><a href="#">Свяжитесь с нами →</a></div>
                    </div>
                    <div class="contacts__materials">
                        <a href="#">
                            <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_376_2653)">
                            <path d="M5.25 9H12.75V10.5H5.25V9ZM5.25 13.5H10.5V12H5.25V13.5ZM16.5 5.6895V18H1.5V2.25C1.5 1.65326 1.73705 1.08097 2.15901 0.65901C2.58097 0.237053 3.15326 0 3.75 0L10.8105 0L16.5 5.6895ZM11.25 5.25H13.9395L11.25 2.5605V5.25ZM15 16.5V6.75H9.75V1.5H3.75C3.55109 1.5 3.36032 1.57902 3.21967 1.71967C3.07902 1.86032 3 2.05109 3 2.25V16.5H15Z" fill="#1260F5" fill-opacity="0.8"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_376_2653">
                            <rect width="18" height="18" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                            Promo materials
                        </a>
                    </div>
                </div>
        </div>
        <?php
            $path = locate_template('parts/footer-cabinet.html', false, false);
            $content = file_get_contents($path);
            echo do_blocks($content);
        ?>
</body>
</html>