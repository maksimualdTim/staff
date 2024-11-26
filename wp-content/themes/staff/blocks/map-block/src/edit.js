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
import { useBlockProps , InspectorControls , MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { TextControl, TextareaControl, Button, PanelBody } from '@wordpress/components';
import { Fragment } from '@wordpress/element';


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
	const { title, subSectionText, buttonText, buttonUrl, mapEmbed, imageUrl, bgUrl } = attributes;

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={__("Настройки блока", "custom-block")}>

					<TextareaControl
						label={__("Текст", "custom-block")}
						value={subSectionText}
						onChange={(value) => setAttributes({ subSectionText: value })}
					/>
					<TextControl
						label={__("Заголовок", "custom-block")}
						value={title}
						onChange={(value) => setAttributes({ title: value })}
					/>
					<TextControl
						label={__("Текст кнопки", "custom-block")}
						value={buttonText}
						onChange={(value) => setAttributes({ buttonText: value })}
					/>
					<TextControl
						label={__("Ссылка кнопки", "custom-block")}
						value={buttonUrl}
						onChange={(value) => setAttributes({ buttonUrl: value })}
					/>
					<TextareaControl
						label={__("Код карты (iframe)", "custom-block")}
						help={__("Вставьте код встраивания карты из Google Maps или другого сервиса.")}
						value={mapEmbed}
						onChange={(value) => setAttributes({ mapEmbed: value })}
					/>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => setAttributes({ imageUrl: media.url })}
							allowedTypes={["image"]}
							value={imageUrl}
							render={({ open }) => (
								<Button onClick={open} isPrimary>
									{__("Выбрать изображение", "custom-block")}
								</Button>
							)}
						/>
					</MediaUploadCheck>
				</PanelBody>
				<PanelBody title="Задний фон контейнера">
					<MediaUpload
						onSelect={(media) => setAttributes({ bgUrl: media.url })}
						allowedTypes={['image']}
						render={({ open }) => (
							<Button onClick={open} isSecondary>
								{bgUrl ? 'Изменить задний фон' : 'Выбрать изображение'}
							</Button>
						)}
					/>
				</PanelBody>
			</InspectorControls>


			{imageUrl && (
				<div>
					<img src={imageUrl} alt={__("Выбранное изображение", "custom-block")} style={{ maxWidth: "100%" }} />
					<Button onClick={() => setAttributes({ imageUrl: "" })} isDestructive>
						{__("Удалить изображение", "custom-block")}
					</Button>
				</div>
			)}

			<section  {...useBlockProps({
				className: "map-container",
				style: bgUrl ? { backgroundImage: `url(${bgUrl})` } : {},
			})}>

				<div className="map section">
					<div className="section__sub">
						<div className="section__line"></div>
						<div className="section__text">{subSectionText || __("Ваш заголовок", "custom-block")}</div>
					</div>

					<div className="map-title-container">
						<h2>{title || __("Ваш текст", "map-section-title")}</h2>

						{buttonText && buttonUrl && (
							<a href={buttonUrl} className="map-section-btn" target="_blank" rel="noopener noreferrer">
								{buttonText}
							</a>
						)}
					</div>

					<div className="map-section-map">
						{mapEmbed && <div dangerouslySetInnerHTML={{ __html: mapEmbed }} />}
					</div>
				</div>

			</section>

		</Fragment>
	);
}
