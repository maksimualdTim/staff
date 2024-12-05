<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<?php
$singleItem = $attributes['singleItem'] ?? [];
$contentBox = $attributes['items'] ?? [];


// Ограничиваем количеством блоков, если необходимо
$maxContentBoxes = 1;  // Максимальное количество блоков


?>

<section class="economy section" <?= get_block_wrapper_attributes(); ?>>

	<div class="section__sub">
		<div class="section__line"></div>
		<div class="section__text"><?=$attributes['subSectionText']?></div>
		<?php if(!empty($attributes['subSectionNum'])):?>
			<div class="section__number">/ <?=$attributes['subSectionNum']?> /</div>
		<?php endif;?>
	</div>


	<div class="economy-section-content">

		<div class="economy-card-preview">
			<?php if (!empty($attributes['title'])): ?>
				<h2 class="economy-section-title"><?= $attributes['title'] ?></h2>
			<?php endif; ?>


			<?php if (!empty($attributes['sideText'])): ?>
				<div class="economy-section-description-container">
					<p class="economy-section-description"><?= $attributes['sideText'] ?></p>
					<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="56" height="56" rx="10" fill="#C7DAFF"/>
						<path d="M18.1948 21.1619L20.4167 24.1584L18.6779 25.4487L15.1463 20.6885L16.0151 20.0428C19.4991 17.4526 23.6439 16.0833 28 16.0833C32.3561 16.0833 36.5009 17.4526 39.9849 20.0428L40.857 20.6907L37.3004 25.453L35.5649 24.1563L37.8009 21.1608C35.1879 19.4503 32.2098 18.4742 29.0822 18.2889V22.5833H26.9156V18.2889C23.7869 18.4742 20.8078 19.4513 18.1937 21.163L18.1948 21.1619ZM36.0708 27.1062L31.0247 33.8629C31.4992 34.4967 31.7906 35.2734 31.7906 36.1238C31.7906 38.2147 30.0898 39.9155 27.9989 39.9155C25.9081 39.9155 24.2072 38.2147 24.2072 36.1238C24.2072 34.033 25.9081 32.3322 27.9989 32.3322C28.4517 32.3322 28.8808 32.4253 29.2848 32.5716L34.3353 25.8083L36.0708 27.1051V27.1062ZM29.625 36.1238C29.625 35.2279 28.8959 34.4988 28 34.4988C27.1041 34.4988 26.375 35.2279 26.375 36.1238C26.375 37.0198 27.1041 37.7488 28 37.7488C28.8959 37.7488 29.625 37.0198 29.625 36.1238ZM15 39.9166H19.3333V37.7499H17.1667V36.6666H19.3333V34.4999H17.1667V33.4166H19.3333V31.2499H15V39.9166ZM41 33.4166V31.2499H36.6667V39.9166H38.8333V36.6666H41V34.4999H38.8333V33.4166H41Z" fill="white"/>
					</svg>
				</div>
			<?php endif; ?>
		</div>

		<div class="economy-block-items">
			<div class="economy-single-item">
				<?php foreach ($singleItem as $index => $box) : ?>

					<div class="single-item">
						<?php if (!empty($box['img'])) : ?>
							<div class="single-item-img" >
								<img src="<?= esc_url($box['img']); ?>" alt="">
							</div>
						<?php endif; ?>
						<?php if (!empty($box['number'])) : ?>
							<h3 class="single-item-num"><?php echo esc_html($box['number']); ?></h3>
						<?php endif; ?>

						<?php if (!empty($box['underNumText'])) : ?>
							<h3 class="single-item-under"><?php echo esc_html($box['underNumText']); ?></h3>
						<?php endif; ?>

						<?php if (!empty($box['name'])) : ?>
							<h3 class="single-item-name"><?php echo esc_html($box['name']); ?></h3>
						<?php endif; ?>

						<?php if (!empty($box['description'])) : ?>
							<p class="single-item-desc"><?php echo esc_html($box['description']); ?></p>
						<?php endif; ?>

					</div>
				<?php endforeach; ?>
			</div>
			<div class="economy-double-items">
				<?php foreach ($contentBox as $index => $box) : ?>
					<div class="economy-block-item-box">

						<?php if (!empty($box['title'])) : ?>
							<div class="economy-double-items-title-container">

								<p class="economy-double-items-title"><?php echo esc_html($box['title']); ?></>
								<div class="boxes-container">
									<div class="white-box"></div>
									<div class="blue-box"></div>
									<?php if ($index === 1) : // Для второго блока добавляем ещё один white-box ?>
										<div class="white-box"></div>
									<?php endif; ?>
								</div>
							</div>
						<?php endif; ?>

						<?php if (!empty($box['number'])) : ?>
							<p class="economy-double-items-name"><?php echo esc_html($box['number']); ?></>
						<?php endif; ?>

						<?php if (!empty($box['description'])) : ?>
							<p class="economy-double-items-desc"><?php echo esc_html($box['description']); ?></p>
						<?php endif; ?>

						<?php if (!empty($box['img'])) : ?>
							<div class="economy-double-items-img" >
								<img src="<?= esc_url($box['img']); ?>" alt="">
							</div>
						<?php endif; ?>

						<div class="boxes-container-mobile">
							<div class="white-box"></div>
							<div class="blue-box"></div>
							<?php if ($index === 1) : // Для второго блока добавляем ещё один white-box ?>
								<div class="white-box"></div>
							<?php endif; ?>
						</div>

					</div>
				<?php endforeach; ?>
			</div>
		</div>


		<?php if (!empty($attributes['btnUrl']) && !empty($attributes['btnText'])) : ?>
			<div class="economy-preview-btns">
				<a href="<?= esc_url($attributes['btnUrl']); ?>"  class="economy-section-btn "><?= $attributes['btnText']?></a>
			</div>
		<?php endif; ?>


	</div>
</section>
