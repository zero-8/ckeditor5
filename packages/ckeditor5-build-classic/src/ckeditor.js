
/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';


import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter.js';
// import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js'


import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';


// import Autolink from '@ckeditor/ckeditor5-link/src/autolink.js';
// import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js';
// import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js';
// import Comments from '@ckeditor/ckeditor5-comments/src/comments.js';


import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight.js';


import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock.js';

import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak.js';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat.js';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters.js';

import SpecialCharactersArrows from '@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows.js';
import SpecialCharactersCurrency from '@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency.js';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials.js';
// import SpecialCharactersMathematical from '@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical.js';
import SpecialCharactersText from '@ckeditor/ckeditor5-special-characters/src/specialcharacterstext.js';

// import StandardEditingMode from '@ckeditor/ckeditor5-restricted-editing/src/standardeditingmode.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript.js';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript.js';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';

import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	HorizontalLine,
	SimpleUploadAdapter,
	ImageResize,

	Underline,
	Alignment,
	// Autolink,
	// Code,
	// CodeBlock,

	// Comments,
	Highlight,

	FontBackgroundColor,
	FontFamily,
	FontColor,
	FontSize,


	IndentBlock,


	MediaEmbed,
	PageBreak,	
	
	RemoveFormat,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	// SpecialCharactersMathematical,
	SpecialCharactersText,
	// StandardEditingMode,
	Strikethrough,
	Subscript,
	Superscript,
	
	TableCellProperties,
	TableProperties,
	TodoList,
	LinkImage 


];

// Editor configuration.
ClassicEditor.defaultConfig = {
	autoParagraph: false,
	toolbar: {

		items: [
			'undo',
			'redo',
			'removeFormat',


			'heading',
			'fontSize',
			'bold',
			'italic',
			'underline',
			
			'fontFamily',
			'fontColor',
			'fontBackgroundColor',

			'strikethrough',
			'superscript',
			'subscript',
			'|',
			'alignment',
			'highlight',
			'specialCharacters',
			'|',

			'link',
			'bulletedList',
			'numberedList',
			'todoList',
			'|',
			'indent',
			'outdent',
			'pageBreak',
			'HorizontalLine',

			'|',

			'imageUpload',
			'blockQuote',
			'insertTable',
			'mediaEmbed',				
			'SimpleUploadAdapter'

			// 'undo',
			// 'redo',
			// 'removeFormat',
			// 'heading',
			// 'fontSize',
			// 'bold',
			// 'italic',
			// 'underline',
			// 'strikethrough',
			// 'fontFamily',
			// 'fontColor',
			// 'fontBackgroundColor',
			// '|',
			// 'link',
			// 'highlight',
			// 'code',
			// 'codeBlock',
			// 'blockQuote',
		
			// 'specialCharacters',
			// '|',
			// 'alignment',
			// 'indent',
			// 'outdent',
			
			// '|',
			// 'bulletedList',
			// 'numberedList',
			// 'todoList',
			// '|',
			// '|',
			// 'imageUpload',
			// 'insertTable',
			// 'mediaEmbed',
			// 'horizontalLine',
		]
	},
 	fontFamily: {
        options: [
        	// 'default',
        	'Calibri, Verdana, Geneva, sans-serif',		
         // 	'Arial/Arial, Helvetica, sans-serif' ,
         //    'Comic Sans MS/Comic Sans MS, cursive',
         //    'Courier New/Courier New, Courier, monospace',
         //    'Georgia/Georgia, serif',
         //    'Lucida Sans Unicode/Lucida Sans Unicode, Lucida Grande, sans-serif',
         //    'Tahoma/Tahoma, Geneva, sans-serif' ,
         //    'Times New Roman/Times New Roman, Times, serif',
         //    'Trebuchet MS/Trebuchet MS, Helvetica, sans-serif',         
         //    'Verdana/Verdana, Geneva, sans-serif',	      	
	        // 'Ubuntu, Arial, sans-serif',
	        // 'Ubuntu Mono, Courier New, Courier, monospace',	        
        ],
        supportAllValues: true
    },
    fontSize: {
        options: [
            9,
            11,
            13,
            'default',
            17,
            19,
            21
        ]
    },
	link: {
		decorators: {
			isExternal: {
				mode: 'manual',
				label: 'Open in a new tab',
				attributes: {
					target: '_blank'
				}
			}
		}
	},
	image: {
  		 styles: [
                'alignLeft', 'alignCenter', 'alignRight'
            ],
 		 resizeOptions: [
                {
                    name: 'imageResize:original',
                    label: 'Original',
                    value: null
                },
                {
                    name: 'imageResize:50',
                    label: '50%',
                    value: '50'
                },
                {
                    name: 'imageResize:75',
                    label: '75%',
                    value: '75'
                }
            ],
		toolbar: [
			 'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
                '|',
                'imageResize',
            '|',
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative',
			'|',
            'linkImage'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableProperties', 
			'tableCellProperties'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
