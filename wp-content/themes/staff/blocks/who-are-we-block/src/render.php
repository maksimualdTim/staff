<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<?php
$contentBox = isset( $attributes['contentBox'] ) ? $attributes['contentBox'] : [];

// Ограничиваем количеством блоков, если необходимо
$maxContentBoxes = 2;  // Максимальное количество блоков



?>
<section class="we_are_block section" <?php echo get_block_wrapper_attributes(); ?>>

	<div class="section__sub">
		<div class="section__line"></div>
		<div class="section__text"><?=$attributes['subSectionText']?></div>
	</div>

	<div class="who-section-content">

		<?php if (!empty($attributes['title'])): ?>
			<h2 class="who-sec-title"><?= esc_html($attributes['title']); ?></h2>
		<?php endif; ?>

		<div class="tab-container">
			<div class="tabs">
				<?php foreach ($contentBox as $index => $box) : ?>
					<button class="tab <?= $index === 0 ? 'active' : ''; ?>" data-tab="<?= $index + 1; ?>">

						<?php if ($index === 0): ?>
							<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_671_1326)">
									<path d="M1.125 25.875H11.25V27H0V2.8125C0 1.26113 1.26113 0 2.8125 0H15.1875C16.7389 0 18 1.26113 18 2.8125V11.3074C17.6017 11.3647 17.2249 11.4773 16.875 11.646V2.8125C16.875 1.88212 16.1179 1.125 15.1875 1.125H2.8125C1.88212 1.125 1.125 1.88212 1.125 2.8125V25.875ZM7.875 14.625H4.5V15.75H7.875V14.625ZM4.5 20.25H7.875V19.125H4.5V20.25ZM7.875 5.625H4.5V6.75H7.875V5.625ZM13.5 5.625H10.125V6.75H13.5V5.625ZM7.875 10.125H4.5V11.25H7.875V10.125ZM10.125 11.25H13.5V10.125H10.125V11.25ZM27 18V27H13.5V18C13.5 16.7591 14.5091 15.75 15.75 15.75H16.875V15.1875C16.875 14.2571 17.6321 13.5 18.5625 13.5H21.9375C22.8679 13.5 23.625 14.2571 23.625 15.1875V15.75H24.75C25.9909 15.75 27 16.7591 27 18ZM18 15.75H22.5V15.1875C22.5 14.8781 22.2469 14.625 21.9375 14.625H18.5625C18.2531 14.625 18 14.8781 18 15.1875V15.75ZM14.625 18V20.25H25.875V18C25.875 17.379 25.371 16.875 24.75 16.875H15.75C15.129 16.875 14.625 17.379 14.625 18ZM25.875 25.875V21.375H20.8125V23.625H19.6875V21.375H14.625V25.875H25.875ZM10.125 15.75H11.8755C12.1241 15.3248 12.4357 14.9468 12.8047 14.625H10.125V15.75Z" fill="white"/>
								</g>
								<defs>
									<clipPath id="clip0_671_1326">
										<rect width="27" height="27" fill="white"/>
									</clipPath>
								</defs>
							</svg>
						<?php else: ?>
							<svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M14 11.25C12.1393 11.25 10.625 12.7642 10.625 14.625C10.625 16.4858 12.1393 18 14 18C15.8608 18 17.375 16.4858 17.375 14.625C17.375 12.7642 15.8608 11.25 14 11.25ZM14 16.875C12.7591 16.875 11.75 15.8659 11.75 14.625C11.75 13.3841 12.7591 12.375 14 12.375C15.2409 12.375 16.25 13.3841 16.25 14.625C16.25 15.8659 15.2409 16.875 14 16.875ZM23.108 6.06262L19.1885 2.142C17.8059 0.7605 15.9699 0 14.0169 0H7.8125C5.02138 0 2.75 2.27138 2.75 5.0625V21.9375C2.75 24.7286 5.02138 27 7.8125 27H20.1875C22.9786 27 25.25 24.7286 25.25 21.9375V11.2331C25.25 9.279 24.4884 7.443 23.108 6.06262ZM22.3126 6.858C22.9314 7.47675 23.3915 8.20688 23.6986 9H17.9375C17.0071 9 16.25 8.24288 16.25 7.3125V1.5525C17.042 1.85962 17.7733 2.31975 18.392 2.93738L22.3126 6.858ZM9.5 25.875C9.5 23.3932 11.5183 21.375 14 21.375C16.4818 21.375 18.5 23.3932 18.5 25.875H9.5ZM24.125 21.9375C24.125 24.1087 22.3588 25.875 20.1875 25.875H19.625C19.625 22.7734 17.1016 20.25 14 20.25C10.8984 20.25 8.375 22.7734 8.375 25.875H7.8125C5.64125 25.875 3.875 24.1087 3.875 21.9375V5.0625C3.875 2.89125 5.64125 1.125 7.8125 1.125H14.0169C14.3938 1.125 14.7628 1.16775 15.125 1.233V7.3125C15.125 8.86275 16.3861 10.125 17.9375 10.125H24.017C24.0823 10.4884 24.125 10.8574 24.125 11.2331V21.9375Z" fill="#1260F5"/>
							</svg>
						<?php endif; ?>

						<?= esc_html($box['title']); ?>
					</button>
				<?php endforeach; ?>
			</div>

			<div class="content">
				<?php foreach ($contentBox as $index => $box) : ?>
					<div class="content-box <?php echo $index === 0 ? 'active' : ''; ?>" data-tab="<?php echo $index + 1; ?>">
						<div class="content-box-left">
							<?php if (!empty($box['name'])) : ?>
								<h3 class="who-content-box-name"><?php echo esc_html($box['name']); ?></h3>
							<?php endif; ?>

							<?php if (!empty($box['description'])) : ?>
								<p class="who-content-box-description"><?php echo esc_html($box['description']); ?></p>
							<?php endif; ?>
						</div>
						<div class="content-box-right">
							<?php if (!empty($box['button']['text']) && !empty($box['button']['link'])) : ?>
								<a href="<?= esc_url($box['button']['link']); ?>" class="who-content-box-button">
									<?php echo esc_html($box['button']['text']); ?>
								</a>
							<?php endif; ?>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</div>





</section>





