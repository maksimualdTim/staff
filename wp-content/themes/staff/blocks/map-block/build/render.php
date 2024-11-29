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

<section <?=$style ?>  class="map-container" <?= get_block_wrapper_attributes(); ?>>
	<div class="map section">


		<div class="section__sub">
			<div class="section__line"></div>
			<div class="section__text"><?=$attributes['subSectionText']?></div>
		</div>


		<div class="map-title-container">
			<h2 class="map-section-title"> <?=$attributes['title']?></h2>
			<a class="map-section-btn" href="<?=$attributes['buttonUrl']?>" target="_blank" rel="noopener noreferrer">
				<?=$attributes['buttonText']?>
			</a>
		</div>

		<div class="map-section-map">
			<?=$attributes['mapEmbed']?>
		</div>

		<a class="map-section-btn-mobile " href="<?=$attributes['buttonUrl']?>" target="_blank" rel="noopener noreferrer">
			<?=$attributes['buttonText']?>
		</a>
	</div>
</section>
