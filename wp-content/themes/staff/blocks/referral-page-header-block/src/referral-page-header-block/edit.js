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
import { InspectorControls, useBlockProps, RichText, PanelColorSettings, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button, TextareaControl } from '@wordpress/components';

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
		title,
		items = [],
		iconUrl,
		imgUrl,
		firstButtonText,
		firstButtonUrl,
		secondButtonText,
		secondButtonUrl,
	} = attributes;


	const MAX_TOP_BOXES = 3;


	const updateItem = (index, key, value) => {
		const updatedItems = [...items];
		updatedItems[index][key] = value;
		setAttributes({ items: updatedItems });
	};

	const addItem = () => {
		if (items.length >= MAX_TOP_BOXES) {
			alert(__('Вы не можете добавить больше 3 элементов.', 'custom-block'));
			return;
		}
		setAttributes({ items: [...items, { itemUnderText: '' }] });
	};

	const removeItem = (index) => {
		const updatedItems = [...items];
		updatedItems.splice(index, 1);
		setAttributes({ items: updatedItems });
	};


	return (
		<>
			<section {...useBlockProps({className: "referral_page_header section"})}>

				<InspectorControls>
					<PanelBody title="Настройки текста">
						<TextControl
							label="Текст подзаголовка"
							value={subSectionText}
							onChange={(value) => setAttributes({subSectionText: value})}
						/>
					</PanelBody>
				</InspectorControls>

				<div className="section__sub">
					<div className="section__line"></div>
					<div className="section__text">{subSectionText}</div>
				</div>

				<div className="referral_page_header__top__container">
					<RichText
						tagName="h3"
						value={title}
						onChange={(newContent) => setAttributes({title: newContent})}
						placeholder=" Введите заголовок блока..."
						style={{}}
						className="referral_page_header__tittle"
					/>

					<div {...useBlockProps({className: "referral_page_header__items"})}>
						{items.map((item, index) => (

							<div className="referral_page_header__item">
								<span></span>
								<RichText
									tagName="p"
									className="referral_page_header__item__text"
									value={item.itemUnderText}
									onChange={(value) => updateItem(index, 'itemUnderText', value)}
									placeholder="Введите текст..."
								/>

								<Button
									onClick={() => removeItem(index)}
									className="button button-secondary"
								>
									Удалить элемент
								</Button>
							</div>
						))}
						<Button onClick={addItem} className="button button-primary">
							Добавить элемент
						</Button>
					</div>
				</div>


				<div className="referral_page_header__banner">

					{iconUrl && (
						<img
							src={iconUrl}
							alt="Selected"
							className="referral_page_header__banner__icon"
						/>
					)}
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => setAttributes({iconUrl: media.url})}
							allowedTypes={['image']}
							render={({open}) => (
								<Button
									onClick={open}
									className={iconUrl ? "button button-secondary updatebtn" : "button button-secondary"}
								>
									{iconUrl ? 'Заменить изображение' : 'Выбрать изображение'}
								</Button>
							)}
						/>
					</MediaUploadCheck>

					{imgUrl && (
						<img
							src={imgUrl}
							alt="Selected"
							className="referral_page_header__banner__img"
						/>
					)}
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => setAttributes({imgUrl: media.url})}
							allowedTypes={['image']}
							render={({open}) => (
								<Button
									onClick={open}
									className={imgUrl ? "button button-secondary updatebtn" : "button button-secondary"}
								>
									{imgUrl ? 'Заменить изображение' : 'Выбрать изображение'}
								</Button>
							)}
						/>
					</MediaUploadCheck>

					<div className="referral_page_header__banner__links">
						<RichText
							tagName="a"
							href={firstButtonUrl}
							value={firstButtonText}
							onChange={(newText) => setAttributes({firstButtonText: newText})}
							placeholder={__("Введите текст кнопки", "custom-block")}
							className="referral_page_header__banner__link"
							target="_blank"
							rel="noopener noreferrer"
						/>
						<TextControl
							label={__("Ссылка кнопки", "custom-block")}
							value={firstButtonUrl}
							onChange={(newUrl) => setAttributes({firstButtonUrl: newUrl})}
							placeholder={__("Введите ссылку кнопки", "custom-block")}
						/>


						<RichText
							tagName="a"
							href={secondButtonUrl}
							value={secondButtonText}
							onChange={(newText) => setAttributes({secondButtonText: newText})}
							placeholder={__("Введите текст кнопки", "custom-block")}
							className="referral_page_header__banner__link"
							target="_blank"
							rel="noopener noreferrer"
						/>
						<TextControl
							label={__("Ссылка кнопки", "custom-block")}
							value={secondButtonUrl}
							onChange={(newUrl) => setAttributes({secondButtonUrl: newUrl})}
							placeholder={__("Введите ссылку кнопки", "custom-block")}
						/>
					</div>

				</div>


			</section>

		</>
	);
}
