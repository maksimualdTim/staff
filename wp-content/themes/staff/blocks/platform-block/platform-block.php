<?php
/**
 * Plugin Name:       Platform Block
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       platform-block
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
function create_block_platform_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_platform_block_block_init' );


add_shortcode( 'platform-breadcrumbs', function() {
	$blog_page_link = get_page_link(pll_get_post(86));
	ob_start();
	?>
	<div class="bread-crumbs">
		<a href="<?= home_url() ?>" class="sections__link"><?= pll__('Главная') ?></a><span>/</span><a href="<?=$blog_page_link?>" class="sections__link"><?=pll__("Оформление")?></a><span>/</span><a href="#" class="sections__link"><?= get_the_title(); ?></a>
	</div>
	<?php
	$output = ob_get_contents(); // всё, что вывели, окажется внутри $output
	ob_end_clean();
	return $output;
} );
