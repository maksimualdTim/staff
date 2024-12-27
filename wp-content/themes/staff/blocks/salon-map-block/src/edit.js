/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, MediaUpload, RichText } from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	Button,
	TextareaControl,
} from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

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
		subSectionText,
		title,
		btnText,
		btnUrl,
	} = attributes;



	return (
		<>
			<InspectorControls>
				<PanelBody title="Настройки текста">
					<TextControl
						label="Текст подзаголовка"
						value={subSectionText}
						onChange={(value) => setAttributes({ subSectionText: value })}
					/>
					<TextControl
						label="Заголовок"
						value={title}
						onChange={(value) => setAttributes({ title: value })}
					/>
				</PanelBody>
				<PanelBody title="Настройки кнопок">
					<TextControl
						label="Текст кнопки 1"
						value={btnText}
						onChange={(value) => setAttributes({ btnText: value })}
					/>
					<TextControl
						label="Ссылка кнопки 1"
						value={btnUrl}
						onChange={(value) => setAttributes({ btnUrl: value })}
					/>
				</PanelBody>
			</InspectorControls>
		
		<section { ...useBlockProps({className: "salon-map section"}) }>
			<div className="section__sub">
				<div className="section__line"></div>
				<div className="section__text">{subSectionText}</div>
			</div>

				<div className="economy-card-preview">
					<RichText
						tagName="h3"
						value={title}
						label='Заголовок'
						placeholder='Введите заголовок ...'
						onChange={(val) => setAttributes({title: val})}
						className="salon-map-section-title"
					/>
					<a href={btnUrl}  className="salon-map-section-btn">{btnText}</a>
			</div>

			{/* <div className="pulser">
				<div className="circle">
					<div className="circle__info-wrapper">
						<span className="circle__info">42¢</span>
						<span className="circle__gallon">of/gallon</span>
					</div>
					<span className="circle__text">Средняя скидка по штату</span>
				</div>
		</div> */}

		</section>
		</>
	);
}
