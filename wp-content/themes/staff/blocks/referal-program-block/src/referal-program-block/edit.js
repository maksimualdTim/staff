/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	InspectorControls,
	RichText,
	PanelColorSettings,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	Button,
	TextareaControl,
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { subSectionText, title, items = [] } = attributes;

	const updateItem = (index, key, value) => {
		const updatedItems = [...items];
		updatedItems[index][key] = value;
		setAttributes({ items: updatedItems });
	};

	const addItem = () => {
		setAttributes({ items: [...items, { title: '', text: '' }] });
	};

	const removeItem = (index) => {
		const updatedItems = [...items];
		updatedItems.splice(index, 1);
		setAttributes({ items: updatedItems });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Настройки текста">
					<TextControl
						label="Текст подзаголовка"
						value={subSectionText}
						onChange={(value) => setAttributes({ subSectionText: value })}
					/>
					<TextControl
						label="Заголовок"
						value={title}
						onChange={(value) => setAttributes({ title: value })}
					/>
				</PanelBody>
			</InspectorControls>



			<section {...useBlockProps({ className: "referal-program section" })}>
				<div className="referal-program__sub">
					<div className="referal-program__line"></div>
					<div className="referal-program__text">{subSectionText}</div>
				</div>

					<RichText
						tagName="h3"
						value={title}
						label="Заголовок"
						placeholder="Введите заголовок ..."
						onChange={(val) => setAttributes({ title: val })}
						className="referal-program__title"
					/>

		<ul { ...useBlockProps({className: "referal-program__list"}) }>
					{items.map((item, index) => (
						<li className="referal-program__item">
							<span className="referal-program__number">{index + 1}</span>
							<div className="referal-program__content">
								<RichText
									tagName="h3"
									className="referal-program-content__title"
									value={item.title}
									onChange={(value) => updateItem(index, 'title', value)}
									placeholder="Введите заголовок..."
								/>
								<RichText
									tagName="div"
									className="referal-program-content__text"
									value={item.text}
									onChange={(value) => updateItem(index, 'text', value)}
									placeholder="Введите текст..."
								/>
							</div>

							<Button
								onClick={() => removeItem(index)}
								className="button button-secondary"
							>
								Удалить элемент
							</Button>
						</li>
					))}
				</ul>
					<Button onClick={addItem} className="button button-primary">
						Добавить элемент
					</Button>
			</section>
		</>
	);
}
