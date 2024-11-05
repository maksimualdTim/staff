/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { Button, PanelBody, TextControl, Icon } from '@wordpress/components';
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';

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

function Pipe ({print}) {
	if(print) {
		return (
			<div class="pipe">
				<svg width="69" height="19" viewBox="0 0 69 19" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0 0H69C60.6974 3.61225 60.6974 15.3877 69 19H0C7.70424 15.0096 7.70424 3.99036 0 0Z" fill="#508AFA"/>
				</svg>
			</div>
		)
	}
	return <></>

}
const EditIcon = () => (
	<Icon
		icon={ () => (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" aria-hidden="true" focusable="false"><path d="m19 7-3-3-8.5 8.5-1 4 4-1L19 7Zm-7 11.5H5V20h7v-1.5Z"></path></svg>
		) }
	/>
);

export default function Edit({ attributes, setAttributes }) {
	const { items = [], title, descriptionText, subSectionText, link, subSectionNumber } = attributes;


	// Function to add a new card
	const addCard = () => {
		const newItems = [...items, { title: '', subtitle: '', descriptionText: '', iconUrl: '' }];
		setAttributes({ items: newItems });
	};

	// Function to update a card's details
	const updateCard = (index, field, value) => {
		const newItems = items.map((item, i) => {
			if (i === index) {
				return { ...item, [field]: value };
			}
			return item;
		});
		
		setAttributes({ items: newItems });
	};

	// Function to remove a card
	const removeCard = (index) => {
		const newItems = items.filter((_, i) => i !== index);
		setAttributes({ items: newItems });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Настройки")}>
					<TextControl
						label={__("Текст секции")}
						value={subSectionText || ''}
						onChange={(value) => setAttributes({ subSectionText: value })}
					/>
					<TextControl
						label={__("Цифра секции")}
						value={subSectionNumber}
						onChange={(value) => setAttributes({ subSectionNumber: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps({ className: "advantages section" })}>
				<div className="advantages__container">
					<div className="advantages__cards">
						{items.map((item, index) => (
							<div class="advantages__cardwrapper" key={index}>
								<div class="advantages__card">
									<img class="bg" src={`${myThemeData.themeUrl}/img/advantages__card.png`} alt="card" />
									<div class="advantages__top">
										<div class="advantages__icon">
											{item.iconUrl && <img src={item.iconUrl} alt="icon" />}
											<MediaUpload
												onSelect={(media) => updateCard(index, 'iconUrl', media.url)}
												allowedTypes={['image']}
												render={({ open }) => (
													<Button onClick={open} variant="secondary" style={{position: 'relative', transform: 'translate(-50%, -50%)', left: '50%', top: '50%'}}>
														{item.iconUrl ? <EditIcon /> : <EditIcon />}
													</Button>
													
												)}
											/>
										</div>
										<div class="advantages__content">
											<RichText
												tagName='div'
												label="Подзаголовок"
												placeholder='Введите подзаголовок ...'
												value={item.subtitle}
												onChange={(value) => updateCard(index, 'subtitle', value)}
												className="advantages__subtitle"
											/>
											<RichText
												tagName='div'
												label="Заголовок"
												placeholder='Введите заголовок ...'
												value={item.title}
												onChange={(value) => updateCard(index, 'title', value)}
												className="advantages__title"
											/>	
										</div>
									</div>
									<div class="advantages__bottom">
										<div class="advantages__empty"></div>
										<div class="advantages__content --bottom">
											<RichText
												tagName="div"
												value={item.descriptionText}
												onChange={(value) => updateCard(index, 'descriptionText', value)}
												placeholder="Введите текст..."
												className="advantages__text"
											/>
										</div>
									</div>
								</div>
								<Pipe print={index !== items.length - 1} />

								<Button isDestructive onClick={() => removeCard(index)} style={{position: 'absolute', bottom: '30px', color: 'red', 'z-index': '100', border: '1px solid red'}}>
									{"Удалить карточку"}
								</Button>
							</div>
						))}
					</div>
					<Button onClick={addCard} style={{border: '1px solid var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9))'}}>
						{"Добавить карточку"}
					</Button>
					<div className="advantages__info">
						<div className="section__sub">
							<div className="section__line"></div>
							<div className="section__text">{subSectionText}</div>
							<div className="section__number">{subSectionNumber && "/ " + subSectionNumber + " /"}</div>
						</div>
						<RichText
							tagName="h3"
							value={title}
							label='Заголовок'
							placeholder='Введите заголовок ...'
							onChange={(val) => setAttributes({title: val})}
							className="advantages__blocktitle"
						/>
						<RichText
							tagName="div"
							value={descriptionText}
							label='Заголовок'
							onChange={(val) => setAttributes({descriptionText: val})}
							placeholder='Введите текст ...'
							className="advantages__blocktext"
						/>
						<RichText
							tagName="div"
							value={link}
							label='Заголовок'
							onChange={(val) => setAttributes({link: val})}
							placeholder='Введите ссылку ...'
							className="advantages__blocklink"
						/>
					</div>
				</div>
			</section>
		</>
	);
}
