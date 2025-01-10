<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$items = $attributes['items'] ?? [];
?>


<section class="referral_page_materials section" <?= get_block_wrapper_attributes(); ?>>



	<div class="section__sub">
		<div class="section__line"></div>
		<div class="section__text"><?=$attributes['subSectionText']?></div>
	</div>

	<?php if (!empty($attributes['title'])): ?>
		<h3 class="referral_page_materials__title"><?=$attributes['title']?></h3>
	<?php endif; ?>




	<div class="referral_page_materials__container">
		<div class="referral_page_materials__single_container">
			<div class="referral_page_materials__single_block_icon">
				<?php if (!empty($attributes['singleItemIcon'])): ?>
					<img src="<?= esc_url($attributes['singleItemIcon']); ?>" alt="Image" style="max-width: 100%;">
				<?php endif; ?>
			</div>
			<h3 class="referral_page_materials__single_block_title"><?= esc_html($attributes['singleItemTitle']); ?></h3>
			<p class="referral_page_materials__single_block_text"><?= esc_html($attributes['singleItemText']); ?></p>
			<div class="referral_page_materials__single_block_img">
				<?php if (!empty($attributes['singleItemImg'])): ?>
					<img src="<?= esc_url($attributes['singleItemImg']); ?>" alt="Image" style="max-width: 100%;">
				<?php endif; ?>
			</div>
		</div>

		<div class="referral_page_materials__group_container">
			<?php foreach ($items as $key => $item): ?>
				<div class="referral_page_materials__group_item">

					<div class="referral_page_materials__group_item_side">
						<div class="referral_page_materials__group_icon">
							<?php if (!empty($item['iconUrl'])): ?>
								<img src="<?= esc_url($item['iconUrl']); ?>" alt="Image" style="max-width: 100%;">
							<?php endif; ?>
						</div>
						<h4 class="referral_page_materials__group_title">
							<?= esc_html($item['title']); ?>
						</h4>
						<p class="referral_page_materials__group_text">
							<?= esc_html($item['underText']); ?>
						</p>
					</div>

					<div class="referral_page_materials__group_img">
						<?php if (!empty($item['imgUrl'])): ?>
							<img src="<?= esc_url($item['imgUrl']); ?>" alt="Image">
						<?php endif; ?>
					</div>
				</div>
			<?php endforeach; ?>
		</div>

	</div>


</section>

