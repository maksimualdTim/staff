<?php

add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_style( 'main', get_template_directory_uri() . '/style/main.css' );
    wp_enqueue_style('swiper', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');

    wp_enqueue_script('swiper', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js');
});

require __DIR__ . '/blocks/news-slider-block/news-slider-block.php';
require __DIR__ . '/blocks/advantages-block/advantages-block.php';

function my_custom_editor_styles() {
    add_editor_style('editor-style.css');
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