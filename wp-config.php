<?php
define('WP_CACHE', true); // WP-Optimize Cache
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
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */
// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'Portafolio' );
/** Database username */
define( 'DB_USER', 'root' );
/** Database password */
define( 'DB_PASSWORD', '' );
/** Database hostname */
define( 'DB_HOST', 'localhost' );
/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );
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
define( 'AUTH_KEY',         'zQ<y8h@I&rgKr1DUDZ!/W]5 8u+BO#YO)ELRliwB1)&.i&KwDeqHf7vYqN|P~-)v' );
define( 'SECURE_AUTH_KEY',  'c-L@O/;P?;R<F;Xd*sSK{eP7+tHZr%+_0.yoQ ?2Ngmu]Z9wa:9U=i>O=UNq#ULy' );
define( 'LOGGED_IN_KEY',    's/PlmkJ2(>%fI<Xe{4ph`-u};GWMJb$M-,}g7JIVj}rg<&)nO<m>8I*lYV_nNM<U' );
define( 'NONCE_KEY',        '9.>4]=EBCr/~nTfRufRy$ohLMKH1+;j}$ia;_Y{9BoW3JLIAeyk3dJM@rlzU%kh?' );
define( 'AUTH_SALT',        '>wpY__2Anmmpds)Nk2_5yL+0=.h&+Tef(a|.y!~=tC5Wr]qR|7WUT8>l;l}NPF:i' );
define( 'SECURE_AUTH_SALT', 'xt|{lxeLpe3*_.+xNe!dX-f]@|M^gZADE8Ef_rkt]A^Q)_<Gc17`-Yg G>BS.rY#' );
define( 'LOGGED_IN_SALT',   'B(OB`+(7k$xKJE;@y1(l*J/>y e>6zKZ3KyY% PJE> ZjfhPnnChLWv1mcd (@x9' );
define( 'NONCE_SALT',       'G#Ymk%]k%f[:~1Q[7,K9J]K_JFdc>OW(iCN@uDWq(BlkrIW}D#,u@K/ba4V{UGW*' );
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
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
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