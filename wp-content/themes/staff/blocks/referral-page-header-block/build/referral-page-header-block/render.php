<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$items = $attributes['items'] ?? [];
$bgUrl = isset( $attributes['imgUrl'] ) ? esc_url( $attributes['imgUrl'] ) : '';

// Генерируем inline-стиль для background-image
$style = $bgUrl ? 'style="background-image: url(' . $bgUrl . ');"' : '';
?>


<section class="referral_page_header section" <?= get_block_wrapper_attributes(); ?>>

	<div class="bread-crumbs">
		<a href="<?= home_url() ?>" class="sections__link"><?= pll__('Главная') ?></a>
		<span>/</span>
		<a href="#" class="sections__link"><?= the_title(); ?></a>
	</div>

	<div class="section__sub">
		<div class="section__text"><?=$attributes['subSectionText']?></div>
	</div>


	<div class="referral_page_header__top__container">
		<?php if (!empty($attributes['title'])): ?>
			<h3 class="referral_page_header__tittle"><?=$attributes['title']?></h3>
		<?php endif; ?>

		<div class="referral_page_header__items">
			<?php foreach ($items as $key => $item): ?>
				<div class="referral_page_header__item">
					<span></span>
					<p class="referral_page_header__item__text">
						<?= esc_html($item['itemUnderText']); ?>
					</p>
				</div>
			<?php endforeach; ?>
		</div>
	</div>

	<div <?=$style ?>  class="referral_page_header__banner">
		<?php if (!empty($attributes['iconUrl'])): ?>
			<img src="<?= esc_url($attributes['iconUrl']); ?>" class="referral_page_header__banner__icon" alt="Image">
		<?php endif; ?>

		<div class="referral_page_header__banner__links">
			<a href="<?= esc_url($attributes['firstButtonUrl']); ?>" class="referral_page_header__banner__link"><?= esc_html($attributes['firstButtonText']); ?></a>
			<a href="<?= esc_url($attributes['secondButtonUrl']); ?>" class="referral_page_header__banner__link"><?= esc_html($attributes['secondButtonText']); ?></a>
		</div>
	</div>



</section>
