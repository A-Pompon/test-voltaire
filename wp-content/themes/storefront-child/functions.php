<?php
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
    wp_enqueue_style( 'child-style', get_stylesheet_uri(),
        array( 'parenthandle' ), 
        wp_get_theme()->get('Version') // this only works if you have Version in the style header
    );
}


/**
 * Redirect WooCommerce Shop URL
 */

add_filter( 'woocommerce_return_to_shop_redirect', 'st_woocommerce_shop_url' );

function st_woocommerce_shop_url(){

	return site_url() . '/boutique/';

}

