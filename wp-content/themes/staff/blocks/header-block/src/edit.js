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
import { PanelBody, TextControl,TextareaControl, Button } from '@wordpress/components';
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
		buttonText,
		buttonUrl,
		underFromText,
		title,
		imageUrl,
	} = attributes;

	return (
		<section { ...useBlockProps({className: "header-block section"}) }>
			<InspectorControls>
				<PanelBody title="Настройки текста">

					<TextControl
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
						label="Текст под кнопкой"
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

			<div className="header-block-container">

				<div className="header-section-content">

					<div className="header-uppertext">{subSectionText || __("Ваш заголовок", "custom-block")}</div>

					<RichText
						tagName="h2"
						value={title}
						label='Заголовок'
						placeholder='Введите заголовок ...'
						onChange={(val) => setAttributes({title: val})}
						className="header-section-title"
					/>

					<div className="header-section-btn">
						{buttonText && buttonUrl && (
							<a href={buttonUrl} className="header-section-btn-link" target="_blank" rel="noopener noreferrer">
								{buttonText}
							</a>
						)}

						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M24 18C24 18.7957 23.6839 19.5587 23.1213 20.1213C22.5587 20.6839 21.7957 21 21 21C20.2044 21 19.4413 20.6839 18.8787 20.1213C18.3161 19.5587 18 18.7957 18 18V17C18 16.7348 17.8946 16.4804 17.7071 16.2929C17.5196 16.1054 17.2652 16 17 16H16V19C15.9984 20.3256 15.4711 21.5964 14.5338 22.5338C13.5964 23.4711 12.3256 23.9984 11 24H5C3.67441 23.9984 2.40356 23.4711 1.46622 22.5338C0.528882 21.5964 0.00158786 20.3256 0 19L0 11H16V14H17C17.7957 14 18.5587 14.3161 19.1213 14.8787C19.6839 15.4413 20 16.2044 20 17V18C20 18.2652 20.1054 18.5196 20.2929 18.7071C20.4804 18.8946 20.7348 19 21 19C21.2652 19 21.5196 18.8946 21.7071 18.7071C21.8946 18.5196 22 18.2652 22 18V8C21.4696 8 20.9609 7.78929 20.5858 7.41421C20.2107 7.03914 20 6.53043 20 6V3.414L18.293 1.707C18.1108 1.5184 18.01 1.2658 18.0123 1.0036C18.0146 0.741402 18.1198 0.49059 18.3052 0.305181C18.4906 0.119773 18.7414 0.0146044 19.0036 0.012326C19.2658 0.0100475 19.5184 0.110842 19.707 0.293L22.243 2.828C23.3489 3.92787 23.9797 5.4174 24 6.977C24 6.985 24 18 24 18ZM16 5C15.9984 3.67441 15.4711 2.40356 14.5338 1.46622C13.5964 0.528882 12.3256 0.00158786 11 0L5 0C3.67441 0.00158786 2.40356 0.528882 1.46622 1.46622C0.528882 2.40356 0.00158786 3.67441 0 5L0 9H16V5Z" fill="url(#paint0_linear_397_10941)" fill-opacity="0.6"/>
							<defs>
								<linearGradient id="paint0_linear_397_10941" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
									<stop stop-color="white"/>
									<stop offset="1" stop-color="#8EB5FF"/>
								</linearGradient>
							</defs>
						</svg>
					</div>


					<div className="header-section-under">
						<svg width="51" height="52" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect y="0.5" width="51" height="51" rx="25.5" fill="#5087F3"/>
							<g clip-path="url(#clip0_397_10933)">
								<path d="M30.0417 30.825C29.9642 30.7469 29.872 30.6849 29.7705 30.6426C29.6689 30.6003 29.56 30.5785 29.45 30.5785C29.34 30.5785 29.2311 30.6003 29.1295 30.6426C29.028 30.6849 28.9358 30.7469 28.8583 30.825L25.8333 33.85V16.8333C25.8333 16.6123 25.7455 16.4004 25.5893 16.2441C25.433 16.0878 25.221 16 25 16C24.779 16 24.567 16.0878 24.4108 16.2441C24.2545 16.4004 24.1667 16.6123 24.1667 16.8333V33.8417L21.15 30.825C21.0786 30.7273 20.9867 30.6464 20.8809 30.5878C20.775 30.5292 20.6577 30.4944 20.537 30.4857C20.4163 30.4771 20.2952 30.4948 20.182 30.5377C20.0689 30.5806 19.9665 30.6476 19.8818 30.7341C19.7972 30.8205 19.7324 30.9244 19.692 31.0384C19.6515 31.1525 19.6364 31.2739 19.6477 31.3944C19.6589 31.5149 19.6962 31.6315 19.7571 31.736C19.8179 31.8406 19.9008 31.9307 20 32L23.2667 35.2667C23.7354 35.7348 24.3708 35.9978 25.0333 35.9978C25.6958 35.9978 26.3313 35.7348 26.8 35.2667L30.0667 32C30.2186 31.8406 30.3013 31.6275 30.2966 31.4073C30.2919 31.1872 30.2003 30.9778 30.0417 30.825Z" fill="white"/>
							</g>
							<defs>
								<clipPath id="clip0_397_10933">
									<rect width="20" height="20" fill="white" transform="translate(15 16)"/>
								</clipPath>
							</defs>
						</svg>
						<p className="header-section-description">{underFromText}</p>
					</div>

				</div>
				<div className="header-section-img">
					{imageUrl && <img src={imageUrl} alt="Card Image" />}
				</div>
			</div>


		</section>
	);
}

