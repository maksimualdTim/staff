<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$items= $attributes['items'] ?? [];
?>




<section class="platform-block section" <?= get_block_wrapper_attributes(); ?>>

	<div class="platform-block__items" <?= get_block_wrapper_attributes(); ?>>
		<?php foreach ($items as $key => $item): ?>
			<div class="platform-block__item">

				<div class="platform-block__item__text">
					<h3 class="platform-block__item__title"><?= esc_html($item['title']); ?></h3>

					<p class="platform-block__item__description">
						<?= esc_html($item['text']); ?>
					</p>
				</div>

				<div class="platform-block__item__img">
					<?php if (!empty($item['imgUrl'])): ?>
						<img src="<?= esc_url($item['imgUrl']); ?>" alt="Image" style="max-width: 100%;">
					<?php endif; ?>
				</div>
			</div>
		<?php endforeach; ?>
	</div>



</section>
