<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>


<section class="order-form-block" <?= get_block_wrapper_attributes(); ?>>
	<div class="order-form-section-content">
		<div class="order-form-sub">
			<div class="order-form-line"></div>
			<div class="order-form-text"><?= esc_html($attributes['subSectionText']); ?></div>
		</div>

		<h2 class="order-form-section-title"><?= $attributes['title'] ?></h2>

		<div class="order-form-wrapper">
		<svg
						width="21"
						height="21"
						viewBox="0 0 21 21"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M21 10.5C21 12.5767 20.3842 14.6068 19.2304 16.3335C18.0767 18.0602 16.4368 19.406 14.5182 20.2007C12.5996 20.9954 10.4884 21.2034 8.45156 20.7982C6.41476 20.3931 4.54383 19.3931 3.07538 17.9246C1.60693 16.4562 0.606904 14.5852 0.201759 12.5484C-0.203385 10.5116 0.0045495 8.40045 0.799269 6.48182C1.59399 4.5632 2.9398 2.92332 4.66652 1.76957C6.39323 0.615814 8.4233 0 10.5 0C13.2839 0.00301095 15.9528 1.11022 17.9213 3.0787C19.8898 5.04718 20.997 7.71615 21 10.5ZM12.25 10.5C12.25 10.0359 12.0656 9.59075 11.7374 9.26256C11.4093 8.93437 10.9641 8.75 10.5 8.75H8.75V10.5H10.5V16.625H12.25V10.5ZM10.5 4.375C10.2404 4.375 9.98666 4.45198 9.77082 4.5962C9.55498 4.74041 9.38675 4.9454 9.28741 5.18523C9.18807 5.42505 9.16208 5.68895 9.21272 5.94355C9.26337 6.19815 9.38837 6.43202 9.57193 6.61558C9.75548 6.79913 9.98935 6.92414 10.2439 6.97478C10.4985 7.02542 10.7624 6.99943 11.0023 6.90009C11.2421 6.80075 11.4471 6.63252 11.5913 6.41668C11.7355 6.20084 11.8125 5.94709 11.8125 5.6875C11.8125 5.3394 11.6742 5.00556 11.4281 4.75942C11.1819 4.51328 10.8481 4.375 10.5 4.375Z"
							fill="#1260F5"
						/>
					</svg>
					<p class="order-form-section-description"><?= esc_html($attributes['underFromText']); ?></p>
		</div>
	</div>
</section>