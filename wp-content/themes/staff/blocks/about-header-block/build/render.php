<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<section class="about-header section" <?= get_block_wrapper_attributes(); ?>>
	<div class="bread-crumbs">
			<a href="<?= home_url() ?>" class="sections__link"><?= pll__('Главная') ?></a>
			<span>/</span>
			<a href="#" class="sections__link"><?= the_title(); ?></a>
	</div>
	<div class="about-header-block-container">

		<div class="about-header-section-content">

			<div class="about-header-uppertext"><?= esc_html($attributes['subSectionText']); ?></div>

			<h2 class="about-header-section-title"><?= $attributes['title'] ?></h2>

			<div class="about-header-section-under">
				<p class="about-header-section-description"><?= esc_html($attributes['underFromText']); ?></p>
			</div>

		</div>

		<div class="about-header-section-img">
			<img src="<?= esc_url($attributes['imageUrl']); ?>" alt="Card Image">
		</div>
	</div>
</section>

