/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";

import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js";
import SimpleUploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter.js";
// import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter.js';
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize.js";

import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline.js";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment.js";

// import Autolink from '@ckeditor/ckeditor5-link/src/autolink.js';
// import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js';
// import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js';
// import Comments from '@ckeditor/ckeditor5-comments/src/comments.js';

import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor.js";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily.js";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize.js";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight.js";

import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock.js";

import PageBreak from "@ckeditor/ckeditor5-page-break/src/pagebreak.js";
import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat.js";
import SpecialCharacters from "@ckeditor/ckeditor5-special-characters/src/specialcharacters.js";

import SpecialCharactersArrows from "@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows.js";
import SpecialCharactersCurrency from "@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency.js";
import SpecialCharactersEssentials from "@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials.js";
// import SpecialCharactersMathematical from '@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical.js';
import SpecialCharactersText from "@ckeditor/ckeditor5-special-characters/src/specialcharacterstext.js";

// import StandardEditingMode from '@ckeditor/ckeditor5-restricted-editing/src/standardeditingmode.js';
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough.js";
import Subscript from "@ckeditor/ckeditor5-basic-styles/src/subscript.js";
import Superscript from "@ckeditor/ckeditor5-basic-styles/src/superscript.js";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TodoList from "@ckeditor/ckeditor5-list/src/todolist";

import LinkImage from "@ckeditor/ckeditor5-link/src/linkimage";
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
	LinkImage,
];

// fontBackgroundColor: {
//         colors: [

// 		        {
// 					color: 'hsl(0, 0%, 0%)',
// 					label: 'Black'
// 				},
// 				{
// 					color: 'hsl(0, 0%, 30%)',
// 					label: 'Dim grey'
// 				},
// 				{
// 					color: 'hsl(0, 0%, 60%)',
// 					label: 'Grey'
// 				},
// 				{
// 					color: 'hsl(0, 0%, 90%)',
// 					label: 'Light grey'
// 				},
// 				{
// 					color: 'hsl(0, 0%, 100%)',
// 					label: 'White',
// 					hasBorder: true
// 				},
// 				{
// 					color: 'hsl(0, 75%, 60%)',
// 					label: 'Red'
// 				},
// 				{
// 					color: 'hsl(30, 75%, 60%)',
// 					label: 'Orange'
// 				},
// 				{
// 					color: 'hsl(60, 75%, 60%)',
// 					label: 'Yellow'
// 				},
// 				{
// 					color: 'hsl(90, 75%, 60%)',
// 					label: 'Light green'
// 				},
// 				{
// 					color: 'hsl(120, 75%, 60%)',
// 					label: 'Green'
// 				},
// 				{
// 					color: 'hsl(150, 75%, 60%)',
// 					label: 'Aquamarine'
// 				},
// 				{
// 					color: 'hsl(180, 75%, 60%)',
// 					label: 'Turquoise'
// 				},
// 				{
// 					color: 'hsl(210, 75%, 60%)',
// 					label: 'Light blue'
// 				},
// 				{
// 					color: 'hsl(240, 75%, 60%)',
// 					label: 'Blue'
// 				},
// 				{
// 					color: 'hsl(270, 75%, 60%)',
// 					label: 'Purple'
// 				}

//         ],
//         columns: 5
//     },

// a.    #86BC25
// b.     #C4D600
// c.      #43B02A
// d.     #046A38
// e.     #2C5234

// f.       #0097A9
// g.      #62B5E5
// h.     #00A3E0
// i.       #0076A8
// j.       #012169

// k.      #D0D0CE
// l.       #BBBCBC
// m.   #97999B
// n.     #75787B
// o.     #53565A

//   colors: [
//      	//row0
//      	// predefined
//   	{
// 	color: '#86BC25',
// 	label: '#86BC25',
// },
// {
// 	color: '#C4D600',
// 	label: '#C4D600',
// },

