<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'scan1237_wp788');

/** MySQL database username */
define('DB_USER', 'scan1237_wp788');

/** MySQL database password */
define('DB_PASSWORD', '1J)opS5.23');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '6kewipd0pk3sud7uxqkij8p4ilu9tnophq0htqhg5qlzhad9m4dkztwvap4yyfor');
define('SECURE_AUTH_KEY',  'nzzyayie4c6tyweowhnevdfpfea9baleelnzu5kf2g98xvxqxtrqbvb1db9yyqpo');
define('LOGGED_IN_KEY',    'z1qfph0rhyimuwneqg1afnpdscz5i8xhq63ikejues3n4wjb4rcgtwuvra7osage');
define('NONCE_KEY',        'gmcazrlbvk96yyimwbewthb7tieftpr2ikewxoa5mivlx6mivshb0a7hfwwc8gd9');
define('AUTH_SALT',        'jyks9u3qvwlgyt2gvich2ogtgbsqnmasycw9rxlgj9ztstvb0hvkpo5qbsjsx6i7');
define('SECURE_AUTH_SALT', 'bhu27gxj5bcjf3waryp6go0lh64rq3zj7ejee8xuuwtwq80ki3dmrncdvggkng7l');
define('LOGGED_IN_SALT',   'rnmqdz4aoq5qjeluu2oxiryarqraf3n8f0xmx4zcj3it28uwsecwehjxpdbu6udg');
define('NONCE_SALT',       'vmchyrthntwjr6rldkioyzh4dpdqtvoabe5tm3cimftjyngxtbcrpa3zwube6k6e');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wppa_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);
define( 'WP_MEMORY_LIMIT', '128M' );
define( 'WP_AUTO_UPDATE_CORE', false );

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
