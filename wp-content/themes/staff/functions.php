<?php

add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_style('swiper', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css' ,[], '6.7.2');
    wp_enqueue_style('slick-slider', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css', [], '6.7.2');
    wp_enqueue_style('slick-slider-theme', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css', [], '6.7.2');
    wp_enqueue_style('theme-style', get_stylesheet_uri(), [], '6.7.2');



    wp_enqueue_script('menu-dropdown', get_template_directory_uri() . '/js/menu-dropdown.js', '1.0', '6.7.2');
    wp_enqueue_script('jquery', get_template_directory_uri() . '/js/jquery-3.7.1.min.js', '1.0', '6.7.2');
    wp_enqueue_script('swiper', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', [], '6.7.2');
    // Подключение скриптов Slick Slider
    wp_enqueue_script('slick-slider', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', ['jquery'], '6.7.2', true);
});

require __DIR__ . '/blocks/news-slider-block/news-slider-block.php';
require __DIR__ . '/blocks/advantages-block/advantages-block.php';
require __DIR__ . '/blocks/card-type-block/card-type-block.php';
require __DIR__ . '/blocks/map-block/map-block.php';
require __DIR__ . '/blocks/review-block/review-block.php';
require __DIR__ . '/blocks/form-block/form-block.php';
require __DIR__ . '/blocks/header-block/header-block.php';
require __DIR__ . '/blocks/card-type-sec-block/card-type-sec-block.php';
require __DIR__ . '/blocks/economy-block/economy-block.php';
require __DIR__ . '/blocks/economy-stages/economy-stages.php';
require __DIR__ . '/blocks/about-header-block/about-header-block.php';
require __DIR__ . '/blocks/registration-stages-block/registration-stages-block.php';
require __DIR__ . '/blocks/platform-block/platform-block.php';
require __DIR__ . '/blocks/who-are-we-block/who-are-we-block.php';
require __DIR__ . '/blocks/registration-header-block/registration-header-block.php';
require __DIR__ . '/blocks/referral-page-card-block/referral-page-card-block.php';
require __DIR__ . '/blocks/referral-page-payments-block/referral-page-payments-block.php';
require __DIR__ . '/blocks/referral-page-materials-block/referral-page-materials-block.php';
require __DIR__ . '/blocks/referral-page-header-block/referral-page-header-block.php';
require __DIR__ . '/blocks/referral-page-form-first/referral-page-form-first.php';
require __DIR__ . '/blocks/form-card-page/form-card-page.php';

require __DIR__ . '/blocks/order-form-block/order-form-block.php';
require __DIR__ . '/blocks/map-header-block/map-header-block.php';
require __DIR__ . '/blocks/salon-map-block/salon-map-block.php';
require __DIR__ . '/blocks/calculator-block/calculator-block.php';
require __DIR__ . '/blocks/referal-program-block/referal-program-block.php';


require __DIR__ . '/functions-news.php';
require __DIR__ . '/functions-cabinet.php';

function my_custom_editor_styles() {
    add_editor_style('style.css');
}
add_action('admin_init', 'my_custom_editor_styles');

add_filter( 'block_categories_all' , function( $categories ) {

    // Adding a new category.
	$categories[] = array(
		'slug'  => 'staff-category',
		'title' => 'Staff Atlantic'
	);

	return $categories;
} );


function enable_svg_support($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'enable_svg_support');


// В functions.php или в основном файле вашего плагина.
function my_theme_custom_editor_colors() {
    add_theme_support('editor-color-palette', [
        [
            'name'  => 'Акцентный увет',
            'slug'  => 'primary',
            'color' => '#1260F5', // Замените на нужный вам цвет
        ], 
        [
            'name' => 'Темный цвет',
            'slug' => 'dark-color',
            'color' => '#313131'
        ],
        [
            'name' => 'Grey color',
            'slug' => 'text color',
            'color' => '#999999'
        ]
    ]);

    // Отключить стандартные цвета, если хотите использовать только свои.
    // add_theme_support('disable-custom-colors');
}
add_action('after_setup_theme', 'my_theme_custom_editor_colors');


function my_block_editor_assets() {
    // Enqueue the block editor script
    wp_enqueue_script(
        'block-editor',
        get_template_directory_uri() . '/block-editor.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-data' ),
        filemtime( get_template_directory() . '/block-editor.js' )
    );

    // Pass the theme URL to the JavaScript
    wp_localize_script( 'block-editor', 'myThemeData', array(
        'themeUrl' => get_template_directory_uri(),
    ));
}
add_action( 'enqueue_block_editor_assets', 'my_block_editor_assets' );


add_action( 'wp_enqueue_scripts', function () {
    if(is_singular("news")) {
        wp_enqueue_style("news.css", get_template_directory_uri() . '/news.css');
    }

    // 86 - blog page
    if(is_page(pll_get_post(86))) {
        wp_enqueue_style('output.css', get_template_directory_uri() . '/output.css');
        wp_enqueue_style('pagination.css', get_template_directory_uri() . '/pagination.css');
        wp_enqueue_style("blog.css", get_template_directory_uri() . '/blog.css');
    }
    
    if(is_page_template("contacts")) {
        wp_enqueue_style("contacts.css", get_template_directory_uri() . '/contacts.css');
    }
    
    if(is_page_template('partners')) {
        wp_enqueue_style("partners.css", get_template_directory_uri() . '/partners.css');
    }
});

add_shortcode("breadcrumbs-contacts", function() {
    ob_start();
    ?>
    <div class="bread-crumbs">
        <a href="<?= home_url() ?>" class="sections__link"><?= pll__('Главная') ?></a><span>/</span><a href="#" class="sections__link"><?=pll__("Контакты")?></a>
    </div>
    <?php
    return ob_get_clean();
});

add_shortcode("breadcrumbs-partners", function() {
    ob_start();
    ?>
    <div class="bread-crumbs">
        <a href="<?= home_url() ?>" class="sections__link"><?= pll__('Главная') ?></a><span>/</span><a href="#" class="sections__link"><?=pll__("Контакты")?></a><span>/</span><a href="#" class="sections__link"><?=pll__("Стать партнером")?></a>
    </div>
    <?php
    return ob_get_clean();
});

function add_favicon() {
    echo '<link rel="icon" type="image/png" href="' . get_template_directory_uri() . '/favicon.ico">';
}
add_action('wp_head', 'add_favicon');
add_action('admin_head', 'add_favicon');

pll_register_string('home_url', 'Главная');
pll_register_string('contact_url', 'Контакты');
pll_register_string('partner_url', 'Стать партнером');

pll_register_string('blog_company', 'Блог компании');
pll_register_string('form_callback', 'Форма обратной связи');
pll_register_string('register_url', 'Оформление');


pll_register_string('input_phone', 'Введите номер телефона');
pll_register_string('btn_order_phone', 'Заказать звонок');

add_filter( 'pll_the_languages_args', function( $args ) { $args['display_names_as'] = 'slug'; return $args; } );