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
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Button, TextControl, TextareaControl, PanelBody } from '@wordpress/components';
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
	const { contentBox = [], subSectionText, title } = attributes;

	// Maximum number of contentBox entries
	const MAX_CONTENT_BOXES = 2;

	// Function to add a new contentBox
	const addContentBox = () => {
		if (contentBox.length < MAX_CONTENT_BOXES) {
			const newContentBox = [
				...contentBox,
				{
					title: '',
					name: '',
					description: '',
					button: { text: '', link: '' },
				},
			];
			setAttributes({ contentBox: newContentBox });
		}
	};

	// Function to update a field in contentBox
	const updateContentBox = (index, field, value) => {
		const updatedBoxes = contentBox.map((box, i) => {
			if (i === index) {
				return { ...box, [field]: value };
			}
			return box;
		});
		setAttributes({ contentBox: updatedBoxes });
	};

	// Function to update the button
	const updateButton = (index, field, value) => {
		const updatedBoxes = contentBox.map((box, i) => {
			if (i === index) {
				return { ...box, button: { ...box.button, [field]: value } };
			}
			return box;
		});
		setAttributes({ contentBox: updatedBoxes });
	};

	// Function to remove a contentBox
	const removeContentBox = (index) => {
		const updatedBoxes = contentBox.filter((_, i) => i !== index);
		setAttributes({ contentBox: updatedBoxes });
	};

	return (
		<section
			{...useBlockProps({
				className: 'we_are_block section we_are_block_admin',
			})}
		>
			<InspectorControls>
				<PanelBody title="Настройки текста">
					<TextControl
						label="Текст подзаголовка"
						value={subSectionText}
						onChange={(value) => setAttributes({ subSectionText: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<div className="section__sub">
				<div className="section__line"></div>
				<div className="section__text">{subSectionText}</div>
			</div>

			<div className="card-section-content">
				<RichText
					tagName="h2"
					value={title}
					label="Заголовок"
					placeholder="Введите заголовок ..."
					onChange={(val) => setAttributes({ title: val })}
					className="card-sec-title"
				/>
			</div>

			{/* DYNAMIC BLOCK */}
			<div className="content-box-wrapper ctb-admin-panel-control">
				{contentBox.map((box, index) => (
					<div key={index} className="card-type-content-box">
						<TextControl
							label={__('Title', 'your-text-domain')}
							value={box.title}
							onChange={(value) => updateContentBox(index, 'title', value)}
						/>
						<TextControl
							label={__('Name', 'your-text-domain')}
							value={box.name}
							onChange={(value) => updateContentBox(index, 'name', value)}
						/>
						<TextareaControl
							label={__('Description', 'your-text-domain')}
							value={box.description}
							onChange={(value) => updateContentBox(index, 'description', value)}
						/>
						<div className="button-group">
							<TextControl
								label={__('Button Text', 'your-text-domain')}
								value={box.button.text}
								onChange={(value) => updateButton(index, 'text', value)}
							/>
							<TextControl
								label={__('Button Link', 'your-text-domain')}
								value={box.button.link}
								onChange={(value) => updateButton(index, 'link', value)}
							/>
						</div>
						<Button
							isSecondary
							isDestructive
							onClick={() => removeContentBox(index)}
							className="remove-content-bx-btn"
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
