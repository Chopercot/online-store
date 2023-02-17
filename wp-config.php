<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки базы данных
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'arsen' );

/** Имя пользователя базы данных */
define( 'DB_USER', 'root' );

/** Пароль к базе данных */
define( 'DB_PASSWORD', '' );

/** Имя сервера базы данных */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'l{,%H:S69(OJ%<?j|6c!Kyw0xUewObU]aT0=7!Ds;9GeL7Smb)O,RKwQ/}&;u:pa' );
define( 'SECURE_AUTH_KEY',  'vcMK~KTzj[5?[:DA[r*~ArF!TYD+n_XInKH?UufwQ2M-cba/jX*F > m `ZU%>3u' );
define( 'LOGGED_IN_KEY',    'f{gEps-o]-^IK;d9how0CU-dpX-gp/{S.LV01%ZH[/K;:T:rX:s{rzeLXk6DJ[Oq' );
define( 'NONCE_KEY',        '6B:g0nYS-:3/ip_ /4%zUu;qe=>uP<7qh#q};jqZ0#qvQ4AF+~^mX>b1f?y=q+~r' );
define( 'AUTH_SALT',        'Rp5IQ(Mo=pobu|dVA5x&{V,}Fs.{)Z6HuO`=8;UlzcWoK;2N)WH]]PKk|NO98h+f' );
define( 'SECURE_AUTH_SALT', 'cb<py%SN<hA(>Jn?Q,hupV]#R$N5-.oZP/g]*dx[cRrE:y!QX]3K-2!qcC**7l~u' );
define( 'LOGGED_IN_SALT',   'uWAmh<x#Ehsp@iv|NJgB:[u}EXOC6Ya/d-d0ghl|h{i,CExJ/>opjx5.5=&1N(dh' );
define( 'NONCE_SALT',       '(]A[a%?*27]}OTxT@Wf#{!]/}bJwe|2Ys+U*.({$E6_},zlgK}mZOt/!S:5ru=%m' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
