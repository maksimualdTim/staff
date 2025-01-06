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
import { useBlockProps, MediaUpload, RichText } from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	Button,
	TextareaControl,
} from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";

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
	const { subSectionText, title, btnText, btnUrl, mapInfo = [] } = attributes;

	const updatemapInfo = (index, field, value) => {
		const updatedBoxes = mapInfo.map((box, i) => {
			if (i === index) {
				return { ...box, [field]: value };
			}
			return box;
		});
		setAttributes({ mapInfo: updatedBoxes });
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
				<PanelBody title="Настройки кнопок">
					<TextControl
						label="Текст кнопки 1"
						value={btnText}
						onChange={(value) => setAttributes({ btnText: value })}
					/>
					<TextControl
						label="Ссылка кнопки 1"
						value={btnUrl}
						onChange={(value) => setAttributes({ btnUrl: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<section {...useBlockProps({ className: "salon-map section" })}>
				<div className="section__sub">
					<div className="section__salon-line"></div>
					<div className="section__salon-text">{subSectionText}</div>
				</div>

				<div className="economy-card-preview">
					<RichText
						tagName="h3"
						value={title}
						label="Заголовок"
						placeholder="Введите заголовок ..."
						onChange={(val) => setAttributes({ title: val })}
						className="salon-map-section-title"
					/>
					<a href={btnUrl} className="salon-map-section-btn">
						{btnText}
					</a>
				</div>

				{mapInfo.map((box, index) => (
					<div key={index}>
						<div key={index}>
							<div id="pulserLeft">
								<PanelBody title="Карта Левая часть">
									<div class="circle__info-wrapper">
										<TextControl
											label={__("priceGallon", "your-text-domain")}
											value={box.priceGallon}
											onChange={(value) =>
												updatemapInfo(index, "priceGallon", value)
											}
										/>
										<TextareaControl
											label={__("gallonText", "your-text-domain")}
											value={box.gallonText}
											onChange={(value) =>
												updatemapInfo(index, "gallonText", value)
											}
										/>
									</div>
									<TextareaControl
										label={__("saleGallonStatesText", "your-text-domain")}
										value={box.saleGallonStatesText}
										onChange={(value) =>
											updatemapInfo(index, "saleGallonStatesText", value)
										}
									/>
								</PanelBody>
							</div>
						</div>
					</div>
				))}

				{mapInfo.map((box, index) => (
					<div key={index}>
						<div key={index}>
							<div id="pulserRight">
								<PanelBody title="Карта Правая часть">
									<div class="circle__info-wrapper">
										<TextControl
											label={__("rightPriceGallon", "your-text-domain")}
											value={box.rightPriceGallon}
											onChange={(value) =>
												updatemapInfo(index, "rightPriceGallon", value)
											}
										/>
										<TextareaControl
											label={__("rightGallonText", "your-text-domain")}
											value={box.rightGallonText}
											onChange={(value) =>
												updatemapInfo(index, "rightGallonText", value)
											}
										/>
									</div>
									<TextareaControl
										label={__("rightSaleGallonStatesText", "your-text-domain")}
										value={box.rightSaleGallonStatesText}
										onChange={(value) =>
											updatemapInfo(index, "rightSaleGallonStatesText", value)
										}
									/>
								</PanelBody>
							</div>
						</div>
					</div>
				))}

				{mapInfo.map((box, index) => (
					<div key={index}>
						<div key={index}>
							<div id="pulserTop">
								<PanelBody title="Карта Верхняя часть">
									<div class="circle__info-wrapper">
										<TextControl
											label={__("topPriceGallon", "your-text-domain")}
											value={box.topPriceGallon}
											onChange={(value) =>
												updatemapInfo(index, "topPriceGallon", value)
											}
										/>
										<TextareaControl
											label={__("topGallonText", "your-text-domain")}
											value={box.topGallonText}
											onChange={(value) =>
												updatemapInfo(index, "topGallonText", value)
											}
										/>
									</div>
									<TextareaControl
										label={__("topSaleGallonStatesText", "your-text-domain")}
										value={box.topSaleGallonStatesText}
										onChange={(value) =>
											updatemapInfo(index, "topSaleGallonStatesText", value)
										}
									/>
								</PanelBody>
							</div>
						</div>
					</div>
				))}

				{mapInfo.map((box, index) => (
					<div key={index}>
						<div key={index}>
							<div id="pulserBottom">
								<PanelBody title="Карта Нижняя часть">
									<div class="circle__info-wrapper">
										<TextControl
											label={__("bottomPriceGallon", "your-text-domain")}
											value={box.bottomPriceGallon}
											onChange={(value) =>
												updatemapInfo(index, "bottomPriceGallon", value)
											}
										/>
										<TextareaControl
											label={__("bottomGallonText", "your-text-domain")}
											value={box.bottomGallonText}
											onChange={(value) =>
												updatemapInfo(index, "bottomGallonText", value)
											}
										/>
									</div>
									<TextareaControl
										label={__("bottomSaleGallonStatesText", "your-text-domain")}
										value={box.bottomSaleGallonStatesText}
										onChange={(value) =>
											updatemapInfo(index, "bottomSaleGallonStatesText", value)
										}
									/>
								</PanelBody>
							</div>
						</div>
					</div>
				))}
			</section>
		</>
	);
}
