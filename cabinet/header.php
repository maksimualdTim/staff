<?php
$translations = pll_the_languages( array( 'raw' => 1 ) );

?>
<header class="header">
                    <div class="header__logo">
                        <?=get_custom_logo()?>
                    </div>
                    <div class="btns">
                        <div class="language-switcher">
                            <button class="language-button">
                                <?=pll_current_language()?> <svg viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.50032 5C4.24801 5 4.01021 4.87864 3.83107 4.65847L0.5 0.550023L0.945951 0L4.27702 4.10845C4.39624 4.25549 4.60376 4.25549 4.72298 4.10845L8.05405 0L8.5 0.550023L5.16893 4.65847C4.99042 4.87864 4.75262 5 4.49968 5H4.50032Z" fill="#0E4BC1"/>
</svg>

                            </button>
                            <ul class="language-dropdown">
                                <?php
                                foreach ($translations as $slug => $translation):
                                ?>
                                <li><a href="<?=$translation['url']?>"><?=$slug?></a></li>
                                <?php endforeach;?>
                            </ul>
                        </div>
                        <div class="contacts_btn">
                            <a href="#">
                                <?=pll__("Контакты")?>
                            </a>
                        </div>
                    </div>
                </header>

<script>
    document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".language-button");
  const dropdown = document.querySelector(".language-dropdown");

  // Показать/скрыть меню по клику на кнопку
  button.addEventListener("click", () => {
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  });

  // Закрытие меню при клике вне
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".language-switcher")) {
      dropdown.style.display = "none";
    }
  });
});
</script>