<?php
require __DIR__ . '/bootstrap.php';
session_start();

$token = filter_input(INPUT_POST, 'token', FILTER_SANITIZE_STRING);

if (!$token || $token !== $_SESSION['token']) {
    header($_SERVER['SERVER_PROTOCOL'] . ' 405 Method Not Allowed');

    exit;
}

$username = filter_input(INPUT_POST, 'login', FILTER_SANITIZE_STRING);
$password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);

if (!$username || !$password) {
    // Записываем ошибку в сессию, если логин или пароль пустые
    $_SESSION['auth_error'] = 'Необходимо ввести логин и пароль.';
    header("Location: /cabinet/login.php"); // Редирект на страницу логина
    exit;
}

global $wpdb;
$table_name = $wpdb->prefix . 'clients';
$query = $wpdb->prepare("SELECT * FROM $table_name WHERE username = %s", $username);
$client = $wpdb->get_row($query);

if ($client) {
    // Если клиент найден, проверяем пароль
    // Используем функцию для безопасного сравнения паролей
    if (wp_check_password($password, $client->hashed_password, $client->id)) {
        // Пароль верный, авторизуем пользователя
        $_SESSION['is_auth'] = true;
        $_SESSION['client_id'] = $client->id;
        $_SESSION['client_username'] = $client->username;
        header("Location: /cabinet/"); // Редирект в кабинет клиента
        exit;
    } else {
        // Неверный пароль
        $_SESSION['auth_error'] = 'Неверный логин или пароль.';
        header("Location: /cabinet/login.php"); // Редирект на страницу логина
        exit;
    }
} else {
    // Клиент не найден в базе данных
    $_SESSION['auth_error'] = 'Неверный логин или пароль.';
    header("Location: /cabinet/login.php"); // Редирект на страницу логина
    exit;
}

$_SESSION['is_auth'] = true;

header("Location: " . "/cabinet/");