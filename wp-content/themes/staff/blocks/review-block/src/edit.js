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
import { Button, TextControl, TextareaControl, PanelBody, } from '@wordpress/components';

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
	const { items = [], subSectionText, subSectionNum, title, descriptionText, 	imageUrl , bgUrl} = attributes;


	// Function to add a new slider item
	const addCard = () => {
		const newItems = [...items, { title: '', subtitle: '', videoUrl: '' }];
		setAttributes({ items: newItems });
	};

	// Function to update a slider item
	const updateCard = (index, field, value) => {
		const newItems = items.map((item, i) => {
			if (i === index) {
				return { ...item, [field]: value };
			}
			return item;
		});
		setAttributes({ items: newItems });
	};

	// Function to remove a slider item
	const removeCard = (index) => {
		const newItems = items.filter((_, i) => i !== index);
		setAttributes({ items: newItems });
	};

	return (
		<section  {...useBlockProps({
			className: "review section",
			style: bgUrl ? { backgroundImage: `url(${bgUrl})` } : {},
		})}>>

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

			<div className="section__sub">
				<div className="section__line"></div>
				<div className="section__text">{subSectionText}</div>
				<div className="section__number">{subSectionNum && "/ " + subSectionNum + " /"}</div>
			</div>

			<div className="review-section-content">

				<RichText
					tagName="h2"
					value={title}
					label='Заголовок'
					placeholder='Введите заголовок ...'
					onChange={(val) => setAttributes({title: val})}
					className="review-section-title"
				/>


				<div className="review-section-desc-con">
					<p className="review-section-description">{descriptionText}</p>
					<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="56" height="56" rx="28" fill="white" fill-opacity="0.3"/>
						<path d="M34.7883 25.866L22 18V38L34.7831 30.1064C35.1552 29.8811 35.462 29.5685 35.6748 29.198C35.8876 28.8275 35.9995 28.4111 36 27.9876C36.0005 27.5641 35.8897 27.1474 35.6778 26.7764C35.4659 26.4054 35.1599 26.0922 34.7883 25.866Z" fill="black"/>
					</svg>
				</div>


				<div className="review-section-img">
					{imageUrl && <img src={imageUrl} alt="Card Image" />}
				</div>
			</div>

			{/*Slider*/}
			<div className="slick-slider">
				{items.map((item, index) => (
					<div key={index} className="slider-item">
						<TextControl
							label={__('Title', 'review-block')}
							value={item.title}
							onChange={(value) => updateCard(index, 'title', value)}
						/>
						<TextControl
							label={__('Subtitle', 'review-block')}
							value={item.subtitle}
							onChange={(value) => updateCard(index, 'subtitle', value)}
						/>
						<MediaUpload
							onSelect={(media) => updateCard(index, 'videoUrl', media.url)}
							allowedTypes={['video']}
							render={({ open }) => (
								<div>
									<Button
										onClick={open}
										variant="primary"
									>
										{item.videoUrl
											? __('Change Video', 'review-block')
											: __('Select Video', 'review-block')}
									</Button>
									{item.videoUrl && (
										<div className="video-preview">
											<video
												controls
												src={item.videoUrl}
												style={{ width: '100%', marginTop: '10px' }}
											/>
										</div>
									)}
								</div>
							)}
						/>
						<Button
							isSecondary
							isDestructive
							onClick={() => removeCard(index)}
						>
							{__('Remove', 'review-block')}
						</Button>
					</div>
				))}
				<Button isPrimary onClick={addCard}>
					{__('Add Slide', 'review-block')}
				</Button>
			</div>

		</section>
	);
}
