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
import { useBlockProps, MediaUpload , RichText} from '@wordpress/block-editor';
import { PanelBody, TextControl, Button } from '@wordpress/components';
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
		subSectionNum,
		title,
		descriptionText,
		firstButtonText,
		firstButtonUrl,
		secondButtonText,
		secondButtonUrl,
		imageUrl,
	} = attributes;

	return (
		<section { ...useBlockProps({className: "credit section"}) }>
			<InspectorControls>
				<PanelBody title="Настройки текста">
					<TextControl
						label="Текст подзаголовка"
						value={subSectionText}
						onChange={(value) => setAttributes({ subSectionText: value })}
					/>
					<TextControl
						label="Номер подзаголовка"
						value={subSectionNum}
						onChange={(value) => setAttributes({ subSectionNum: value })}
					/>
					<TextControl
						label="Заголовок"
						value={title}
						onChange={(value) => setAttributes({ title: value })}
					/>
					<TextControl
						label="Описание"
						value={descriptionText}
						onChange={(value) => setAttributes({ descriptionText: value })}
					/>
				</PanelBody>
				<PanelBody title="Настройки кнопок">
					<TextControl
						label="Текст кнопки 1"
						value={firstButtonText}
						onChange={(value) => setAttributes({ firstButtonText: value })}
					/>
					<TextControl
						label="Ссылка кнопки 1"
						value={firstButtonUrl}
						onChange={(value) => setAttributes({ firstButtonUrl: value })}
					/>
					<TextControl
						label="Текст кнопки 2"
						value={secondButtonText}
						onChange={(value) => setAttributes({ secondButtonText: value })}
					/>
					<TextControl
						label="Ссылка кнопки 2"
						value={secondButtonUrl}
						onChange={(value) => setAttributes({ secondButtonUrl: value })}
					/>
				</PanelBody>
				<PanelBody title="Настройки изображения">
					<MediaUpload
						onSelect={(media) => setAttributes({ imageUrl: media.url })}
						allowedTypes={['image']}
						render={({ open }) => (
							<Button onClick={open} isSecondary>
								{imageUrl ? 'Изменить изображение' : 'Выбрать изображение'}
							</Button>
						)}
					/>
				</PanelBody>
			</InspectorControls>



			<div className="section__sub">
				<div className="section__line"></div>
				<div className="section__text">{subSectionText}</div>
				<div className="section__number">{subSectionNum && "/ " + subSectionNum + " /"}</div>
			</div>

			<div className="credit-section-content">
				<div className="card-preview">
					<RichText
						tagName="h3"
						value={title}
						label='Заголовок'
						placeholder='Введите заголовок ...'
						onChange={(val) => setAttributes({title: val})}
						className="credit-section-title"
					/>
					<p className="credit-section-description">{descriptionText}</p>
					<div className="card-preview-btns">
						<a href={firstButtonUrl}  className="credit-section-btn btn-left">{firstButtonText}</a>
						<a href={secondButtonUrl} className="credit-section-btn btn-right">{secondButtonText}</a>
					</div>
				</div>

				<div className="credit-section-img">
					{imageUrl && <img src={imageUrl} alt="Card Image" />}
				</div>
			</div>

		</section>
	);
}
