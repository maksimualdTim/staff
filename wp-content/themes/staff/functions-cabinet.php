<?php

add_action( 'admin_menu', function (){
 
	add_menu_page(
		'Клиенты', // тайтл страницы
		'Клиенты', // текст ссылки в меню
		'manage_options', // права пользователя, необходимые для доступа к странице
		'clients', // ярлык страницы
		'clients_callback', // функция, которая выводит содержимое страницы
		'dashicons-admin-users', // иконка, в данном случае из Dashicons
		20 // позиция в меню
	);
}, 25 );
 
function clients_callback() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'clients';
    // Проверяем, отправлена ли форма
    if ( isset( $_POST['submit_client_form'] ) && check_admin_referer( 'add_client_action', 'add_client_nonce' ) ) {
        $username        = sanitize_text_field( $_POST['client_login'] );
        $password        = wp_generate_password(); // Генерация пароля
        $analytics_script = sanitize_textarea_field( $_POST['custom_script'] );
		$hashed_password = wp_hash_password($password);

        // Проверяем, существует ли уже запись с таким логином
        $existing_client = $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(*) FROM $table_name WHERE username = %s", $username ) );

        if ( $existing_client > 0 ) {
            echo '<div class="notice notice-error"><p>Клиент с таким логином уже существует.</p></div>';
        } else {
            // Вставляем данные в таблицу
            $inserted = $wpdb->insert(
                $table_name,
                [
                    'username'         => $username,
                    'password'         => $password,
					'hashed_password'  => $hashed_password,
                    'analytics_script' => $analytics_script
                ],
                [ '%s', '%s', '%s' ]
            );

            if ( $inserted ) {
                echo '<div class="notice notice-success"><p>Клиент успешно создан. Логин: <strong>' . esc_html( $username ) . '</strong>, Пароль: <strong>' . esc_html( $password ) . '</strong></p></div>';
            } else {
                echo '<div class="notice notice-error"><p>Ошибка добавления клиента в базу данных.</p></div>';
            }
        }
    }

  // Обработка действия редактирования
  if (isset($_GET['action']) && $_GET['action'] === 'edit' && isset($_GET['id'])) {
	$id = absint($_GET['id']);
	$item = $wpdb->get_row($wpdb->prepare("SELECT * FROM $table_name WHERE id = %d", $id), ARRAY_A);

	if ($item) {
		if ($_SERVER['REQUEST_METHOD'] === 'POST') {
			// Сохранение обновлений
			$username = sanitize_text_field($_POST['username']);
			$analytics_script = sanitize_text_field($_POST['analytics_script']);

			$existing_login = $wpdb->get_var(
				$wpdb->prepare("SELECT id FROM $table_name WHERE username = %s AND id != %d", $username, $id)
			);

			if ($existing_login) {
				// Логин уже существует
				echo '<div class="error"><p>Логин уже существует. Пожалуйста, выберете другой.</p></div>';
			} else {
				// Логин уникален, можно обновить запись
				$result = $wpdb->update(
					$table_name,
					compact('username', 'analytics_script'),
					['id' => $id]
				);
				$item = $wpdb->get_row($wpdb->prepare("SELECT * FROM $table_name WHERE id = %d", $id), ARRAY_A);
				if(!$result) {
					$error_message = $wpdb->last_error;
					echo '<div class="error"><p>Ошибка: ' . esc_html($error_message) . '</p></div>';
				} else {
					echo '<div class="updated"><p>Запись успешно обновлена!</p></div>';
				}
			}
		}

		?>
		<div class="wrap">
			<h1>Редактирование Клиента</h1>
			<form method="post">
				<table class="form-table">
					<tr>
						<th><label for="username">Логин</label></th>
						<td><input type="text" name="username" id="username" value="<?php echo esc_attr($item['username']); ?>" required></td>
					</tr>
					<tr>
						<th><label for="analytics_script">Скрипт</label></th>
						<td><textarea type="text" name="analytics_script" id="analytics_script" value="<?php echo esc_attr($item['analytics_script']); ?>"><?php echo esc_attr($item['analytics_script']); ?></textarea></td>
					</tr>
				</table>
				<?php submit_button('Сохранить'); ?>
			</form>
		</div>
		<?php
		return;
	}
}

    // Форма создания клиента
    ?>
    <div class="wrap">
        <h1>Добавить клиента</h1>
        <form method="post">
            <?php wp_nonce_field( 'add_client_action', 'add_client_nonce' ); ?>
            <table class="form-table">
                <tr>
                    <th><label for="client_login">Логин</label></th>
                    <td>
                        <input type="text" name="client_login" id="client_login" class="regular-text" required>
                    </td>
                </tr>
                <tr>
                    <th><label for="custom_script">Скрипт</label></th>
                    <td>
                        <textarea name="custom_script" id="custom_script" class="large-text" rows="5"></textarea>
                    </td>
                </tr>
            </table>
			<button type="submit" name="submit_client_form" class="button button-primary">Создать клиента</button>
        </form>
    </div>
    <?php
    $clients = $wpdb->get_results( "SELECT * FROM $table_name", ARRAY_A );

    // Инициализируем таблицу
    $list_table = new Clients_List_Table( $clients );
    $list_table->prepare_items();