// {
// 	color: '#43B02A',
// 	label: '#43B02A',
// },
// {
// 	color: '#046A38',
// 	label: '#046A38',
// },
// {
// 	color: '#2C5234',
// 	label: '#2C5234',
// },

// {
// 	color: '#0097A9',
// 	label: '#0097A9',
// },
// {
// 	color: '#62B5E5',
// 	label: '#62B5E5',
// },

// {
// 	color: '#00A3E0',
// 	label: '#00A3E0',
// },
// {
// 	color: '#0076A8',
// 	label: '#0076A8',
// },
// {
// 	color: '#012169',
// 	label: '#012169',
// },

// {
// 	color: '#D0D0CE',
// 	label: '#D0D0CE',
// },
// {
// 	color: '#BBBCBC',
// 	label: '#BBBCBC',
// },

// {
// 	color: '#97999B',
// 	label: '#97999B',
// },
// {
// 	color: '#75787B',
// 	label: '#75787B',
// },
// {
// 	color: '#53565A',
// 	label: '#53565A',
// },

//      	//row1
//       {
// 	color: 'hsl(0, 0%, 0%)',
// 	label: 'hsl(0, 0%, 0%)'
// },
// {
// 	color: 'hsl(0, 0%, 12.5%)',
// 	label: 'hsl(0, 0%, 12.5%)'
// },
// {
// 	color: 'hsl(0, 0%, 25%)',
// 	label: 'hsl(0, 0%, 25%)'
// },
// {
// 	color: 'hsl(0, 0%, 37.5%)',
// 	label: 'hsl(0, 0%, 37.5%)'
// },
// {
// 	color: 'hsl(0, 0%, 50%)',
// 	label: 'hsl(0, 0%, 50%)'

// },
// {
// 	color: 'hsl(0, 0%, 62.50%)',
// 	label: 'hsl(0, 0%, 62.50%)'
// },
// {
// 	color: 'hsl(0, 0%, 75%)',
// 	label: 'hsl(0, 0%, 75%)'
// },
// {
// 	color: 'hsl(0, 0%, 87.5%)',
// 	label: 'hsl(0, 0%, 87.5%)'
// },
// {
// 	color: 'hsl(0, 0%, 100%)',
// 	label: 'hsl(0, 0%, 100%)',
// 	hasBorder: true
// },
// //9

// 		{
// 	color: 'hsl(0, 100%, 10%)',
// 	label: 'hsl(0, 100%, 10%)'
// },
// {
// 	color: 'hsl(0, 100%, 20%)',
// 	label: 'hsl(0, 100%, 20%)'
// },
// {
// 	color: 'hsl(0, 100%, 30%)',
// 	label: 'hsl(0, 100%, 30%)'
// },
// {
// 	color: 'hsl(0, 100%, 40%)',
// 	label: 'hsl(0, 100%, 40%)'
// },
// {
// 	color: 'hsl(0, 100%, 50%)',
// 	label: 'hsl(0, 100%, 50%)'

// },
// {
// 	color: 'hsl(0, 100%, 60%)',
// 	label: 'hsl(0, 100%, 60%)'
// },
// {
// 	color: 'hsl(0, 100%, 70%)',
// 	label: 'hsl(0, 100%, 70%)'
// },
// {
// 	color: 'hsl(0, 100%, 80%)',
// 	label: 'hsl(0, 100%, 80%)'
// },
// {
// 	color: 'hsl(0, 100%, 90%)',
// 	label: 'hsl(0, 100%, 90%)',
// 	hasBorder: true
// },
// //9
// //row3
// {
// 	color: 'hsl(30, 100%, 10%)',
// 	label: 'hsl(30, 100%, 10%)'
// },
// {
// 	color: 'hsl(30, 100%, 20%)',
// 	label: 'hsl(30, 100%, 20%)'
// },
// {
// 	color: 'hsl(30, 100%, 30%)',
// 	label: 'hsl(30, 100%, 30%)'
// },
// {
// 	color: 'hsl(30, 100%, 40%)',
// 	label: 'hsl(30, 100%, 40%)'
// },
// {
// 	color: 'hsl(30, 100%, 50%)',
// 	label: 'hsl(30, 100%, 50%)'

