<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$items = $attributes['items'] ?? [];
?>


<section class="referral_page_payments section" <?= get_block_wrapper_attributes(); ?>>



	<div class="section__sub">
		<div class="section__line"></div>
		<div class="section__text"><?=$attributes['subSectionText']?></div>
	</div>

	<?php if (!empty($attributes['title'])): ?>
		<h3 class="referral_page_payments__title"><?=$attributes['title']?></h3>
	<?php endif; ?>





	<div class="referral_page_payments__blocks__container">
		<?php foreach ($items as $key => $item): ?>
			<div class="referral_page_payments__block">

				<div class="referral_page_payments__block__img">
					<?php if (!empty($item['imgUrl'])): ?>
						<img src="<?= esc_url($item['imgUrl']); ?>" alt="Image" style="max-width: 100%;">
					<?php endif; ?>
				</div>

				<h4 class="referral_page_payments__block__title"><?= esc_html($item['title']); ?></h4>

				<p class="referral_page_payments__block__text">
					<?= esc_html($item['underText']); ?>
				</p>
			</div>
		<?php endforeach; ?>
	</div>

</section>
