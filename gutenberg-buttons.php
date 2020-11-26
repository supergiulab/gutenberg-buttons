<?php
/**
 * Add custom Gutenberg Buttons
 * 
 * This file is for example purpose only, to see if all deps are loaded
 */
namespace Add;

// Don't load directly
if ( ! defined('ABSPATH') ) exit;

class GutenbergButtons {

    private $version;

    public function __construct() {
        $this->version = microtime( __FILE__ );

        add_action( 'enqueue_block_editor_assets', array($this, 'gutenberg_buttons') );
    }

    public function gutenberg_buttons() {
        wp_enqueue_script( 'gutenberg-buttons', get_stylesheet_directory_uri() . '/assets/admin/js/mods/gutenberg-buttons/build/index.js',
        array(
			'wp-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		), 
        $this->version );
    }

}