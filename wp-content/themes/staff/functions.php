<?php

add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_style('swiper', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');
    wp_enqueue_style('theme-style', get_stylesheet_uri());

    wp_enqueue_script('swiper', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js');
});

require __DIR__ . '/blocks/news-slider-block/news-slider-block.php';
require __DIR__ . '/blocks/advantages-block/advantages-block.php';

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
