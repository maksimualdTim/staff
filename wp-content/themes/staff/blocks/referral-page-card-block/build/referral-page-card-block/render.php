<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$upperItems = $attributes['upperItems'] ?? [];
$bottomItems= $attributes['bottomItems'] ?? [];

?>

<section class="referral_page__cards__block section" <?= get_block_wrapper_attributes(); ?>>



	<div class="section__sub">
		<div class="section__line"></div>
		<div class="section__text"><?=$attributes['subSectionText']?></div>
	</div>

	<?php if (!empty($attributes['title'])): ?>
		<h3 class="referral_page__cards__block_title"><?=$attributes['title']?></h3>
	<?php endif; ?>





	<div class="referral_cards__top_blocks_container">
		<?php foreach ($upperItems as $key => $item): ?>
			<div class="referral_cards__top_block">
				<div class="referral_cards__top_block_cont">
					<h4 class="referral_cards__top_title"><?= esc_html($item['title']); ?></h4>
					<span class="referral_cards__top_side">
						<?= esc_html($item['sideText']); ?>
					</span>
				</div>

				<p class="referral_cards__top_under">
					<?= esc_html($item['itemUnderText']); ?>
				</p>
			</div>
		<?php endforeach; ?>
	</div>

	<div class="referral_page__cards__block__between">
		<?php if (!empty($attributes['betweenSectionText'])): ?>
			<span></span>
			<p>
				<?=$attributes['betweenSectionText']?>
			</p>
		<?php endif; ?>
	</div>



	<div class="referral_cards__bottom_blocks_container">
		<?php foreach ($bottomItems as $key => $item): ?>
			<div class="referral_cards__bottom_block">
				<h4 class="referral_cards__bottom_title"><?= esc_html($item['title']); ?></h4>

				<p class="referral_cards__bottom_under">
					<?= esc_html($item['itemUnderText']); ?>
				</p>
			</div>
		<?php endforeach; ?>

		<div class="referral_cards__bottom_block">
			<p class="referral_cards__bottom_block_upper">
				<?= esc_html($attributes['singleCardUpper']); ?>
			</p>

			<h4 class="referral_cards__bottom_middle">
				<?= esc_html($attributes['singleCardTitle']); ?>
			</h4>

			<div class="referral_cards__bottom_link">
				<a href="<?= esc_url($attributes['buttonUrl']); ?>"><?= esc_html($attributes['buttonText']); ?></a>
			</div>
		</div>

	</div>

	<?php if (!empty($attributes['underSectionText'])): ?>
		<p class="referral__cards_under_text first">
			<?=$attributes['underSectionText']?>
		</p>
	<?php endif; ?>
	<?php if (!empty($attributes['underSectionTextSec'])): ?>
		<p class="referral__cards_under_text">
			<?=$attributes['underSectionTextSec']?>
		</p>
	<?php endif; ?>





</section>



