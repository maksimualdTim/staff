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
	const { items = [], underTextGroup = [], contentBox = [],subSectionText, subSectionNum, title, imageUrl , bgUrl} = attributes;


//######## DYNAMIC BLOCK
// Максимальное количество элементов contentBox
	const MAX_CONTENT_BOXES = 2;

// Функция добавления нового contentBox
	const addContentBox = () => {
		if (contentBox.length < MAX_CONTENT_BOXES) {
			const newContentBox = [
				...contentBox,
				{
					title: '',
					nameLabel: '',
					name: '',
					descriptionLabel: '',
					description: '',
					buttons: [
						{ text: '', link: '' },
						{ text: '', link: '' },
					],
					pointsGroup: [],
				},
			];
			setAttributes({ contentBox: newContentBox });
		}
	};

// Функция обновления поля в contentBox
	const updateContentBox = (index, field, value) => {
		const updatedBoxes = contentBox.map((box, i) => {
			if (i === index) {
				return { ...box, [field]: value };
			}
			return box;
		});
		setAttributes({ contentBox: updatedBoxes });
	};

// Функция обновления элемента pointsGroup
	const updatePointsGroup = (boxIndex, groupIndex, value) => {
		const updatedBoxes = contentBox.map((box, i) => {
			if (i === boxIndex) {
				const updatedGroup = box.pointsGroup.map((point, j) => {
					if (j === groupIndex) return value;
					return point;
				});
				return { ...box, pointsGroup: updatedGroup };
			}
			return box;
		});
		setAttributes({ contentBox: updatedBoxes });
	};

// Функция добавления элемента в pointsGroup
	const addPoint = (boxIndex) => {
		const updatedBoxes = contentBox.map((box, i) => {
			if (i === boxIndex) {
				return { ...box, pointsGroup: [...box.pointsGroup, ''] };
			}
			return box;
		});
		setAttributes({ contentBox: updatedBoxes });
	};

// Функция удаления экземпляра contentBox
	const removeContentBox = (index) => {
		const updatedBoxes = contentBox.filter((_, i) => i !== index);
		setAttributes({ contentBox: updatedBoxes });
	};
// Функция обновления кнопок
	const updateButton = (boxIndex, btnIndex, field, value) => {
		const updatedBoxes = contentBox.map((box, i) => {
			if (i === boxIndex) {
				const updatedButtons = box.buttons.map((button, j) => {
					if (j === btnIndex) {
						return { ...button, [field]: value };
					}
					return button;
				});
				return { ...box, buttons: updatedButtons };
			}
			return box;
		});
		setAttributes({ contentBox: updatedBoxes });
	};


//######## TEXT

	// Function to add a new text item
	const addUnderTextGroupItem = () => {
		const newGroup = [...underTextGroup, { text: '' }];
		setAttributes({ underTextGroup: newGroup });
	};

	// Function to update a text item
	const updateUnderTextGroup = (index, value) => {
		const newGroup = underTextGroup.map((item, i) => {
			if (i === index) {
				return { ...item, text: value };
			}
			return item;
		});
		setAttributes({ underTextGroup: newGroup });
	};

	// Function to remove a text item
	const removeUnderTextGroupItem = (index) => {
		const newGroup = underTextGroup.filter((_, i) => i !== index);
		setAttributes({ underTextGroup: newGroup });
	};