// },
// {
// 	color: 'hsl(30, 100%, 60%)',
// 	label: 'hsl(30, 100%, 60%)'
// },
// {
// 	color: 'hsl(30, 100%, 70%)',
// 	label: 'hsl(30, 100%, 70%)'
// },
// {
// 	color: 'hsl(30, 100%, 80%)',
// 	label: 'hsl(30, 100%, 80%)'
// },
// {
// 	color: 'hsl(30, 100%, 90%)',
// 	label: 'hsl(30, 100%, 90%)',
// 	hasBorder: true
// },
// //9
// //row4
// {
// 	color: 'hsl(60, 100%, 10%)',
// 	label: 'hsl(60, 100%, 10%)'
// },
// {
// 	color: 'hsl(60, 100%, 20%)',
// 	label: 'hsl(60, 100%, 20%)'
// },
// {
// 	color: 'hsl(60, 100%, 30%)',
// 	label: 'hsl(60, 100%, 30%)'
// },
// {
// 	color: 'hsl(60, 100%, 40%)',
// 	label: 'hsl(60, 100%, 40%)'
// },
// {
// 	color: 'hsl(60, 100%, 50%)',
// 	label: 'hsl(60, 100%, 50%)'

// },
// {
// 	color: 'hsl(60, 100%, 60%)',
// 	label: 'hsl(60, 100%, 60%)'
// },
// {
// 	color: 'hsl(60, 100%, 70%)',
// 	label: 'hsl(60, 100%, 70%)'
// },
// {
// 	color: 'hsl(60, 100%, 80%)',
// 	label: 'hsl(60, 100%, 80%)'
// },
// {
// 	color: 'hsl(60, 100%, 90%)',
// 	label: 'hsl(60, 100%, 90%)',
// 	hasBorder: true
// },
// //9
// //row5
// {
// 	color: 'hsl(90, 100%, 10%)',
// 	label: 'hsl(90, 100%, 10%)'
// },
// {
// 	color: 'hsl(90, 100%, 20%)',
// 	label: 'hsl(90, 100%, 20%)'
// },
// {
// 	color: 'hsl(90, 100%, 30%)',
// 	label: 'hsl(90, 100%, 30%)'
// },
// {
// 	color: 'hsl(90, 100%, 40%)',
// 	label: 'hsl(90, 100%, 40%)'
// },
// {
// 	color: 'hsl(90, 100%, 50%)',
// 	label: 'hsl(90, 100%, 50%)'

// },
// {
// 	color: 'hsl(90, 100%, 60%)',
// 	label: 'hsl(90, 100%, 60%)'
// },
// {
// 	color: 'hsl(90, 100%, 70%)',
// 	label: 'hsl(90, 100%, 70%)'
// },
// {
// 	color: 'hsl(90, 100%, 80%)',
// 	label: 'hsl(90, 100%, 80%)'
// },
// {
// 	color: 'hsl(90, 100%, 90%)',
// 	label: 'hsl(90, 100%, 90%)',
// 	hasBorder: true
// },
// 			//9
// //row6
// {
// 	color: 'hsl(120, 100%, 10%)',
// 	label: 'hsl(120, 100%, 10%)'
// },
// {
// 	color: 'hsl(120, 100%, 20%)',
// 	label: 'hsl(120, 100%, 20%)'
// },
// {
// 	color: 'hsl(120, 100%, 30%)',
// 	label: 'hsl(120, 100%, 30%)'
// },
// {
// 	color: 'hsl(120, 100%, 40%)',
// 	label: 'hsl(120, 100%, 40%)'
// },
// {
// 	color: 'hsl(120, 100%, 50%)',
// 	label: 'hsl(120, 100%, 50%)'

