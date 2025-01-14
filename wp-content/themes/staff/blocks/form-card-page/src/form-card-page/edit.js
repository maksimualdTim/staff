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
 import { useBlockProps , RichText, InspectorControls} from '@wordpress/block-editor';
 import { PanelBody, TextControl } from '@wordpress/components';

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
		btnText,
		btnUrl,
		subSuccessText,
		successTitle,
		successText,
		successBtnText,
		successBtnUrl
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
				<PanelBody title="Настройки текста">
					<TextControl
						label="Название поля"
						value={underFromText}
						onChange={(value) => setAttributes({ underFromText: value })}
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

				<PanelBody title="Настройки текста">
					<TextControl
						label="Название поля"
						value={subSuccessText}
						onChange={(value) => setAttributes({ subSuccessText: value })}
					/>
					<TextControl
						label="Название поля"
						value={successTitle}
						onChange={(value) => setAttributes({ successTitle: value })}
					/>
					<TextControl
						label="Название поля"
						value={successText}
						onChange={(value) => setAttributes({ successText: value })}
					/>
				</PanelBody>
				<PanelBody title="Настройки кнопок">
					<TextControl
						label="Текст кнопки 2"
						value={successBtnText}
						onChange={(value) => setAttributes({ successBtnText: value })}
					/>
					<TextControl
						label="Ссылка кнопки 2"
						value={successBtnUrl}
						onChange={(value) => setAttributes({ successBtnUrl: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<section {...useBlockProps({ className: "form-card" })}>
				<div className="form-card-content">
					<div className="form-card-text">{subSectionText}</div>
					<RichText
						tagName="h3"
						value={title}
						label="Заголовок"
						placeholder="Введите заголовок ..."
						onChange={(val) => setAttributes({ title: val })}
						className="form-card-title"
					/>
				</div>

				<div className="form-card-container">
					<p className="form-card-description">{underFromText}</p>
				</div>

					<a href={btnUrl} className="form-card-btn">
						{btnText}
					</a>



					<div>
						<span>{subSuccessText}</span>
            <h2>{successTitle}</h2>
            <p>{successText}</p>
          	<a href={successBtnUrl}>{successBtnText}</a>
					</div>
			</section>
		</>
	);
}
