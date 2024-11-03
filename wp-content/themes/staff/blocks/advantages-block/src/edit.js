/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { Button, PanelBody, TextControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

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
	const { items } = attributes;

	// Функция для добавления нового пустого элемента
	const addItem = () => {
	  const newItems = [...items, { title: '', content: '' }];
	  setAttributes({ items: newItems });
	};
  
	// Функция для обновления значений title или content
	const updateItem = (index, key, value) => {
	  const newItems = items.map((item, idx) => {
		if (idx === index) {
		  return { ...item, [key]: value };
		}
		return item;
	  });
	  setAttributes({ items: newItems });
	};
  
	// Функция для удаления элемента
	const removeItem = (index) => {
	  const newItems = items.filter((_, idx) => idx !== index);
	  setAttributes({ items: newItems });
	};
  
	return (
	  <div {...useBlockProps()}>
		<InspectorControls>
		  <PanelBody title={__("List Settings", "text-domain")}>
			<Button isPrimary onClick={addItem}>
			  {__("Add New Item", "text-domain")}
			</Button>
		  </PanelBody>
		</InspectorControls>
  
		<div className="dynamic-list">
		  {items.map((item, index) => (
			<div key={index} className="list-item">
			  <RichText
				tagName="h4"
				value={item.title}
				onChange={(value) => updateItem(index, 'title', value)}
				placeholder={__("Title", "text-domain")}
			  />
			  <RichText
				tagName="p"
				value={item.content}
				onChange={(value) => updateItem(index, 'content', value)}
				placeholder={__("Content", "text-domain")}
			  />
			  <Button isDestructive onClick={() => removeItem(index)}>
				{__("Remove Item", "text-domain")}
			  </Button>
			</div>
		  ))}
		</div>
	  </div>
	);
}
