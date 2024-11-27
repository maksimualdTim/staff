<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$items = isset($attributes['items']) ? $attributes['items'] : [];
?>
<section class="economy-stages section" <?php echo get_block_wrapper_attributes(); ?>>
	<div class="section__sub">
		<div class="section__line"></div>
		<div class="section__text"><?=$attributes['subSectionText']?></div>
	</div>

	<div class="economy-stages__block">
		<h3 class="economy-stages__blocktitle"><?=$attributes['title']?></h3>
		<div class="logo"><?=get_custom_logo()?></div>
	</div>
</section>
<div class="economy-stages-steps">
	<?php foreach ($items as $key => $item):?>
		<div class="economy-stages__stage">
			<div class="economy-stages__img">
				<?php if (!empty($item['imgUrl'])): ?>
					<img src="<?= esc_url($item['imgUrl']); ?>" alt="Image" style="max-width: 100%;">
				<?php endif; ?>
			</div>
			<div class="economy-stages__content">
				<div class="section__sub">
					<div class="section__line"></div>
					<div class="section__text"><?=$item['subText']?></div>
				</div>
				<h3 class="economy-stages__blocktitle"><?=$item['title']?></h3>
				<div class="economy-stages-stage__text">
					<?=$item['text']?>
				</div>
			</div>
		</div>
	<?php endforeach;?>
</div>
