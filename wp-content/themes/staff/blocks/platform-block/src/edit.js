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
	const { title, items = []} = attributes;

	const updateItem = (index, key, value) => {
		const updatedItems = [...items];
		updatedItems[index][key] = value;
		setAttributes({ items: updatedItems });
	};

	const addItem = () => {
		setAttributes({ items: [...items, { title: '', text: '', imgUrl: '' }] });
	};

	const removeItem = (index) => {
		const updatedItems = [...items];
		updatedItems.splice(index, 1);
		setAttributes({ items: updatedItems });
	};

	return (
		<>
			<section { ...useBlockProps({className: "platform-block section"}) }>

				<div { ...useBlockProps({className: "platform-block__items"}) }>
					{items.map((item, index) => (

						<div className="platform-block__item">

							<div className="platform-block__item__">
								<RichText
									tagName="h3"
									className="platform-block__item__text"
									value={item.title}
									onChange={(value) => updateItem(index, 'title', value)}
									placeholder="Введите заголовок..."
								/>
								<RichText
									tagName="div"
									className="platform-block__item__description"
									value={item.text}
									onChange={(value) => updateItem(index, 'text', value)}
									placeholder="Введите текст..."
								/>
							</div>
							<div className="platform-block__item__img">
								{item.imgUrl && (
									<img
										src={item.imgUrl}
										alt="Selected"
										style={{ maxWidth: '100%' }}
									/>
								)}
								<MediaUploadCheck>
									<MediaUpload
										onSelect={(media) => updateItem(index, 'imgUrl', media.url)}
										allowedTypes={['image']}
										render={({ open }) => (
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
			</section>

		</>
	);
}
