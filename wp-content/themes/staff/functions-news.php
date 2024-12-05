<?php

add_shortcode("section-line", function () {
    ob_start();
    ?>
	<div class="section__sub">
		<div class="section__line"></div>
		<div class="section__text"><?=pll__("Блог компании")?></div>
	</div>
    <?php
    return ob_get_clean();
});
add_shortcode("breadcrumbs-blog", function() {
    ob_start();
    ?>
    <div class="bread-crumbs">
        <a href="<?= home_url() ?>" class="sections__link"><?= pll__('Главная') ?></a><span>/</span><a href="#" class="sections__link"><?=pll__("Блог")?></a>
    </div>
    <?php
    return ob_get_clean();
});

add_shortcode( 'breadcrumbs-news', function() {
    $blog_page_link = get_page_link(pll_get_post(86));
    ob_start();
    ?>
    <div class="bread-crumbs">
        <a href="<?= home_url() ?>" class="sections__link"><?= pll__('Главная') ?></a><span>/</span><a href="<?=$blog_page_link?>" class="sections__link"><?=pll__("Блог")?></a><span>/</span><a href="#" class="sections__link"><?= get_the_title(); ?></a>
    </div>
  <?php
	$output = ob_get_contents(); // всё, что вывели, окажется внутри $output
	ob_end_clean();
	return $output;
} );

add_shortcode("blog", function() {
    $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1; // Get current page number
    $query = new WP_Query([
        "post_type" => "news",
        "posts_per_page" => 12,
        "paged" => $paged
    ]);
    ob_start();
    ?>
    <div class="news__cards">
        <?php
        while($query->have_posts()):
            $query->the_post();
        ?>
        <a href="<?= get_permalink(); ?>" class="news__card">
            <div class="news__img">
                <?php if (has_post_thumbnail()) : ?>
                    <?= get_the_post_thumbnail(get_the_ID(), 'full'); ?>
                <?php else : ?>
                    <img src="<?= get_template_directory_uri(); ?>/truck.png" alt="news preview">
                <?php endif; ?>
            </div>
            <div class="news__content">
                <div class="news__date"><?= get_the_date('m/d/Y'); ?></div>
                <div class="news__title"><?= get_the_title(); ?></div>
                <div class="news__excerpt"><?= get_the_excerpt(); ?></div>
                <div class="news__readmore"><?=pll__("Читать")?> -></div>
            </div>
        </a>
        <?php endwhile;?>
    </div>


        <div class="pagination_container flex items-center gap-2 self-center">
            <?=custom_pagination($query)?>
        </div>

<?php
    return ob_get_clean();
});

function custom_pagination($query) {
	$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1; // Get current page number
	?>
	              <?php
              // Pagination links
                $pagiantions = paginate_links( array(
                    'total' => $query->max_num_pages, // Total number of pages
                    'current' => max( 1, $paged ), // Current page
                    'prev_text' => '&laquo;', // Previous page link text
                    'next_text' => '&raquo;', // Next page link text
                    'type' => 'array',
                    'prev_next' => true,
					'format'             => '?paged=%#%',
                  ) );
                  echo '<div class="pagination flex items-center gap-2 self-center">';
                  
                  foreach ($pagiantions ?? [] as $i => $pagiantion_item):
                    if($i === 0):
                      $url = wp_extract_urls($pagiantion_item)[0] ?? "";
              ?>
              <div class="count flex items-center gap-2">
                    <?php
                        preg_match('/href="([^"]+)"/', $pagiantion_item, $matches);
                        $url = $matches[1] ?? "";
                    ?>
                  <a href="<?php if(str_contains($pagiantion_item, 'prev')) echo esc_url($url)?>" class="previous_pagination pagination_item pagination-arrow <?php if(!str_contains($pagiantion_item, 'prev')) echo 'noactive';?>">
                    <svg
                      width="9"
                      height="12"
                      viewBox="0 0 9 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.16016 1.41L3.58016 6L8.16016 10.59L6.75016 12L0.750156 6L6.75016 0L8.16016 1.41Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <?php endif;?>
                <?php if($i+1 === count($pagiantions)):
                  $url = wp_extract_urls($pagiantion_item)[0] ?? '';
                  ?>
                  <?php if(!str_contains($pagiantion_item, 'next')){echo $pagiantion_item;}?>
                  <?php
                    preg_match('/href="([^"]+)"/', $pagiantion_item, $matches);
                    $url = $matches[1] ?? "";
                  ?>
                  <a href="<?php if(str_contains($pagiantion_item, 'next')) echo esc_url($url)?>" class="next_pagination pagination_item pagination-arrow <?php if(!str_contains($pagiantion_item, 'next')) echo 'noactive';?>">
                    <svg
                      width="9"
                      height="12"
                      viewBox="0 0 9 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.839844 1.41L5.41984 6L0.839844 10.59L2.24984 12L8.24984 6L2.24984 0L0.839844 1.41Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                <?php elseif(!str_contains($pagiantion_item, 'next') && !str_contains($pagiantion_item, 'prev')):
                  echo $pagiantion_item;
                  ?>
                <?php endif;?>
              <?php
                endforeach;
              // Reset postdata
              wp_reset_postdata();
          ?>
          </div>
          </div>
		  <?php
}