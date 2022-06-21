<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
include '.env.php';

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '6CnY[`Wl>UuEdK7=BcPL:h+n.)@T70%3G{A~udlc86FSUhS<4YE-)/!1(8Swf_i#');
define('SECURE_AUTH_KEY',  '=.wXn=|eur#-*)+PzSxgGs{un~V&$8piR]<Cqeo| ]tVxs$RTCAl?qvK3Aaxk(Sm');
define('LOGGED_IN_KEY',    '4iXJ% +3}B}I3BhoU|_`B~he$&cs` +K<[>Ge6|(`& S4&AjLd$=8Z2>qc++F9ag');
define('NONCE_KEY',        '%.%:3Wu%&+KHtoAm!/9a1`I#n4D&&{|AlBqu7z!) G?Y+l0SYCfzRT3tsu@{e5v#');
define('AUTH_SALT',        'e}Yje82gx(aX 7crj+wmsGsU&Yw&~n},p|h3,4pt-0v*%Gsq7fJf#0I0+3Va15|#');
define('SECURE_AUTH_SALT', '-HHN9Os$?rZ[iG(d]o/4j;c--Yv!{8>8RKZ3dgQa9zCPHN9Y vqGP*S61iu(R;^m');
define('LOGGED_IN_SALT',   'nnc,}WE=}k?|$p>q5Wb=2AG9P-IQR[Q@hT1!k:oXX|]8kxxlQ>}wEyu~%2O>[g~h');
define('NONCE_SALT',       '-V8MUp0/m>@W(py*ZC@^A>$;aU@~Zf VnLz><i4YeL:^ZAtKEocmO:[kDmk7%%<6');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
