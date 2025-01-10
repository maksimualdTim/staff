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
		singleItemIcon,
		singleItemTitle,
		singleItemText,
		singleItemImg
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
		setAttributes({ items: [...items, { title: '', underText: '', imgUrl: '', iconUrl: '' }] });
	};

	const removeItem = (index) => {
		const updatedItems = [...items];
		updatedItems.splice(index, 1);
		setAttributes({ items: updatedItems });
	};



	return (
		<>
			<section {...useBlockProps({className: "referral_page_materials section"})}>

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
					className="referral_page_materials__title"
				/>

				<div className="referral_page_materials__container">
					<div className="referral_page_materials__single_container">
						<div className="referral_page_materials__single_block_icon">
							{singleItemIcon && (
								<img
									src={singleItemIcon}
									alt="Selected"
									style={{maxWidth: '100%'}}
								/>
							)}
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) => setAttributes({singleItemIcon: media.url})}
									allowedTypes={['image']}
									render={({open}) => (
										<Button
											onClick={open}
											className={singleItemIcon ? "button button-secondary updatebtn" : "button button-secondary"}
										>
											{singleItemIcon ? 'Заменить изображение' : 'Выбрать изображение'}
										</Button>
									)}
								/>
							</MediaUploadCheck>
						</div>

						<RichText
							tagName="h3"
							value={singleItemTitle}
							onChange={(newContent) => setAttributes({singleItemTitle: newContent})}
							placeholder="Введите заголовок блока ..."
							style={{}}
							className="referral_page_materials__single_block_title"
						/>

						<RichText
							tagName="p"
							value={singleItemText}
							onChange={(newContent) => setAttributes({singleItemText: newContent})}
							placeholder="Введите описание блока ..."
							style={{}}
							className="referral_page_materials__single_block_text"
						/>

						<div className="referral_page_materials__single_block_img">
							{singleItemImg && (
								<img
									src={singleItemImg}
									alt="Selected"
									style={{maxWidth: '100%'}}
								/>
							)}
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) => setAttributes({singleItemImg: media.url})}
									allowedTypes={['image']}
									render={({open}) => (
										<Button
											onClick={open}
											className={singleItemImg ? "button button-secondary updatebtn" : "button button-secondary"}
										>
											{singleItemImg ? 'Заменить изображение' : 'Выбрать изображение'}
										</Button>
									)}
								/>
							</MediaUploadCheck>
						</div>

					</div>

					<div {...useBlockProps({className: "referral_page_materials__group_container"})}>
						{items.map((item, index) => (

							<div className="referral_page_materials__group_item">

								<div className="referral_page_materials__group_item_side">
									<div className="referral_page_materials__group_icon">
										{item.iconUrl && (
											<img
												src={item.iconUrl}
												alt="Selected"
												style={{maxWidth: '100%'}}
											/>
										)}
										<MediaUploadCheck>
											<MediaUpload
												onSelect={(media) => updateItem(index, 'iconUrl', media.url)}
												allowedTypes={['image']}
												render={({open}) => (
													<Button
														onClick={open}
														className={item.iconUrl ? "button button-secondary updatebtn" : "button button-secondary"}
													>
														{item.iconUrl ? 'Заменить изображение' : 'Выбрать изображение'}
													</Button>
												)}
											/>
										</MediaUploadCheck>
									</div>

									<RichText
										tagName="h3"
										className="referral_page_materials__group_title"
										value={item.title}
										onChange={(value) => updateItem(index, 'title', value)}
										placeholder="Введите заголовок..."
									/>
									<RichText
										tagName="span"
										className="referral_page_materials__group_text"
										value={item.underText}
										onChange={(value) => updateItem(index, 'underText', value)}
										placeholder="Введите текст..."
									/>

								</div>

								<div className="referral_page_materials__group_img">
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

			</section>

		</>
	);
}
