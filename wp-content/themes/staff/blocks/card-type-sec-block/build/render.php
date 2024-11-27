<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<?php
$contentBox = isset( $attributes['contentBox'] ) ? $attributes['contentBox'] : [];

// Ограничиваем количеством блоков, если необходимо
$maxContentBoxes = 2;  // Максимальное количество блоков

// Получаем значение атрибута bgUrl
$bgUrl = isset( $attributes['bgUrl'] ) ? esc_url( $attributes['bgUrl'] ) : '';

// Генерируем inline-стиль для background-image
$style = $bgUrl ? 'style="background-image: url(' . $bgUrl . ');"' : '';
?>
<section <?=$style ?> class="card-sec section" <?php echo get_block_wrapper_attributes(); ?>>

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


	<div class="card-section-content">

		<div class="left-card-sec">
			<?php if (!empty($attributes['title'])): ?>
				<h2 class="card-sec-title"><?= esc_html($attributes['title']); ?></h2>
			<?php endif; ?>

			<!-- Навигация -->
			<div class="swiper__navigation">
				<svg class="swiper-custom-left" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M44 22C44 17.6488 42.7097 13.3953 40.2923 9.77745C37.8749 6.15957 34.439 3.33977 30.419 1.67465C26.3991 0.00951995 21.9756 -0.426157 17.708 0.42272C13.4404 1.27159 9.52041 3.36689 6.44365 6.44365C3.3669 9.5204 1.2716 13.4404 0.422724 17.708C-0.426153 21.9756 0.00952302 26.3991 1.67465 30.419C3.33978 34.439 6.15957 37.8749 9.77745 40.2923C13.3953 42.7097 17.6488 44 22 44C27.8328 43.9937 33.4249 41.6738 37.5494 37.5494C41.6738 33.4249 43.9937 27.8328 44 22ZM12.0743 24.5923C11.3869 23.9047 11.0008 22.9723 11.0008 22C11.0008 21.0277 11.3869 20.0953 12.0743 19.4077L19.8532 11.6288L22.4455 14.2212L16.5 20.1667L33 20.1667L33 23.8333L16.5 23.8333L22.4455 29.7788L19.8532 32.3712L12.0743 24.5923Z" fill="rgba(255,255,255, 0.6)"/>
				</svg>

				<svg class="swiper-custom-right" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0 22C0 26.3512 1.29028 30.6047 3.70767 34.2225C6.12506 37.8404 9.56099 40.6602 13.581 42.3254C17.6009 43.9905 22.0244 44.4262 26.292 43.5773C30.5596 42.7284 34.4796 40.6331 37.5564 37.5564C40.6331 34.4796 42.7284 30.5596 43.5773 26.292C44.4262 22.0244 43.9905 17.6009 42.3254 13.581C40.6602 9.56099 37.8404 6.12506 34.2225 3.70767C30.6047 1.29028 26.3512 0 22 0C16.1672 0.00630865 10.5751 2.32619 6.45062 6.45062C2.32619 10.5751 0.00630865 16.1672 0 22ZM31.9257 19.4077C32.6131 20.0953 32.9992 21.0277 32.9992 22C32.9992 22.9723 32.6131 23.9047 31.9257 24.5923L24.1468 32.3712L21.5545 29.7788L27.5 23.8333H11V20.1667H27.5L21.5545 14.2212L24.1468 11.6288L31.9257 19.4077Z" fill="rgba(255,255,255, 0.6)"/>
				</svg>
			</div>

			<div class="swiper">
				<div class="swiper-wrapper">
					<?php foreach ($attributes['items'] as $i => $item): ?>
						<div class="swiper-slide" style="display: inline-block;">
							<img src="<?= esc_url($item['slideImageUrl']); ?>" alt="">
						</div>
					<?php endforeach; ?>
				</div>
			</div>

			<div class="card-sec-text">
				<?php foreach ($attributes['underTextGroup'] as $i => $item):?>
					<p><?= esc_html($item['text']); ?></p>
				<?php endforeach;?>
			</div>

		</div>

		<div class="right-card-sec">
			<div class="tab-container">
				<div class="tabs">

					<?php foreach ($contentBox as $index => $box) : ?>
						<button class="tab <?= $index === 0 ? 'active' : ''; ?>" data-tab="<?= $index + 1; ?>">
							<span class="tab-span"><?= str_repeat('I', $index + 1);?></span>
							<?= esc_html($box['title']); ?>
						</button>
					<?php endforeach; ?>
				</div>

				<div class="content">
					<?php foreach ($contentBox as $index => $box) : ?>
						<div class="content-box <?php echo $index === 0 ? 'active' : ''; ?>" data-tab="<?php echo $index + 1; ?>">
							<?php if (!empty($box['name'])) : ?>
								<p class="content-box-name-title">Наименование </p>
								<h3 class="content-box-name"><?php echo esc_html($box['name']); ?></h3>
							<?php endif; ?>

							<?php if (!empty($box['description'])) : ?>
								<p class="content-box-description-title">Описание </p>
								<p class="content-box-description"><?php echo esc_html($box['description']); ?></p>
							<?php endif; ?>

							<div class="points-group">
								<?php foreach ($box['pointsGroup'] as $point) : ?>

									<p class="content-box-point">
										<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10.5 0.5C4.71012 0.5 0 5.21012 0 11C0 16.7899 4.71012 21.5 10.5 21.5C16.2899 21.5 21 16.7899 21 11C21 5.21012 16.2899 0.5 10.5 0.5ZM10.4204 13.9916C10.0817 14.3302 9.63637 14.4991 9.18925 14.4991C8.74212 14.4991 8.29238 14.3285 7.95025 13.9872L5.516 11.6283L6.73488 10.3709L9.17875 12.7395L14.2616 7.75112L15.4901 8.998L10.4204 13.9916Z" fill="white" fill-opacity="0.7"/>
										</svg>
										<?php echo esc_html($point); ?>
									</p>
								<?php endforeach; ?>
							</div>

							<div class="buttons">
								<?php foreach ($box['buttons'] as $button) : ?>
									<?php if (!empty($button['link']) && !empty($button['text'])) : ?>
										<a href="<?= esc_url($button['link']); ?>" class="btn">
											<?= esc_html($button['text']); ?>
										</a>
									<?php endif; ?>
								<?php endforeach; ?>
							</div>
						</div>
					<?php endforeach; ?>
				</div>
			</div>
		</div>

	</div>


</section>





