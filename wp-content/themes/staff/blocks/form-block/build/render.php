<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>


<section class="form-block section" <?= get_block_wrapper_attributes(); ?>>
	<div class="form-block-container">
		<div class="form-section-content">
			<h2 class="form-section-title"><?= $attributes['title'] ?></h2>
			<div class="call-request">
				<label for="phone-number">Введите номер телефона:</label>
				<div class="call-request-container">
					<input type="text" id="phone-number" placeholder="555-555-1234" />
					<button type="button">Заказать звонок</button>
				</div>
			</div>
			<div class="agreement">
				<svg  class="agreement-svg" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M21 12.5C21 14.5767 20.3842 16.6068 19.2304 18.3335C18.0767 20.0602 16.4368 21.406 14.5182 22.2007C12.5996 22.9955 10.4884 23.2034 8.45156 22.7982C6.41475 22.3931 4.54383 21.3931 3.07538 19.9246C1.60693 18.4562 0.606904 16.5852 0.201759 14.5484C-0.203386 12.5116 0.0045495 10.4004 0.799269 8.48182C1.59399 6.5632 2.9398 4.92332 4.66652 3.76957C6.39323 2.61581 8.4233 2 10.5 2C13.2839 2.00301 15.9528 3.11022 17.9213 5.0787C19.8898 7.04718 20.997 9.71615 21 12.5ZM12.25 12.5C12.25 12.0359 12.0656 11.5908 11.7374 11.2626C11.4093 10.9344 10.9641 10.75 10.5 10.75H8.75V12.5H10.5V18.625H12.25V12.5ZM10.5 6.375C10.2404 6.375 9.98666 6.45198 9.77082 6.5962C9.55498 6.74042 9.38675 6.9454 9.28741 7.18523C9.18807 7.42506 9.16208 7.68896 9.21272 7.94356C9.26337 8.19816 9.38837 8.43202 9.57193 8.61558C9.75548 8.79913 9.98935 8.92414 10.2439 8.97478C10.4985 9.02542 10.7624 8.99943 11.0023 8.90009C11.2421 8.80075 11.4471 8.63252 11.5913 8.41669C11.7355 8.20085 11.8125 7.94709 11.8125 7.6875C11.8125 7.3394 11.6742 7.00556 11.4281 6.75942C11.1819 6.51328 10.8481 6.375 10.5 6.375Z" fill="white" fill-opacity="0.6"/>
				</svg>
				<p class="form-section-description"><?= esc_html($attributes['underFromText']); ?></p>
			</div>

		</div>

		<div class="form-section-img">
			<img src="<?= esc_url($attributes['imageUrl']); ?>" alt="Card Image">
		</div>
	</div>
</section>
