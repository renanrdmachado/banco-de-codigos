function add_custom_settings_media_gallery(){
	  // define your backbone template;
	  // the "tmpl-" prefix is required,
	  // and your input field should have a data-setting attribute
	  // matching the shortcode name
	  ?>
	  <script type="text/html" id="tmpl-my-custom-gallery-setting">
	    <label class="setting">
	      <span><?php _e('CSS Class'); ?></span>
	      <input type="text" data-setting="css_class" placeholder="Classe de CSS">
	    </label>
	  </script>

	  <script>

	    jQuery(document).ready(function(){

	      // add your shortcode attribute and its default value to the
	      // gallery settings list; $.extend should work as well...
	      _.extend(wp.media.gallery.defaults, {
	        css_class: ''
	      });

	      // merge default gallery settings template with yours
	      wp.media.view.Settings.Gallery = wp.media.view.Settings.Gallery.extend({
	        template: function(view){
	          return wp.media.template('gallery-settings')(view)
	               + wp.media.template('my-custom-gallery-setting')(view);
	        }
	      });

	    });

	  </script>
	  <?php
}
add_action('print_media_templates', 'add_custom_settings_media_gallery');

/**
 * HTML Wrapper - Support for a custom class attribute in the native gallery shortcode
 */
add_filter( 'post_gallery', function( $html, $attr, $instance )
{
    if( isset( $attr['css_class'] ) && $class = $attr['css_class'] )
    {
        // Unset attribute to avoid infinite recursive loops
        unset( $attr['css_class'] ); 

        // Our custom HTML wrapper
        $html = sprintf( 
            '<div class="%s">%s</div>',
            esc_attr( $class ),
            gallery_shortcode( $attr )
        );
    }

    return $html;
}, 10 ,3 );