// },
// {
// 	color: 'hsl(120, 100%, 60%)',
// 	label: 'hsl(120, 100%, 60%)'
// },
// {
// 	color: 'hsl(120, 100%, 70%)',
// 	label: 'hsl(120, 100%, 70%)'
// },
// {
// 	color: 'hsl(120, 100%, 80%)',
// 	label: 'hsl(120, 100%, 80%)'
// },
// {
// 	color: 'hsl(120, 100%, 90%)',
// 	label: 'hsl(120, 100%, 90%)',
// 	hasBorder: true
// },
// //9
// //row7
// {
// 	color: 'hsl(150, 100%, 10%)',
// 	label: 'hsl(150, 100%, 10%)'
// },
// {
// 	color: 'hsl(150, 100%, 20%)',
// 	label: 'hsl(150, 100%, 20%)'
// },
// {
// 	color: 'hsl(150, 100%, 30%)',
// 	label: 'hsl(150, 100%, 30%)'
// },
// {
// 	color: 'hsl(150, 100%, 40%)',
// 	label: 'hsl(150, 100%, 40%)'
// },
// {
// 	color: 'hsl(150, 100%, 50%)',
// 	label: 'hsl(150, 100%, 50%)'

// },
// {
// 	color: 'hsl(150, 100%, 60%)',
// 	label: 'hsl(150, 100%, 60%)'
// },
// {
// 	color: 'hsl(150, 100%, 70%)',
// 	label: 'hsl(150, 100%, 70%)'
// },
// {
// 	color: 'hsl(150, 100%, 80%)',
// 	label: 'hsl(150, 100%, 80%)'
// },
// {
// 	color: 'hsl(150, 100%, 90%)',
// 	label: 'hsl(150, 100%, 90%)',
// 	hasBorder: true
// },
// //9
// //row8
// {
// 	color: 'hsl(180, 100%, 10%)',
// 	label: 'hsl(180, 100%, 10%)'
// },
// {
// 	color: 'hsl(180, 100%, 20%)',
// 	label: 'hsl(180, 100%, 20%)'
// },
// {
// 	color: 'hsl(180, 100%, 30%)',
// 	label: 'hsl(180, 100%, 30%)'
// },
// {
// 	color: 'hsl(180, 100%, 40%)',
// 	label: 'hsl(180, 100%, 40%)'
// },
// {
// 	color: 'hsl(180, 100%, 50%)',
// 	label: 'hsl(180, 100%, 50%)'

// },
// {
// 	color: 'hsl(180, 100%, 60%)',
// 	label: 'hsl(180, 100%, 60%)'
// },
// {
// 	color: 'hsl(180, 100%, 70%)',
// 	label: 'hsl(180, 100%, 70%)'
// },
// {
// 	color: 'hsl(180, 100%, 80%)',
// 	label: 'hsl(180, 100%, 80%)'
// },
// {
// 	color: 'hsl(180, 100%, 90%)',
// 	label: 'hsl(180, 100%, 90%)',
// 	hasBorder: true
// },
// //10
// //row9
// {
// 	color: 'hsl(210, 100%, 10%)',
// 	label: 'hsl(210, 100%, 10%)'
// },
// {
// 	color: 'hsl(210, 100%, 20%)',
// 	label: 'hsl(210, 100%, 20%)'
// },
// {
// 	color: 'hsl(210, 100%, 30%)',
// 	label: 'hsl(210, 100%, 30%)'
// },
// {
// 	color: 'hsl(210, 100%, 40%)',
// 	label: 'hsl(210, 100%, 40%)'
// },
// {
// 	color: 'hsl(210, 100%, 50%)',
// 	label: 'hsl(210, 100%, 50%)'

