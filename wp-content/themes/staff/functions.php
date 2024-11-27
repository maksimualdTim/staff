<?php

add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_style('swiper', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');
    wp_enqueue_style('slick-slider', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css');
    wp_enqueue_style('slick-slider-theme', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css');
    wp_enqueue_style('theme-style', get_stylesheet_uri());



    wp_enqueue_script('jquery', get_template_directory_uri() . '/js/jquery-3.7.1.min.js', '1.0', true);
    wp_enqueue_script('swiper', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js');
    // Подключение скриптов Slick Slider
    wp_enqueue_script('slick-slider', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', ['jquery'], null, true);
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
