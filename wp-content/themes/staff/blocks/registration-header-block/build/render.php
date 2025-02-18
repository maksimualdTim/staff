<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<section class="registration-header-block section" <?= get_block_wrapper_attributes(); ?>>
	<div class="bread-crumbs">
		<a href="<?= home_url() ?>" class="sections__link"><?= pll__('Главная') ?></a>
		<span>/</span>
		<a href="#" class="sections__link"><?= the_title(); ?></a>
	</div>

	<div class="registration-header-block-container">

		<div class="registration-header-section-content">

			<p class="registration-header-uppertext"><?= esc_html($attributes['subSectionText']); ?></p>

			<h2 class="registration-header-section-title"><?= $attributes['title'] ?></h2>

			<div class="registration-header-section-under">
				<p class="registration-header-section-description"><?= esc_html($attributes['underFromText']); ?></p>
			</div>

		</div>

		<div class="registration-header-section-form">
			<div class="registration__form_heading">
				<h4 class="registration__form_heading_header"><?= pll__('Форма обратной связи') ?></h4>
				<ul class="registration__form_heading_steps">
					<li class="step__item bg-black">
						1
					</li>
					<span>

					</span>
					<li class="step__item">
						2
					</li>
				</ul>
			</div>

			<?= do_shortcode('[contact-form-7 id="4073ae2" title="registration-steps"]')?>

		</div>

	</div>
</section>

