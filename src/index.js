/**
 * WordPress dependencies
 */
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { registerFormatType } from '@wordpress/rich-text';
// import methods - avoid not a function error?
import { toggleFormat } from '@wordpress/rich-text';

const type = 'gutenberg-button/tooltip';

const tooltipAction = ( { value } ) => (
	<RichTextToolbarButton
		icon='format-status'
		title={ __( 'Tooltip', 'gutenberg-buttons' ) }
		onClick={ () => { processTooltip( value ) } }
	/>
);

registerFormatType( type, {
	title: __( 'Tooltip', 'gutenberg-buttons' ),
	tagName: 'abbr',
	className: 'editor-tooltip',
	attributes: {
		title: 'title',
	},
	edit: tooltipAction
} );

function processTooltip( value ) {
	let selectedText = value.text.substring( value.start, value.end );
	
	value.onChange(
		// toggleFormat is undefined :|
		toggleFormat( 
			selectedText, 
			{ type: type }
		)
	)
	
} //end process()