<?php
/**
 * Plugin Name:       News Slider Block
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       news-slider-block
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_news_slider_block_block_init() {
	register_block_type( __DIR__ . '/build');
}
add_action( 'init', 'create_block_news_slider_block_block_init' );

function register_news_post_type() {
    $labels = array(
        'name'               => 'Новости',
        'singular_name'      => 'Новость',
        'menu_name'          => 'Новости',
        'name_admin_bar'     => 'Новость',
        'add_new'            => 'Добавить новость',
        'add_new_item'       => 'Добавить новую новость',
        'new_item'           => 'Новая новость',
        'edit_item'          => 'Редактировать новость',
        'view_item'          => 'Просмотр новости',
        'all_items'          => 'Все новости',
        'search_items'       => 'Поиск новостей',
        'not_found'          => 'Новости не найдены',
        'not_found_in_trash' => 'Новости в корзине не найдены'
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'news'),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 5,
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon'          => 'dashicons-admin-site', // Иконка для меню
		'show_in_rest' => true,
		'rest_base' => 'news'
    );

    register_post_type('news', $args);
}
add_action('init', 'register_news_post_type');
