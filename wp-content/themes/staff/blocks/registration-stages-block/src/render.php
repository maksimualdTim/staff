<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$items= $attributes['items'] ?? [];

?>

<section class="registration-stages section" <?= get_block_wrapper_attributes(); ?>>

	<div class="registration-stages__block">
		<?php if (!empty($attributes['title'])): ?>
			<h3 class="registration-stages-title"><?=$attributes['title']?></h3>
		<?php endif; ?>
	</div>



	<div class="registration-stages-block__stages" <?= get_block_wrapper_attributes(); ?>>
		<?php foreach ($items as $key => $item): ?>
			<div class="registration-stages-block__stage">
				<!-- Порядковый номер блока -->
				<span class="registration-stage__number"><?= $key + 1; ?></span>
				<div class="stage__content">

					<h3 class="registration-block-stage__title"><?= esc_html($item['title']); ?></h3>

					<div class="registration-block-stage__text">
						<?= esc_html($item['text']); ?>
					</div>

					<?php if (!empty($item['btnUrl'])): ?>
						<a href="<?= esc_url($item['btnUrl']); ?>" class="registration-block-stage__link">
							Platform presentation →
						</a>
					<?php endif; ?>

				</div>
			</div>
		<?php endforeach; ?>
	</div>



</section>