// },
// {
// 	color: 'hsl(210, 100%, 60%)',
// 	label: 'hsl(210, 100%, 60%)'
// },
// {
// 	color: 'hsl(210, 100%, 70%)',
// 	label: 'hsl(210, 100%, 70%)'
// },
// {
// 	color: 'hsl(210, 100%, 80%)',
// 	label: 'hsl(210, 100%, 80%)'
// },
// {
// 	color: 'hsl(210, 100%, 90%)',
// 	label: 'hsl(210, 100%, 90%)',
// 	hasBorder: true
// },
// //11
// //row9
// {
// 	color: 'hsl(240, 100%, 10%)',
// 	label: 'hsl(240, 100%, 10%)'
// },
// {
// 	color: 'hsl(240, 100%, 20%)',
// 	label: 'hsl(240, 100%, 20%)'
// },
// {
// 	color: 'hsl(240, 100%, 30%)',
// 	label: 'hsl(240, 100%, 30%)'
// },
// {
// 	color: 'hsl(240, 100%, 40%)',
// 	label: 'hsl(240, 100%, 40%)'
// },
// {
// 	color: 'hsl(240, 100%, 50%)',
// 	label: 'hsl(240, 100%, 50%)'

// },
// {
// 	color: 'hsl(240, 100%, 60%)',
// 	label: 'hsl(240, 100%, 60%)'
// },
// {
// 	color: 'hsl(240, 100%, 70%)',
// 	label: 'hsl(240, 100%, 70%)'
// },
// {
// 	color: 'hsl(240, 100%, 80%)',
// 	label: 'hsl(240, 100%, 80%)'
// },
// {
// 	color: 'hsl(240, 100%, 90%)',
// 	label: 'hsl(240, 100%, 90%)',
// 	hasBorder: true
// },
// //12
// //row9
// {
// 	color: 'hsl(270, 100%, 10%)',
// 	label: 'hsl(270, 100%, 10%)'
// },
// {
// 	color: 'hsl(270, 100%, 20%)',
// 	label: 'hsl(270, 100%, 20%)'
// },
// {
// 	color: 'hsl(270, 100%, 30%)',
// 	label: 'hsl(270, 100%, 30%)'
// },
// {
// 	color: 'hsl(270, 100%, 40%)',
// 	label: 'hsl(270, 100%, 40%)'
// },
// {
// 	color: 'hsl(270, 100%, 50%)',
// 	label: 'hsl(270, 100%, 50%)'

// },
// {
// 	color: 'hsl(270, 100%, 60%)',
// 	label: 'hsl(270, 100%, 60%)'
// },
// {
// 	color: 'hsl(270, 100%, 70%)',
// 	label: 'hsl(270, 100%, 70%)'
// },
// {
// 	color: 'hsl(270, 100%, 80%)',
// 	label: 'hsl(270, 100%, 80%)'
// },
// {
// 	color: 'hsl(270, 100%, 90%)',
// 	label: 'hsl(270, 100%, 90%)',
// 	hasBorder: true
// },
// //13
// //row9
// {
// 	color: 'hsl(300, 100%, 10%)',
// 	label: 'hsl(300, 100%, 10%)'
// },
// {
// 	color: 'hsl(300, 100%, 20%)',
// 	label: 'hsl(300, 100%, 20%)'
// },
// {
// 	color: 'hsl(300, 100%, 30%)',
// 	label: 'hsl(300, 100%, 30%)'
// },
// {
// 	color: 'hsl(300, 100%, 40%)',
// 	label: 'hsl(300, 100%, 40%)'
// },
// {
// 	color: 'hsl(300, 100%, 50%)',
// 	label: 'hsl(300, 100%, 50%)'

// },
// {
// 	color: 'hsl(300, 100%, 60%)',
// 	label: 'hsl(300, 100%, 60%)'
// },
// {
// 	color: 'hsl(300, 100%, 70%)',
// 	label: 'hsl(300, 100%, 70%)'
// },
// {
// 	color: 'hsl(300, 100%, 80%)',
// 	label: 'hsl(300, 100%, 80%)'
// },
// {
// 	color: 'hsl(300, 100%, 90%)',
// 	label: 'hsl(300, 100%, 90%)',
// 	hasBorder: true
// },
// //14
// //row9
// {
// 	color: 'hsl(330, 100%, 10%)',
// 	label: 'hsl(330, 100%, 10%)'
// },
// {
// 	color: 'hsl(330, 100%, 20%)',
// 	label: 'hsl(330, 100%, 20%)'
// },
// {
// 	color: 'hsl(330, 100%, 30%)',
// 	label: 'hsl(330, 100%, 30%)'
// },
// {
// 	color: 'hsl(330, 100%, 40%)',
// 	label: 'hsl(330, 100%, 40%)'
// },
// {
// 	color: 'hsl(330, 100%, 50%)',
// 	label: 'hsl(330, 100%, 50%)'

