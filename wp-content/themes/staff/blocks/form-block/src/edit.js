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
		underFromText,
		title,
		imageUrl,
	} = attributes;

	return (
		<section { ...useBlockProps({className: "form-block section"}) }>
			<InspectorControls>
				<PanelBody title="Настройки текста">
					<TextControl
						label="Заголовок"
						value={title}
						onChange={(value) => setAttributes({ title: value })}
					/>

					<TextControl
						label="Текст под формой"
						value={underFromText}
						onChange={(value) => setAttributes({ underFromText: value })}
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

			<div className="form-block-container">
				<div className="form-section-content">
					<RichText
						tagName="h2"
						value={title}
						label='Заголовок'
						placeholder='Введите заголовок ...'
						onChange={(val) => setAttributes({title: val})}
						className="form-section-title"
					/>
					<div className="call-request">
						<label htmlFor="phone-number">Введите номер телефона:</label>
						<div className="call-request-container">
							<input type="text" id="phone-number" placeholder="555-555-1234"/>
							<button type="button">Заказать звонок</button>
						</div>
					</div>
					<div className="agreement">
						<svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M21 12.5C21 14.5767 20.3842 16.6068 19.2304 18.3335C18.0767 20.0602 16.4368 21.406 14.5182 22.2007C12.5996 22.9955 10.4884 23.2034 8.45156 22.7982C6.41475 22.3931 4.54383 21.3931 3.07538 19.9246C1.60693 18.4562 0.606904 16.5852 0.201759 14.5484C-0.203386 12.5116 0.0045495 10.4004 0.799269 8.48182C1.59399 6.5632 2.9398 4.92332 4.66652 3.76957C6.39323 2.61581 8.4233 2 10.5 2C13.2839 2.00301 15.9528 3.11022 17.9213 5.0787C19.8898 7.04718 20.997 9.71615 21 12.5ZM12.25 12.5C12.25 12.0359 12.0656 11.5908 11.7374 11.2626C11.4093 10.9344 10.9641 10.75 10.5 10.75H8.75V12.5H10.5V18.625H12.25V12.5ZM10.5 6.375C10.2404 6.375 9.98666 6.45198 9.77082 6.5962C9.55498 6.74042 9.38675 6.9454 9.28741 7.18523C9.18807 7.42506 9.16208 7.68896 9.21272 7.94356C9.26337 8.19816 9.38837 8.43202 9.57193 8.61558C9.75548 8.79913 9.98935 8.92414 10.2439 8.97478C10.4985 9.02542 10.7624 8.99943 11.0023 8.90009C11.2421 8.80075 11.4471 8.63252 11.5913 8.41669C11.7355 8.20085 11.8125 7.94709 11.8125 7.6875C11.8125 7.3394 11.6742 7.00556 11.4281 6.75942C11.1819 6.51328 10.8481 6.375 10.5 6.375Z"
								fill="white" fill-opacity="0.6"/>
						</svg>
						<p className="form-section-description">{underFromText}</p>
					</div>

				</div>

				<div className="form-section-img">
					{imageUrl && <img src={imageUrl} alt="Card Image" />}
				</div>
			</div>


		</section>
	);
}

