<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<section class="credit section" <?= get_block_wrapper_attributes(); ?>>


	<div class="section__sub">
		<div class="section__line"></div>
		<div class="section__text"><?=$attributes['subSectionText']?></div>
		<?php if(!empty($attributes['subSectionNum'])):?>
			<div class="section__number">/ <?=$attributes['subSectionNum']?> /</div>
		<?php endif;?>
	</div>


	<div class="credit-section-content">
		<div class="card-preview">
			<h2 class="credit-section-title"><?= esc_html($attributes['title']); ?></h2>
			<p class="credit-section-description"><?= esc_html($attributes['descriptionText']); ?></p>
			<div class="card-preview-btns">
				<a href="<?= esc_url($attributes['firstButtonUrl']); ?> " class="credit-section-btn btn-left"><?= esc_html($attributes['firstButtonText']); ?> </a>
				<a href="<?= esc_url($attributes['secondButtonUrl']); ?>" class="credit-section-btn btn-right"><?= esc_html($attributes['secondButtonText']); ?> </a>
			</div>
		</div>

		<div class="credit-section-img">
			<img src="<?= esc_url($attributes['imageUrl']); ?>" alt="Card Image">
		</div>
	</div>

</section>
