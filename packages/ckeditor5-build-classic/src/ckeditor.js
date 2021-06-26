/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
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
import CloudServices from "@ckeditor/ckeditor5-cloud-services/src/cloudservices";

import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor.js";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily.js";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize.js";
import SimpleUploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter.js";

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
	CloudServices,
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
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	SimpleUploadAdapter,
	"fontFamily",
	"fontColor",
	"fontBackgroundColor",
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			"heading",
			"fontFamily",
			"fontColor",
			"fontBackgroundColor",
			"|",
			"bold",
			"italic",
			"link",
			"bulletedList",
			"numberedList",
			"|",
			"outdent",
			"indent",
			"|",
			"uploadImage",
			"blockQuote",
			"insertTable",
			"mediaEmbed",
			"undo",
			"redo",
			"SimpleUploadAdapter",
		],
	},
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
	image: {
		toolbar: [
			"imageStyle:inline",
			"imageStyle:block",
			"imageStyle:side",
			"|",
			"toggleImageCaption",
			"imageTextAlternative",
		],
	},
	table: {
		contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: "en",
};