// },
// {
// 	color: 'hsl(330, 100%, 60%)',
// 	label: 'hsl(330, 100%, 60%)'
// },
// {
// 	color: 'hsl(330, 100%, 70%)',
// 	label: 'hsl(330, 100%, 70%)'
// },
// {
// 	color: 'hsl(330, 100%, 80%)',
// 	label: 'hsl(330, 100%, 80%)'
// },
// {
// 	color: 'hsl(330, 100%, 90%)',
// 	label: 'hsl(330, 100%, 90%)',
// 	hasBorder: true
// },
//      ],
//      columns: 9

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			"undo",
			"redo",
			"removeFormat",

			"heading",
			"fontSize",
			"bold",
			"italic",
			"underline",

			"fontFamily",
			"fontColor",
			"fontBackgroundColor",

			"strikethrough",
			"superscript",
			"subscript",
			"|",
			"alignment",
			"highlight",
			"specialCharacters",
			"|",

			"link",
			"bulletedList",
			"numberedList",
			"todoList",
			"|",
			"indent",
			"outdent",
			"pageBreak",
			"HorizontalLine",

			"|",

			"imageUpload",
			"blockQuote",
			"insertTable",
			"mediaEmbed",
			"SimpleUploadAdapter",

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
		],
	},
	// mediaEmbed: {
	//     providers: [
	//   	{
	// 	name: 'dailymotion',
	// 	url: /^dailymotion\.com\/video\/(\w+)/,
	// 	html: match => {
	// 		const id = match[ 1 ];

	// 		return (
	// 			'<div style="position: relative; padding-bottom: 100%; height: 0; ">' +
	// 				`<iframe src="https://www.dailymotion.com/embed/video/${ id }" ` +
	// 					'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" ' +
	// 					'frameborder="0" width="480" height="270" allowfullscreen allow="autoplay">' +
	// 				'</iframe>' +
	// 			'</div>'
	// 		);
	// 	}
	// },

	// {
	// 	name: 'spotify',
	// 	url: [
	// 		/^open\.spotify\.com\/(artist\/\w+)/,
	// 		/^open\.spotify\.com\/(album\/\w+)/,
	// 		/^open\.spotify\.com\/(track\/\w+)/
	// 	],
	// 	html: match => {
	// 		const id = match[ 1 ];

	// 		return (
	// 			'<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 126%;">' +
	// 				`<iframe src="https://open.spotify.com/embed/${ id }" ` +
	// 					'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" ' +
	// 					'frameborder="0" allowtransparency="true" allow="encrypted-media">' +
	// 				'</iframe>' +
	// 			'</div>'
	// 		);
	// 	}
	// },

	// {
	// 	name: 'youtube',
	// 	url: [
	// 		/^(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/,
	// 		/^(?:m\.)?youtube\.com\/v\/([\w-]+)/,
	// 		/^youtube\.com\/embed\/([\w-]+)/,
	// 		/^youtu\.be\/([\w-]+)/
	// 	],
	// 	html: match => {
	// 		const id = match[ 1 ];

	// 		return (
	// 			'<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;">' +
	// 				`<iframe src="https://www.youtube.com/embed/${ id }" ` +
	// 					'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" ' +
	// 					'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>' +
	// 				'</iframe>' +
	// 			'</div>'
	// 		);
	// 	}
	// },

	// {
	// 	name: 'vimeo',
	// 	url: [
	// 		/^vimeo\.com\/(\d+)/,
	// 		/^vimeo\.com\/[^/]+\/[^/]+\/video\/(\d+)/,
	// 		/^vimeo\.com\/album\/[^/]+\/video\/(\d+)/,
	// 		/^vimeo\.com\/channels\/[^/]+\/(\d+)/,
	// 		/^vimeo\.com\/groups\/[^/]+\/videos\/(\d+)/,
	// 		/^vimeo\.com\/ondemand\/[^/]+\/(\d+)/,
	// 		/^player\.vimeo\.com\/video\/(\d+)/
	// 	],
	// 	html: match => {
	// 		const id = match[ 1 ];

	// 		return (
	// 			'<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;">' +
	// 				`<iframe src="https://player.vimeo.com/video/${ id }" ` +
	// 					'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" ' +
	// 					'frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>' +
	// 				'</iframe>' +
	// 			'</div>'
	// 		);
	// 	}
	// },

	// {
	// 	name: 'instagram',
	// 	url: /^instagram\.com\/p\/(\w+)/
	// },
	// {
	// 	name: 'twitter',
	// 	url: /^twitter\.com/
	// },
	// {
	// 	name: 'googleMaps',
	// 	url: /^google\.com\/maps/
	// },
	// {
	// 	name: 'flickr',
	// 	url: /^flickr\.com/
	// },
	// {
	// 	name: 'facebook',
	// 	url: /^facebook\.com/
	// }
	//     ]
	// },
	fontColor: {
		colors: [
			{
				color: "#86BC25",
				label: "#86BC25",
			},
			{
				color: "#C4D600",
				label: "#C4D600",
			},

			{
				color: "#43B02A",
				label: "#43B02A",
			},
			{
				color: "#046A38",
				label: "#046A38",
			},
			{
				color: "#2C5234",
				label: "#2C5234",
			},

			{
				color: "#0097A9",
				label: "#0097A9",
			},
			{
				color: "#62B5E5",
				label: "#62B5E5",
			},

			{
				color: "#00A3E0",
				label: "#00A3E0",
			},
			{
				color: "#0076A8",
				label: "#0076A8",
			},
			{
				color: "#012169",
				label: "#012169",
			},

			{
				color: "#D0D0CE",
				label: "#D0D0CE",
			},
			{
				color: "#BBBCBC",
				label: "#BBBCBC",
			},

			{
				color: "#97999B",
				label: "#97999B",
			},
			{
				color: "#75787B",
				label: "#75787B",
			},
			{
				color: "#53565A",
				label: "#53565A",
			},

			{
				color: "hsl(0, 0%, 0%)",
				label: "Black",
			},
			{
				color: "hsl(0, 0%, 30%)",
				label: "Dim grey",
			},
			{
				color: "hsl(0, 0%, 60%)",
				label: "Grey",
			},
			{
				color: "hsl(0, 0%, 90%)",
				label: "Light grey",
			},
			{
				color: "hsl(0, 0%, 100%)",
				label: "White",
				hasBorder: true,
			},
			{
				color: "hsl(0, 75%, 60%)",
				label: "Red",
			},
			{
				color: "hsl(30, 75%, 60%)",
				label: "Orange",
			},
			{
				color: "hsl(60, 75%, 60%)",
				label: "Yellow",
			},
			{
				color: "hsl(90, 75%, 60%)",
				label: "Light green",
			},
			{
				color: "hsl(120, 75%, 60%)",
				label: "Green",
			},
			{
				color: "hsl(150, 75%, 60%)",
				label: "Aquamarine",
			},
			{
				color: "hsl(180, 75%, 60%)",
				label: "Turquoise",
			},
			{
				color: "hsl(210, 75%, 60%)",
				label: "Light blue",
			},
			{
				color: "hsl(240, 75%, 60%)",
				label: "Blue",
			},
			{
				color: "hsl(270, 75%, 60%)",
				label: "Purple",
			},
		],
		columns: 5,
	},

	fontBackgroundColor: {
		colors: [
			{
				color: "#86BC25",
				label: "#86BC25",
			},
			{
				color: "#C4D600",
				label: "#C4D600",
			},

			{
				color: "#43B02A",
				label: "#43B02A",
			},
			{
				color: "#046A38",
				label: "#046A38",
			},
			{
				color: "#2C5234",
				label: "#2C5234",
			},

			{
				color: "#0097A9",
				label: "#0097A9",
			},
			{
				color: "#62B5E5",
				label: "#62B5E5",
			},

			{
				color: "#00A3E0",
				label: "#00A3E0",
			},
			{
				color: "#0076A8",
				label: "#0076A8",
			},
			{
				color: "#012169",
				label: "#012169",
			},

			{
				color: "#D0D0CE",
				label: "#D0D0CE",
			},
			{
				color: "#BBBCBC",
				label: "#BBBCBC",
			},

			{
				color: "#97999B",
				label: "#97999B",
			},
			{
				color: "#75787B",
				label: "#75787B",
			},
			{
				color: "#53565A",
				label: "#53565A",
			},
			{
				color: "hsl(0, 0%, 0%)",
				label: "Black",
			},
			{
				color: "hsl(0, 0%, 30%)",
				label: "Dim grey",
			},
			{
				color: "hsl(0, 0%, 60%)",
				label: "Grey",
			},
			{
				color: "hsl(0, 0%, 90%)",
				label: "Light grey",
			},
			{
				color: "hsl(0, 0%, 100%)",
				label: "White",
				hasBorder: true,
			},
			{
				color: "hsl(0, 75%, 60%)",
				label: "Red",
			},
			{
				color: "hsl(30, 75%, 60%)",
				label: "Orange",
			},
			{
				color: "hsl(60, 75%, 60%)",
				label: "Yellow",
			},
			{
				color: "hsl(90, 75%, 60%)",
				label: "Light green",
			},
			{
				color: "hsl(120, 75%, 60%)",
				label: "Green",
			},
			{
				color: "hsl(150, 75%, 60%)",
				label: "Aquamarine",
			},
			{
				color: "hsl(180, 75%, 60%)",
				label: "Turquoise",
			},
			{
				color: "hsl(210, 75%, 60%)",
				label: "Light blue",
			},
			{
				color: "hsl(240, 75%, 60%)",
				label: "Blue",
			},
			{
				color: "hsl(270, 75%, 60%)",
				label: "Purple",
			},
		],
		columns: 5,
	},
	fontFamily: {
		options: [
			// 'default',
			"Calibri, Verdana, Geneva, sans-serif",
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
		supportAllValues: true,
	},
	fontSize: {
		options: [9, 11, 13, "default", 17, 19, 21],
	},
	link: {
		decorators: {
			isExternal: {
				mode: "manual",
				label: "Open in a new tab",
				attributes: {
					target: "_blank",
				},
			},
		},
	},
	image: {
		resizeUnit: "px",
		styles: ["alignLeft", "alignCenter", "alignRight"],
		resizeOptions: [
			{
				name: "imageResize:original",
				label: "Original",
				value: null,
				icon: "original",
			},
			{
				name: "imageResize:25",
				value: "25",
				icon: "small",
			},
			{
				name: "imageResize:50",
				label: "50",
				value: "50",
				icon: "medium",
			},
			{
				name: "imageResize:75",
				label: "75",
				value: "75",
				icon: "large",
			},
		],
		toolbar: [
			"imageStyle:alignLeft",
			"imageStyle:alignCenter",
			"imageStyle:alignRight",
			"|",
			"imageResize",
			"|",
			"imageStyle:full",
			"imageStyle:side",
			"|",
			"imageTextAlternative",
			"|",
			"linkImage",
		],
	},
	table: {
		contentToolbar: [
			"tableColumn",
			"tableRow",
			"mergeTableCells",
			"tableProperties",
			"tableCellProperties",
		],
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: "en",
};