//######## SLIDER
	// Function to add a new slider item
	const addCard = () => {
		const newItems = [...items, { slideImageUrl: '' }];
		setAttributes({ items: newItems });
	};

	// Function to update a slider item
	const updateCard = (index, value) => {
		const newItems = items.map((item, i) => {
			if (i === index) {
				return { ...item, slideImageUrl: value };
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
			className: "card-sec section",
			style: bgUrl ? { backgroundImage: `url(${bgUrl})` } : {},
		})}>

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

			<div className="card-section-content">
				<div className="left-card-sec">
					<RichText
						tagName="h2"
						value={title}
						label='Заголовок'
						placeholder='Введите заголовок ...'
						onChange={(val) => setAttributes({title: val})}
						className="card-sec-title"
					/>

					<div className="card-sec-img">
						{imageUrl && <img src={imageUrl} alt="Card Image" />}
					</div>

					{/* Slider */}
					<div className="swiper">
						<div className="swiper-wrapper">
							{items.map((item, index) => (
								<div key={index} className="swiper-slide" style={{ display: 'inline-block' }}>
									<MediaUpload
										onSelect={(media) => updateCard(index, media.url)}
										allowedTypes={['image']}
										render={({ open }) => (
											<div>
												<Button onClick={open} variant="primary">
													{item.slideImageUrl
														? __('Change Image', 'review-block')
														: __('Select Image', 'review-block')}
												</Button>
												{item.slideImageUrl && (
													<div className="image-preview" style={{ marginTop: '10px' }}>
														<img
															src={item.slideImageUrl}
															alt={__('Slide Image', 'review-block')}
															style={{ width: '100%' }}
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
						</div>
						<Button isPrimary onClick={addCard}>
							{__('Add Slide', 'review-block')}
						</Button>
					</div>

					{/*	Text*/}
					<div className="under-text-group">
						{underTextGroup.map((item, index) => (
							<div key={index} className="text-item">
								<TextControl
									label={__('Text Content', 'review-block')}
									value={item.text || ''}
									onChange={(value) => updateUnderTextGroup(index, value)}
								/>
								<Button
									isSecondary
									isDestructive
									onClick={() => removeUnderTextGroupItem(index)}
								>
									{__('Remove', 'review-block')}
								</Button>
							</div>
						))}
						<Button isPrimary onClick={addUnderTextGroupItem}>
							{__('Add Text Item', 'review-block')}
						</Button>
					</div>
				</div>

				<div className="right-card-sec">
					<div className="tab-container">
						<div className="tabs">

						</div>

					</div>
				</div>
			</div>


			{/*DYNAMIC BLOCK	*/}
			<div className="content-box-wrapper ctb-admin-panel-control">
				{contentBox.map((box, index) => (
					<div key={index} className="card-type-content-box">
						<TextControl
							label={__('Title', 'your-text-domain')}
							value={box.title}
							onChange={(value) => updateContentBox(index, 'title', value)}
						/>
						<TextControl
							label={__('Название поля', 'your-text-domain')}
							value={box.nameLabel}
							onChange={(value) => updateContentBox(index, 'nameLabel', value)}
						/>
						<TextControl
							label={__('Name', 'your-text-domain')}
							value={box.name}
							onChange={(value) => updateContentBox(index, 'name', value)}
						/>
						<TextControl
							label={__('Название поля', 'your-text-domain')}
							value={box.descriptionLabel}
							onChange={(value) => updateContentBox(index, 'descriptionLabel', value)}
						/>
						<TextareaControl
							label={__('Description', 'your-text-domain')}
							value={box.description}
							onChange={(value) => updateContentBox(index, 'description', value)}
						/>
						<div className="buttons">
							{box.buttons.map((button, btnIndex) => (
								<div key={btnIndex} className="button-group">
									<TextControl
										label={__('Button Text', 'your-text-domain')}
										value={button.text}
										className="admin-panel-btn-text"
										onChange={(value) =>
											updateButton(index, btnIndex, 'text', value)
										}
									/>
									<TextControl
										label={__('Button Link', 'your-text-domain')}
										value={button.link}
										className="admin-panel-btn-link"
										onChange={(value) =>
											updateButton(index, btnIndex, 'link', value)
										}
									/>
								</div>
							))}
						</div>
						<div className="points-group">
							{box.pointsGroup.map((point, groupIndex) => (
								<TextControl
									key={groupIndex}
									label={__('Point', 'your-text-domain')}
									value={point}
									onChange={(value) =>
										updatePointsGroup(index, groupIndex, value)
									}
								/>
							))}
							<Button
								isSecondary
								className="admin-panel-btn-add"
								onClick={() => addPoint(index)}
							>
								{__('Add Point', 'your-text-domain')}
							</Button>
						</div>
						<Button
							isSecondary
							isDestructive
							onClick={() => removeContentBox(index)}
						>
							{__('Remove Content Box', 'your-text-domain')}
						</Button>
					</div>
				))}
				{contentBox.length < MAX_CONTENT_BOXES && (
					<Button isPrimary onClick={addContentBox}>
						{__('Add Content Box', 'your-text-domain')}
					</Button>
				)}
			</div>


		</section>
	);
}
