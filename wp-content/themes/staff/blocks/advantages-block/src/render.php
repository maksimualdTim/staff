<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<section class="advantages section" <?php echo get_block_wrapper_attributes(); ?>>
	<div class="advantages__container">
		<div class="advantages__cards">
			<?php foreach ($attributes['items'] as $i => $item):?>
				<div class="advantages__cardwrapper">
					<div class="advantages__card">
						<img class="bg" src="<?=get_template_directory_uri()?>/img/advantages__card.png" alt="card">
						<div class="advantages__top">
							<div class="advantages__icon">
								<img src="<?=$item['iconUrl']?>" alt="teams icon">
							</div>
							<div class="advantages__content">
								<div class="advantages__subtitle"><?=$item['subtitle']?></div>
								<div class="advantages__title"><?=$item['title']?></div>		
							</div>
						</div>
						<div class="advantages__bottom">
							<div class="advantages__empty"></div>
							<div class="advantages__content --bottom">
								<div class="advantages__text"><?=$item['descriptionText']?></div>
							</div>
						</div>
					</div>
					<?php if(count($attributes['items']) -1 !== $i):?>
						<div class="pipe">
							<svg width="69" height="19" viewBox="0 0 69 19" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0 0H69C60.6974 3.61225 60.6974 15.3877 69 19H0C7.70424 15.0096 7.70424 3.99036 0 0Z" fill="#508AFA"/>
							</svg>
						</div>
					<?php endif;?>
				</div>
			<?php endforeach;?>
		</div>
		<div class="advantages__info">
			<div class="section__sub">
				<div class="section__line"></div>
				<div class="section__text"><?=$attributes['subSectionText']?></div>
				<?php if(!empty($attributes['subSectionNumber'])):?>
					<div class="section__number">/ <?=$attributes['subSectionNumber']?> /</div>
				<?php endif;?>
			</div>
			<h3 class="advantages__blocktitle">
				<?=$attributes['title']?>
			</h3>
			<div class="advantages__blocktext">
				<?=$attributes['descriprionText']?>
			</div>
			<div class="advantages__blocklink">
				<?=$attributes['link']?>
			</div>
		</div>
	</div>
</section>