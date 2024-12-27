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
import { useBlockProps , RichText} from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
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
		subSectionText,
		underFromText,
		title,
	} = attributes;

	return (
		<section { ...useBlockProps({className: "registration-header-block section"}) }>
			<InspectorControls>
				<PanelBody title="Настройки текста">
					<TextControl
						label={__("Заголовок", "custom-block")}
						value={subSectionText}
						onChange={(value) => setAttributes({ subSectionText: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<div className="registration-header-block-container">
				<div className="registration-header-section-content">

					<div className="registration-header-uppertext">{subSectionText || __("Ваш заголовок", "custom-block")}</div>

					<RichText
						tagName="h2"
						value={title}
						label='Заголовок'
						placeholder='Введите заголовок ...'
						onChange={(val) => setAttributes({title: val})}
						className="registration-header-section-title"
					/>

					<div className="registration-header-section-under">
						<RichText
							tagName="p"
							value={underFromText}
							label='Заголовок'
							placeholder='Введите заголовок ...'
							onChange={(val) => setAttributes({underFromText: val})}
							className="header-section-description"
						/>
					</div>

				</div>
			</div>
		</section>
	);
}

