<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$fillUpButtons = isset($attributes['fillUpButtons']) ? $attributes['fillUpButtons'] : get_field('fill_up_buttons');
$fillUpButtons = is_array($fillUpButtons) ? $fillUpButtons : [1, 2, 3, 4, 5, 6, 7]; 
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
						<span class="calculator__content-text"><?= $attributes['fleetSize'] ?></span>

						<div class="calculator__range">
							<span id="rangeValue"class="calculator__value"><?= $attributes['fleetSizeMin'] ?></span>
							<input class="calculator__fleet-size" id="fleet-size" type="range"  value="<?php echo esc_attr($attributes["fleetSizeMin"]); ?>" 
							min="<?php echo esc_attr($attributes["fleetSizeMin"]); ?>" 
       max="<?php echo esc_attr($attributes["fleetSizeMax"]); ?>"  step="1">
						</div>
					</div>

					<div class="calculator__content">
							<span class="calculator__content-text"><?= $attributes['perWeek'] ?></span>
							<!-- <div class="fill-up-container">
									<button class="fill-up-btn active" data-value="1">1</button>
									<button class="fill-up-btn" data-value="2">2</button>
									<button class="fill-up-btn" data-value="3">3</button>
									<button class="fill-up-btn" data-value="4">4</button>
									<button class="fill-up-btn" data-value="5">5</button>
									<button class="fill-up-btn" data-value="6">6</button>
									<button class="fill-up-btn" data-value="7">7</button>
							</div> -->
							<div class="fill-up-container">
    <?php foreach ($fillUpButtons as $index => $buttonValue): ?>
        <button class="fill-up-btn <?= $index === 0 ? 'active' : '' ?>" data-value="<?= esc_attr($buttonValue) ?>">
            <?= esc_html($buttonValue) ?>
        </button>
    <?php endforeach; ?>
</div>
					</div>
		
					<div class="calculator__content">
					<span class="calculator__content-text"><?= $attributes['gallons'] ?></span>

					<div class="calculator__range">
						<span id="gallonsValue"class="gallons__value"><?= $attributes['gallonSizeMin'] ?></span>
						<input class="calculator__fleet-size" id="gallons-fillup" type="range" value="<?php echo esc_attr($attributes["gallonSizeMin"]); ?>"  min="<?php echo esc_attr($attributes["gallonSizeMin"]); ?>" max="<?php echo esc_attr($attributes["gallonSizeMax"]); ?>" step="1">
					</div>
				</div>

			</div>

			<div class="calculator__results-box-mobi">
				<span class="calculator__results-text"><?= $attributes['annualText'] ?></span>
				<div id="savings-result-mobi" class="calculator__results">$0</div>
			</div>
	</div>
	
	</div>

</section>

<script>
	  window.fuelPrices = <?php echo json_encode([
        'pricePerGallonWithoutCard' => floatval($attributes["pricePerGallonWithoutCard"]),
        'pricePerGallonWithCard' => floatval($attributes["pricePerGallonWithCard"]),
				'fleetSizeMin' => intval($attributes["fleetSizeMin"]),
        'fleetSizeMax' => intval($attributes["fleetSizeMax"]),
				'gallonSizeMin' => intval($attributes["gallonSizeMin"]),
        'gallonSizeMax' => intval($attributes["gallonSizeMax"]),
				'fillUpButtons' => array_map('intval', $fillUpButtons)
    ]); ?>;
</script>