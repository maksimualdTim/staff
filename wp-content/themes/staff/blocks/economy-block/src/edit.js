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
import { PanelBody, TextControl, Button, TextareaControl } from '@wordpress/components';
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
		items = [],
		singleItem = [],
		subSectionText,
		subSectionNum,
		title,
		sideText,
		btnText,
		btnUrl,
		imageUrl,
	} = attributes;

	const MAX_ITEMS = 2;

	const MAX_SINGLE_ITEM = 1; // Максимум один экземпляр

// Function to add a new singleItem
	const addSingleItem = () => {
		if (singleItem.length < MAX_SINGLE_ITEM) {
			const newItem = [
				...singleItem,
				{ name: '', number: '', underNumText: '', description: '', img: '' },
			];
			setAttributes({ singleItem: newItem });
		}
	};

// Function to update a specific property of singleItem
	const updateSingleItem = (index, key, value) => {
		const updatedItem = singleItem.map((item, i) => {
			if (i === index) {
				return { ...item, [key]: value };
			}
			return item;
		});
		setAttributes({ singleItem: updatedItem });
	};

// Function to remove a singleItem
	const removeSingleItem = (index) => {
		const filteredItems = singleItem.filter((_, i) => i !== index);
		setAttributes({ singleItem: filteredItems });
	};

// Добавить новый item
	const addItem = () => {
		if (items.length < MAX_ITEMS) {
			const newItem = {
				title: '',
				number: '',
				description: '',
				img: '',
			};
			setAttributes({ items: [...items, newItem] });
		}
	};

// Обновить данные в item
	const updateItem = (index, field, value) => {
		const updatedItems = items.map((item, i) => {
			if (i === index) {
				return { ...item, [field]: value };
			}
			return item;
		});
		setAttributes({ items: updatedItems });
	};

// Удалить item
	const removeItem = (index) => {
		const updatedItems = items.filter((_, i) => i !== index);
		setAttributes({ items: updatedItems });
	};

	return (
		<section { ...useBlockProps({className: "economy section"}) }>
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
						label="Текст сбоку"
						value={sideText}
						onChange={(value) => setAttributes({ sideText: value })}
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

			<div className="economy-section-content">
				<div className="economy-card-preview">
					<RichText
						tagName="h3"
						value={title}
						label='Заголовок'
						placeholder='Введите заголовок ...'
						onChange={(val) => setAttributes({title: val})}
						className="economy-section-title"
					/>
					<p className="economy-section-description">{sideText}</p>
				</div>

				<div className="economy-block-items">
					<div className="economy-single-item">
						{singleItem.map((item, index) => (
							<div key={index} className="single-item">

								<TextControl
									label={__('Number', 'your-text-domain')}
									value={item.number}
									onChange={(value) => updateSingleItem(index, 'number', value)}
								/>
								<TextControl
									label={__('Under Number Text', 'your-text-domain')}
									value={item.underNumText}
									onChange={(value) => updateSingleItem(index, 'underNumText', value)}
								/>
								<TextControl
									label={__('Name', 'your-text-domain')}
									value={item.name}
									onChange={(value) => updateSingleItem(index, 'name', value)}
								/>
								<TextareaControl
									label={__('Description', 'your-text-domain')}
									value={item.description}
									onChange={(value) => updateSingleItem(index, 'description', value)}
								/>
								<MediaUpload
									onSelect={(media) =>
										updateSingleItem(index, 'img', media.url)
									}
									allowedTypes={['image']}
									render={({ open }) => (
										<Button isSecondary onClick={open}>
											{item.img ? __('Change Image', 'your-text-domain') : __('Add Image', 'your-text-domain')}
										</Button>
									)}
								/>
								{item.img && <img src={item.img} alt={__('Preview', 'your-text-domain')} className="preview-img" />}
								<Button
									isSecondary
									isDestructive
									onClick={() => removeSingleItem(index)}
								>
									{__('Remove Single Item', 'your-text-domain')}
								</Button>
							</div>
						))}
						{singleItem.length < MAX_SINGLE_ITEM && (
							<Button isPrimary onClick={addSingleItem}>
								{__('Add Single Item', 'your-text-domain')}
							</Button>
						)}
					</div>
					<div className="economy-double-items">

						{items.map((item, index) => (
							<div key={index} className="economy-block-item-box">
								<TextControl
									label={__('Title', 'your-text-domain')}
									value={item.title}
									onChange={(value) => updateItem(index, 'title', value)}
								/>
								<TextControl
									label={__('Number', 'your-text-domain')}
									value={item.number}
									onChange={(value) => updateItem(index, 'number', value)}
								/>
								<TextareaControl
									label={__('Description', 'your-text-domain')}
									value={item.description}
									onChange={(value) => updateItem(index, 'description', value)}
								/>
								<MediaUpload
									onSelect={(media) => updateItem(index, 'img', media.url)}
									allowedTypes={['image']}
									render={({ open }) => (
										<Button isSecondary onClick={open}>
											{item.img
												? __('Change Image', 'your-text-domain')
												: __('Upload Image', 'your-text-domain')}
										</Button>
									)}
								/>
								{item.img && (
									<img
										src={item.img}
										alt={__('Selected Image', 'your-text-domain')}
										style={{ maxWidth: '100%', marginTop: '10px' }}
									/>
								)}

								<Button
									isDestructive
									isSecondary
									onClick={() => removeItem(index)}
								>
									{__('Remove Item', 'your-text-domain')}
								</Button>
							</div>
						))}
						{items.length < MAX_ITEMS && (
							<Button isPrimary onClick={addItem}>
								{__('Add Item', 'your-text-domain')}
							</Button>
						)}
					</div>
				</div>
				<div className="economy-preview-btns">
					<a href={btnUrl}  className="economy-section-btn ">{btnText}</a>
				</div>

			</div>

		</section>
	);
}


