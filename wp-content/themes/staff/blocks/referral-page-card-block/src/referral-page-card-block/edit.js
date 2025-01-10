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
		upperItems = [],
		betweenSectionText,
		bottomItems = [],
		underSectionText,
		underSectionTextSec,
		singleCardTitle,
		singleCardUpper,
		buttonText,
		buttonUrl
	} = attributes;


	const MAX_TOP_BOXES = 3;
	const MAX_BOTTOM_BOXES = 2;


	const updateItem = (index, key, value) => {
		const updatedItems = [...upperItems];
		updatedItems[index][key] = value;
		setAttributes({ upperItems: updatedItems });
	};

	const addItem = () => {
		if (upperItems.length >= MAX_TOP_BOXES) {
			alert(__('Вы не можете добавить больше 3 элементов.', 'custom-block'));
			return;
		}
		setAttributes({ upperItems: [...upperItems, { title: '', sideText: '', itemUnderText: '' }] });
	};

	const removeItem = (index) => {
		const updatedItems = [...upperItems];
		updatedItems.splice(index, 1);
		setAttributes({ upperItems: updatedItems });
	};


	const updateBottomItems = (index, key, value) => {
		const updatedItems = [...bottomItems];
		updatedItems[index][key] = value;
		setAttributes({ bottomItems: updatedItems });
	};

	const addBottomItems = () => {
		if (upperItems.length >= MAX_BOTTOM_BOXES) {
			alert(__('Вы не можете добавить больше 3 элементов.', 'custom-block'));
			return;
		}
		setAttributes({ bottomItems: [...bottomItems, { title: '', itemUnderText: '' }] });
	};

	const removeBottomItems = (index) => {
		const updatedItems = [...bottomItems];
		updatedItems.splice(index, 1);
		setAttributes({ bottomItems: updatedItems });
	};

	return (
		<>
			<section {...useBlockProps({className: "registration-stages section"})}>

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

				<RichText
					tagName="h3"
					value={title}
					onChange={(newContent) => setAttributes({title: newContent})}
					placeholder="Введите заголовок блока ..."
					style={{}}
					className="referral_page__cards__block_title"
				/>


				<div {...useBlockProps({className: "referral_cards__top_blocks_container"})}>
					{upperItems.map((item, index) => (

						<div className="referral_cards__top_block">
							<div className="referral_cards__top_block_cont">
								<RichText
									tagName="h3"
									className="referral_cards__top_title"
									value={item.title}
									onChange={(value) => updateItem(index, 'title', value)}
									placeholder="Введите заголовок..."
								/>
								<RichText
									tagName="span"
									className="referral_cards__top_side"
									value={item.sideText}
									onChange={(value) => updateItem(index, 'sideText', value)}
									placeholder="Введите текст..."
								/>
							</div>

							<RichText
								tagName="p"
								className="referral_cards__top_under"
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


				<div className="referral_page__cards__block__between">
					<span></span>
					<RichText
						tagName="p"
						value={betweenSectionText}
						onChange={(newContent) => setAttributes({betweenSectionText: newContent})}
						placeholder="Введите заголовок блока ..."
					/>
				</div>


				<div {...useBlockProps({className: "referral_cards__bottom_blocks_container"})}>
					{bottomItems.map((item, index) => (
						<div className="referral_cards__bottom_block">
							<RichText
								tagName="h3"
								className="referral_cards__bottom_title"
								value={item.title}
								onChange={(value) => updateBottomItems(index, 'title', value)}
								placeholder="Введите заголовок..."
							/>
							<RichText
								tagName="p"
								className="referral_cards__bottom_under"
								value={item.itemUnderText}
								onChange={(value) => updateBottomItems(index, 'itemUnderText', value)}
								placeholder="Введите заголовок..."
							/>

							<Button
								onClick={() => removeBottomItems(index)}
								className="button button-secondary"
							>
								Удалить элемент
							</Button>
						</div>
					))}

					<Button onClick={addBottomItems} className="button button-primary">
						Добавить элемент
					</Button>

					<div className="referral_cards__bottom_block">
						<RichText
							tagName="p"
							value={singleCardUpper}
							onChange={(newContent) => setAttributes({singleCardUpper: newContent})}
							placeholder="Введите заголовок блока ..."
							className="referral_cards__bottom_block_upper"
						/>

						<RichText
							tagName="p"
							value={singleCardTitle}
							onChange={(newContent) => setAttributes({singleCardTitle: newContent})}
							placeholder="Введите заголовок блока ..."
							className="referral_cards__bottom_middle"
						/>

						<div className="referral_cards__bottom_link">
							<RichText
								tagName="a"
								href={buttonUrl}
								value={buttonText}
								onChange={(newText) => setAttributes({ buttonText: newText })}
								placeholder={__("Введите текст кнопки", "custom-block")}
								className="map-section-btn"
								target="_blank"
								rel="noopener noreferrer"
							/>
							<TextControl
								label={__("Ссылка кнопки", "custom-block")}
								value={buttonUrl}
								onChange={(newUrl) => setAttributes({ buttonUrl: newUrl })}
								placeholder={__("Введите ссылку кнопки", "custom-block")}
							/>
						</div>

					</div>
				</div>


				<RichText
					tagName="p"
					value={underSectionText}
					onChange={(newContent) => setAttributes({underSectionText: newContent})}
					placeholder="Введите заголовок блока ..."
					style={{}}
					className="referral__cards_under_text"
				/>
				<RichText
					tagName="p"
					value={underSectionTextSec}
					onChange={(newContent) => setAttributes({underSectionTextSec: newContent})}
					placeholder="Введите заголовок блока ..."
					style={{}}
					className="referral__cards_under_text"
				/>

			</section>

		</>
	);
}
