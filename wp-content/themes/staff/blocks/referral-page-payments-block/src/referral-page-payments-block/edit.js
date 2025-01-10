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
		items = []
	} = attributes;



	const updateItem = (index, key, value) => {
		const updatedItems = [...items];
		updatedItems[index][key] = value;
		setAttributes({ items: updatedItems });
	};

	const addItem = () => {
		setAttributes({ items: [...items, { title: '', underText: '', imgUrl: '' }] });
	};

	const removeItem = (index) => {
		const updatedItems = [...items];
		updatedItems.splice(index, 1);
		setAttributes({ items: updatedItems });
	};



	return (
		<>
			<section {...useBlockProps({className: "referral_page_payments section"})}>

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
					className="referral_page_payments__title"
				/>


				<div {...useBlockProps({className: "referral_page_payments__blocks__container"})}>
					{items.map((item, index) => (

						<div className="referral_page_payments__block">

							<div className="referral_page_payments__block__img">
								{item.imgUrl && (
									<img
										src={item.imgUrl}
										alt="Selected"
										style={{maxWidth: '100%'}}
									/>
								)}
								<MediaUploadCheck>
									<MediaUpload
										onSelect={(media) => updateItem(index, 'imgUrl', media.url)}
										allowedTypes={['image']}
										render={({open}) => (
											<Button
												onClick={open}
												className={item.imgUrl ? "button button-secondary updatebtn" : "button button-secondary"}
											>
												{item.imgUrl ? 'Заменить изображение' : 'Выбрать изображение'}
											</Button>
										)}
									/>
								</MediaUploadCheck>
							</div>

							<RichText
								tagName="h3"
								className="referral_page_payments__block__title"
								value={item.title}
								onChange={(value) => updateItem(index, 'title', value)}
								placeholder="Введите заголовок..."
							/>
							<RichText
								tagName="span"
								className="referral_page_payments__block__text"
								value={item.underText}
								onChange={(value) => updateItem(index, 'underText', value)}
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


			</section>

		</>
	);
}

