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

/** Database username */


/** Database password */


/** Database hostname */


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
define('AUTH_KEY',         '5C};rDum# f2|9TKEef%%x2S$eFKF?leMl+KWGXZ@yS$xpT(u2(L]MNF,O93cYol');
define('SECURE_AUTH_KEY',  '|Tb&{S7/^S 0S&[p.cINh/kq@1CH1-e7],s{H+w-GBm#NV-O|8@|y;_n12?e|k-@');
define('LOGGED_IN_KEY',    ';1?CPI7X^-[~{<)p4Rmle.jA29?Hmq{={p%GTKm;u8Td[`MR)@>EH48-!$3|qv0G');
define('NONCE_KEY',        'flG+c0Ax<[_Oh~vjPF^EtW.{lWnUQF<NZ.MQm$+=8hd@p;ul^p G6cr?X}ziE%aY');
define('AUTH_SALT',        'KFP-p5Zt_!u X<efI$`l/%![*[kmIE/R?#hS]j;LVA=]*E>dyGX:n15e.Zlr-/Hp');
define('SECURE_AUTH_SALT', '9A;s-z:-  w 49b|uH;EmguO.-uQ`E8ZO87G(&y:<61F5t|Fm|~>hkeyGSC 3h;K');
define('LOGGED_IN_SALT',   'X{_M8ZuIm.cIq7!cUb|#K+v80]]%~/5N;+Za!~R77Muw@|LFrg,&c:EYd}RM-E%3');
define('NONCE_SALT',       'r5/C_+}2Cb~CHmb}F-{s6sgnTD-PQ=,-#+-3+-}BN!K[iC0qNBz~uL%PmxG<={0w');

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
