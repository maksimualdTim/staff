<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$news_posts = get_posts([
	'post_type' => 'news',
	'numberposts' => 10
]);

?>
<section class="news section" <?php echo get_block_wrapper_attributes(); ?>>
	<div class="section__sub">
		<div class="section__line"></div>
		<div class="section__text"><?=$attributes['subSectionText']?></div>
	</div>
	<div class="news__block">
		<h3 class="news__blocktitle"><?=$attributes['title']?></h3>
		<div class="swiper__navigation">
			<svg class="swiper-button-prev" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M44 22C44 17.6488 42.7097 13.3953 40.2923 9.77745C37.8749 6.15957 34.439 3.33977 30.419 1.67465C26.3991 0.00951995 21.9756 -0.426157 17.708 0.42272C13.4404 1.27159 9.52041 3.36689 6.44365 6.44365C3.3669 9.5204 1.2716 13.4404 0.422724 17.708C-0.426153 21.9756 0.00952302 26.3991 1.67465 30.419C3.33978 34.439 6.15957 37.8749 9.77745 40.2923C13.3953 42.7097 17.6488 44 22 44C27.8328 43.9937 33.4249 41.6738 37.5494 37.5494C41.6738 33.4249 43.9937 27.8328 44 22ZM12.0743 24.5923C11.3869 23.9047 11.0008 22.9723 11.0008 22C11.0008 21.0277 11.3869 20.0953 12.0743 19.4077L19.8532 11.6288L22.4455 14.2212L16.5 20.1667L33 20.1667L33 23.8333L16.5 23.8333L22.4455 29.7788L19.8532 32.3712L12.0743 24.5923Z" fill="#1360F5"/>
			</svg>

			<svg class="swiper-button-next" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 22C0 26.3512 1.29028 30.6047 3.70767 34.2225C6.12506 37.8404 9.56099 40.6602 13.581 42.3254C17.6009 43.9905 22.0244 44.4262 26.292 43.5773C30.5596 42.7284 34.4796 40.6331 37.5564 37.5564C40.6331 34.4796 42.7284 30.5596 43.5773 26.292C44.4262 22.0244 43.9905 17.6009 42.3254 13.581C40.6602 9.56099 37.8404 6.12506 34.2225 3.70767C30.6047 1.29028 26.3512 0 22 0C16.1672 0.00630865 10.5751 2.32619 6.45062 6.45062C2.32619 10.5751 0.00630865 16.1672 0 22ZM31.9257 19.4077C32.6131 20.0953 32.9992 21.0277 32.9992 22C32.9992 22.9723 32.6131 23.9047 31.9257 24.5923L24.1468 32.3712L21.5545 29.7788L27.5 23.8333H11V20.1667H27.5L21.5545 14.2212L24.1468 11.6288L31.9257 19.4077Z" fill="#1360F5"/>
			</svg>
		</div>
	</div>
	<div class="news__container">
		<!-- Slider main container -->
		<div class="swiper">
		<!-- Additional required wrapper -->
		<div class="swiper-wrapper">
			<!-- Slides -->
			<?php foreach ($news_posts as $key => $news_post):?>
			<a href="<?= get_permalink($news_post->ID); ?>" class="news__card swiper-slide">
				<div class="news__img">
					<?php if (has_post_thumbnail($news_post->ID)) : ?>
						<?= get_the_post_thumbnail($news_post->ID, 'full'); ?>
					<?php else : ?>
						<img src="<?= get_template_directory_uri(); ?>/truck.png" alt="news preview">
					<?php endif; ?>
				</div>
				<div class="news__content">
					<div class="news__date"><?= get_the_date('m/d/Y', $news_post->ID); ?></div>
					<div class="news__title"><?= get_the_title($news_post->ID); ?></div>
					<div class="news__excerpt"><?= get_the_excerpt($news_post->ID); ?></div>
					<div class="news__readmore">Читать -></div>
				</div>
			</a>
			<?php endforeach;?>
		</div>
		<!-- If we need pagination -->
		<!-- <div class="swiper-pagination"></div> -->

		<!-- If we need navigation buttons -->


		<!-- If we need scrollbar -->
		<!-- <div class="swiper-scrollbar"></div> -->
		</div>
	</div>
</section>
