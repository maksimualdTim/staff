<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$items = $attributes['items'] ?? []; ?>

<section class="referal-program section" <?= get_block_wrapper_attributes() ?>>
	<div class="referal-program__sub">
			<div class="referal-program__line"></div>
			<div class="referal-program__text"><?= $attributes['subSectionText'] ?></div>
		</div>

		<h2 class="referal-program__title"> <?= $attributes['title'] ?></h2>

		<ul class="referal-program__list" <?= get_block_wrapper_attributes() ?>>
		<?php foreach ($items as $key => $item): ?>
			<li class="referal-program__item">
				<div class="referal-program__number"><span><?= $key + 1 ?></span></div>
				<div class="referal-program__content">
					<h3 class="referal-program-content__title"><?= esc_html($item['title']) ?></h3>

					<div class="referal-program-content__text">
						<?= esc_html($item['text']) ?>
					</div>
				</div>
			</li>
		<?php endforeach; ?>
	</ul>
</section>
