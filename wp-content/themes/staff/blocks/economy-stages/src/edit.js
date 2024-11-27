/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { Spinner, Placeholder, PanelBody, TextControl, ToggleControl, Button } from '@wordpress/components';
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps, RichText, PanelColorSettings, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

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
	const { subSectionText, title, items } = attributes;

    const updateItem = (index, key, value) => {
        const updatedItems = [...items];
        updatedItems[index][key] = value;
        setAttributes({ items: updatedItems });
    };

    const addItem = () => {
        setAttributes({ items: [...items, { title: '', subText: '', imgUrl: '' }] });
    };

    const removeItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setAttributes({ items: updatedItems });
    };

	return (
		<>
            <InspectorControls>
               <PanelBody title={ "Настройки" }>
                    <TextControl
                        label={ "Текст секции" }
                        value={ subSectionText || '' }
                        onChange={ ( value ) =>
                            setAttributes( { subSectionText: value } )
                        }
                    />
                </PanelBody>
            </InspectorControls>
			<section { ...useBlockProps({className: "economy-stages section"}) }>
				<div className="section__sub">
					<div className="section__line"></div>
					<div className="section__text">{subSectionText}</div>
				</div>

				<div className="economy-stages__block">
					<RichText
						tagName="h3"
						value={title}
						onChange={(newContent) => setAttributes({ title: newContent })}
						placeholder="Введите текст ..."
						style={{}}
						className="economy-stages__blocktitle"
					/>
				</div>
			</section>

			<div { ...useBlockProps({className: "economy-stages-steps"}) }>
			{items.map((item, index) => (
                    <div className="economy-stages__stage" key={index}>
                        <div className="economy-stages__img">
						{item.imgUrl && (
                                <img
                                    src={item.imgUrl}
                                    alt="Selected"
                                    style={{ maxWidth: '100%', marginBottom: '10px' }}
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
                        <div className="economy-stages__content">
                            <div className="section__sub">
								<div className="section__line"></div>
                                <RichText
                                    tagName="div"
                                    className="section__text"
                                    value={item.subText}
                                    onChange={(value) => updateItem(index, 'subText', value)}
                                    placeholder="Введите текст подзаголовка..."
                                />
                            </div>
                            <RichText
                                tagName="h3"
                                className="economy-stages__blocktitle"
                                value={item.title}
                                onChange={(value) => updateItem(index, 'title', value)}
                                placeholder="Введите заголовок..."
                            />
							<RichText
								tagName="div" 
								className="economy-stages-stage__text"
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
                    </div>
                ))}
                <Button onClick={addItem} className="button button-primary">
                    Добавить элемент
                </Button>
			</div>
		</>
	);
}
