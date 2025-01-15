<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<section class="form-card" <?= get_block_wrapper_attributes(); ?> id="formSection">
	<div id="form-container">
		<div class="bread-crumbs">
			<a href="<?= home_url() ?>" class="sections__link"><?= pll__('Главная') ?></a>
			<span>/</span>
			<a href="#" class="crumbs-link">Оформление</a>
			<span>/</span>
			<a href="#" class="sections__link"><?= the_title(); ?></a>
		</div>

		<div class="form-card-content">
			<p class="form-card-text"><?= esc_html($attributes['subSectionText']); ?></p>
			<h2 class="form-card-title"><?= $attributes['title'] ?></h2>
		</div>

		<div class="form-card-container">
			<div class="form-card-wrapper">
				<p class="form-card-description"><?= esc_html($attributes['underFromText']); ?></p>
				<ul class="form-card_steps">
					<li class="step__item bg-black">1</li>
					<span></span>
					<li class="step__item">2</li>
					<span></span>
					<li class="step__item">3</li>
					<span></span>
					<li class="step__item">4</li>
				</ul>
			</div>
			<?= do_shortcode('[contact-form-7 id="93245bc" title="form-card"]')?>
			<a class="form-card-btn" href="<?= $attributes['btnUrl'] ?>" target="_blank" rel="noopener noreferrer">
				<span><?= $attributes['btnText'] ?></span>
			</a>
		</div>
	</div>



	<div class="success-message" id="success-message">
    <span><?= esc_html($attributes['subSuccessText']); ?></span>
                  <h2><?= esc_html($attributes['successTitle']); ?></h2>
                  <p><?= esc_html($attributes['successText']); ?></p>
                  <a href="<?= $attributes['successBtnUrl'] ?>" rel="noopener noreferrer"><span><?= $attributes['successBtnText'] ?></span></a>
  </div>

</section>
