<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<section class="salon-header-block" <?= get_block_wrapper_attributes(); ?>>
	<div class="header-block-container">

		<div class="header-section-content">

			<div class="header-uppertext"><?= esc_html($attributes['subSectionText']); ?></div>

			<h2 class="header-section-title"><?= $attributes['title'] ?></h2>

			<div class="map-header-btn">
			<a class="header-section-btn-link" href="<?=$attributes['buttonMapUrl']?>" target="_blank" rel="noopener noreferrer">
					<?=$attributes['buttonMapText']?>
				</a>
				
				<a class="header-section-btn-link" href="<?=$attributes['buttonUrl']?>" target="_blank" rel="noopener noreferrer">
					<?=$attributes['buttonText']?>
				</a>
			</div>


			<p class="header-section-description"><?= esc_html($attributes['underFromText']); ?></p>
		</div>

		<div class="header-section-img">
			<img src="<?= esc_url($attributes['imageUrl']); ?>" alt="Card Image">
		</div>

	</div>
</section>
