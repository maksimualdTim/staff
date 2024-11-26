<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

	<?php
	// Получаем значение атрибута bgUrl
	$bgUrl = isset( $attributes['bgUrl'] ) ? esc_url( $attributes['bgUrl'] ) : '';

	// Генерируем inline-стиль для background-image
	$style = $bgUrl ? 'style="background-image: url(' . $bgUrl . ');"' : '';
	?>
	<section <?=$style ?> class="review section" <?php echo get_block_wrapper_attributes(); ?>>

		<?php if (!empty($attributes['imageUrl'])): ?>
			<div class="review-section-img">
				<img src="<?= esc_url($attributes['imageUrl']); ?>" alt="Image">
			</div>
		<?php endif; ?>

		<div class="section__sub">
			<div class="section__line"></div>
			<div class="section__text"><?=$attributes['subSectionText']?></div>
			<?php if(!empty($attributes['subSectionNum'])):?>
				<div class="section__number">/ <?=$attributes['subSectionNum']?> /</div>
			<?php endif;?>
		</div>

		<div class="review-section-content">
			<?php if (!empty($attributes['title'])): ?>
					<h2 class="review-section-title"><?= esc_html($attributes['title']); ?></h2>
			<?php endif; ?>

			<?php if (!empty($attributes['descriptionText'])): ?>
				<div class="review-section-desc-con">
					<p class="review-section-description"><?= esc_html($attributes['descriptionText']); ?></p>
					<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="56" height="56" rx="28" fill="white" fill-opacity="0.3"/>
						<path d="M34.7883 25.866L22 18V38L34.7831 30.1064C35.1552 29.8811 35.462 29.5685 35.6748 29.198C35.8876 28.8275 35.9995 28.4111 36 27.9876C36.0005 27.5641 35.8897 27.1474 35.6778 26.7764C35.4659 26.4054 35.1599 26.0922 34.7883 25.866Z" fill="black"/>
					</svg>
				</div>
			<?php endif; ?>
		</div>


		<div class="slick-slider">
			<?php foreach ($attributes['items'] as $i => $item):?>
				<div class="slider-item">

					<video class="review-video"  muted loop>
						<source src="<?= esc_url($item['videoUrl']); ?>" type="video/mp4" />
						Ваш браузер не поддерживает видео.
					</video>

					<div class="overlay">
						<div class="play-button">
							<svg width="42" height="53" viewBox="0 0 42 53" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M42 26.5L0.749998 52.9138L0.75 0.0862237L42 26.5Z" fill="white"/>
							</svg>
						</div>
						<div class="video-info">
							<h3><?= esc_html($item['title']); ?></h3>
							<p><?= esc_html($item['subtitle']); ?></p>
						</div>
					</div>
				</div>
			<?php endforeach;?>
		</div>

		<div class="custom-dots-container"></div>
	</section>
