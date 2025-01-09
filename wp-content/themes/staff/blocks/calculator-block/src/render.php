<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<section class="calculator section" <?= get_block_wrapper_attributes(); ?>>
		<div class="calculator__container">
			<div class="calculator__wrapper">
				<div class="section__sub sub__content">
					<div class="section__line"></div>
					<div class="section__text"><?= $attributes['subSectionText'] ?></div>
				</div>
			
				<h2 class="calculator-title"> <?= $attributes['title'] ?></h2>
		
				<div class="calculator__results-box">
					<span class="calculator__results-text"><?= $attributes['annualText'] ?></span>
					<div id="savings-result" class="calculator__results">$0</div>
				</div>
			</div>

				<div id="savings-calculator" class="calculator__card">
					<div class="calculator__content">
						<span class="calculator__content-text">Choose fleet size</span>

						<div class="calculator__range">
							<span id="rangeValue"class="calculator__value">1</span>
							<input class="calculator__fleet-size" id="fleet-size" type="range" value="1" min="1" max="100" step="1">
						</div>
					</div>

					<div class="calculator__content">
							<span class="calculator__content-text">Select fill-ups per week</span>
							<div class="fill-up-container">
									<button class="fill-up-btn active" data-value="1">1</button>
									<button class="fill-up-btn" data-value="2">2</button>
									<button class="fill-up-btn" data-value="3">3</button>
									<button class="fill-up-btn" data-value="4">4</button>
									<button class="fill-up-btn" data-value="5">5</button>
									<button class="fill-up-btn" data-value="6">6</button>
									<button class="fill-up-btn" data-value="7">7</button>
							</div>
					</div>
		
					<div class="calculator__content">
					<span class="calculator__content-text">Choose Gallons Per Fill-Up</span>

					<div class="calculator__range">
						<span id="gallonsValue"class="gallons__value">50</span>
						<input class="calculator__fleet-size" id="gallons-fillup" type="range" value="50"  min="50" max="250" step="1">
					</div>
				</div>

			</div>

			<div class="calculator__results-box-mobi">
				<span class="calculator__results-text">Annual Savings</span>
				<div id="savings-result-mobi" class="calculator__results">$0</div>
			</div>
	</div>
	
	</div>

</section>