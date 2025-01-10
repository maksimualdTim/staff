/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps, RichText, PanelColorSettings, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button, TextareaControl } from '@wordpress/components';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

export default function Edit({ attributes, setAttributes }) {
	const {
		title,
		underTitleText,
		formTitle,
		formUnderText,
		underSectionText,
		underSectionTextSec,
	} = attributes;



	return (
		<>
			<section {...useBlockProps({className: "referral_page_form_first section"})}>


				<RichText
					tagName="h3"
					value={title}
					onChange={(newContent) => setAttributes({title: newContent})}
					placeholder=" Введите заголовок блока..."
					style={{}}
					className="referral_page_form_first__title"
				/>

				<RichText
					tagName="p"
					value={underTitleText}
					onChange={(newContent) => setAttributes({underTitleText: newContent})}
					placeholder=" Введите заголовок блока..."
					style={{}}
					className="referral_page_form_first__underTitleText"
				/>


				<div className="referral_page_form_container">
					<RichText
						tagName="h4"
						value={formTitle}
						onChange={(newContent) => setAttributes({formTitle: newContent})}
						placeholder=" Введите заголовок блока..."
						style={{}}
						className="referral_page_form_first__formTitle"
					/>
					<RichText
						tagName="p"
						value={formUnderText}
						onChange={(newContent) => setAttributes({formUnderText: newContent})}
						placeholder=" Введите заголовок блока..."
						style={{}}
						className="referral_page_form_first__formUnderText"
					/>
				</div>


				<RichText
					tagName="p"
					value={underSectionText}
					onChange={(newContent) => setAttributes({underSectionText: newContent})}
					placeholder=" Введите заголовок блока..."
					style={{}}
					className="referral_page_form_first__underSectionText"
				/>
				<RichText
					tagName="p"
					value={underSectionTextSec}
					onChange={(newContent) => setAttributes({underSectionTextSec: newContent})}
					placeholder=" Введите заголовок блока..."
					style={{}}
					className="referral_page_form_first__underSectionText"
				/>

			</section>

		</>
	);
}