?>
    <div class="wrap">
        <h1 class="wp-heading-inline">Клиенты</h1>
        <form method="post">
            <?php
            // Вывод таблицы
            $list_table->display();
            ?>
        </form>
    </div>
<?php
}

function create_clients_table() {
    global $wpdb;

    $table_name = $wpdb->prefix . 'clients';
    $charset_collate = $wpdb->get_charset_collate();

    $sql = "CREATE TABLE IF NOT EXISTS $table_name (
        id INT(11) NOT NULL AUTO_INCREMENT,
        username VARCHAR(255) NOT NULL,
        password TEXT NOT NULL,
		hashed_password TEXT NOT NULL,
        analytics_script TEXT,
        PRIMARY KEY (id)
    ) $charset_collate;";

    require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
    dbDelta( $sql );
}
add_action( 'after_switch_theme', 'create_clients_table' );



if ( ! class_exists( 'WP_List_Table' ) ) {
    require_once ABSPATH . 'wp-admin/includes/class-wp-list-table.php';
}

/**
 * Create a new table class that will extend the WP_List_Table
 */
class Clients_List_Table extends WP_List_Table
{
    /**
     * Prepare the items for the table to process
     *
     * @return Void
     */
    public function prepare_items()
    {
        $columns = $this->get_columns();
        $hidden = $this->get_hidden_columns();
        $sortable = $this->get_sortable_columns();

        $data = $this->table_data();
        usort( $data, array( &$this, 'sort_data' ) );

        $perPage = 20;
        $currentPage = $this->get_pagenum();
        $totalItems = count($data);

        $this->set_pagination_args( array(
            'total_items' => $totalItems,
            'per_page'    => $perPage
        ) );

        $data = array_slice($data,(($currentPage-1)*$perPage),$perPage);

        $this->_column_headers = array($columns, $hidden, $sortable);
        $this->items = $data;
    }

    /**
     * Override the parent columns method. Defines the columns to use in your listing table
     *
     * @return Array
     */
    public function get_columns() {
        return [
            'id'              => 'ID',
            'username'        => 'Логин',
            'password'        => 'Пароль',
            'analytics_script' => 'Скрипт',
			'actions'		=> 'Действия'
        ];
    }

    /**
     * Define which columns are hidden
     *
     * @return Array
     */
    public function get_hidden_columns()
    {
        return array();
    }

    /**
     * Define the sortable columns
     *
     * @return Array
     */
    public function get_sortable_columns()
    {
        return array('username' => array('username', false), 'id' => array('id', false));
    }

    /**
     * Get the table data
     *
     * @return Array
     */
    private function table_data()
    {
        $data = array();
		global $wpdb;

		$table_name = $wpdb->prefix . 'clients';
		$data = $wpdb->get_results( "SELECT * FROM $table_name", ARRAY_A );

        return $data;
    }

    /**
     * Define what data to show on each column of the table
     *
     * @param  Array $item        Data
     * @param  String $column_name - Current column name
     *
     * @return Mixed
     */
    public function column_default( $item, $column_name ) {
		if($column_name == 'actions') {
			return sprintf(
				'<a href="?page=%s&action=%s&id=%s">Редактировать</a>',
				esc_attr($_REQUEST['page']),
				'edit',
				absint($item['id']),
				esc_attr($_REQUEST['page']),
				'delete',
				absint($item['id'])
			);
		}
        return isset( $item[ $column_name ] ) ? $item[ $column_name ] : '—';
    }

    /**
     * Allows you to sort the data by the variables set in the $_GET
     *
     * @return Mixed
     */
    private function sort_data( $a, $b )
    {
        // Set defaults
        $orderby = 'title';
        $order = 'asc';

        // If orderby is set, use this as the sort column
        if(!empty($_GET['orderby']))
        {
            $orderby = $_GET['orderby'];
        }

        // If order is set use this as the order
        if(!empty($_GET['order']))
        {
            $order = $_GET['order'];
        }


        $result = strcmp( $a[$orderby], $b[$orderby] );

        if($order === 'asc')
        {
            return $result;
        }

        return -$result;
    }
}
