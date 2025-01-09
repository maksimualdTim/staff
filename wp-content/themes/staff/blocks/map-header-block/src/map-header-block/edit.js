/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n'

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

 import { useBlockProps, MediaUpload , RichText} from '@wordpress/block-editor';
 import { PanelBody, TextControl,TextareaControl, Button } from '@wordpress/components';
 import { InspectorControls } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss'

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
    buttonMapText,
    buttonMapUrl,
    buttonText,
    buttonUrl,
    underFromText,
    imageUrl,
  } = attributes

  return (
    <section {...useBlockProps({ className: 'salon-header-block' })}>
      <InspectorControls>
        <PanelBody title="Настройки текста">
          <TextControl
            label={__('Текст', 'custom-block')}
            value={subSectionText}
            onChange={(value) => setAttributes({ subSectionText: value })}
          />
          <TextControl
            label={__('Заголовок', 'custom-block')}
            value={title}
            onChange={(value) => setAttributes({ title: value })}
          />
          <TextControl
            label={__('Текст кнопки', 'custom-block')}
            value={buttonMapText}
            onChange={(value) => setAttributes({ buttonMapText: value })}
          />
          <TextControl
            label={__('Ссылка кнопки', 'custom-block')}
            value={buttonMapUrl}
            onChange={(value) => setAttributes({ buttonMapUrl: value })}
          />
          <TextControl
            label={__('Текст кнопки', 'custom-block')}
            value={buttonText}
            onChange={(value) => setAttributes({ buttonText: value })}
          />
          <TextControl
            label={__('Ссылка кнопки', 'custom-block')}
            value={buttonUrl}
            onChange={(value) => setAttributes({ buttonUrl: value })}
          />

          <TextareaControl
            label="Текст под кнопкой"
            value={underFromText}
            onChange={(value) => setAttributes({ underFromText: value })}
          />
        </PanelBody>

        <PanelBody title="Настройки изображения">
          <MediaUpload
            onSelect={(media) => setAttributes({ imageUrl: media.url })}
            allowedTypes={['image']}
            render={({ open }) => (
              <Button onClick={open} isSecondary>
                {imageUrl ? 'Изменить изображение' : 'Выбрать изображение'}
              </Button>
            )}
          />
        </PanelBody>
      </InspectorControls>

      <div className="header-block-container">
        <div className="header-section-content">
          <div className="header-uppertext">
            {subSectionText || __('Ваш заголовок', 'custom-block')}
          </div>

          <RichText
            tagName="h2"
            value={title}
            label="Заголовок"
            placeholder="Введите заголовок ..."
            onChange={(val) => setAttributes({ title: val })}
            className="header-section-title"
          />

          <div className="map-header-btn">
            {buttonMapText && buttonMapUrl && (
              <a
                href={buttonMapUrl}
                className="header-section-btn-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {buttonMapText}
              </a>
            )}
            {buttonText && buttonUrl && (
              <a
                href={buttonUrl}
                className="header-section-btn-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {buttonText}
              </a>
            )}
          </div>

          <p className="header-section-description">{underFromText}</p>
        </div>
        <div className="header-section-img">
          {imageUrl && <img src={imageUrl} alt="Card Image" />}
        </div>
      </div>
    </section>
  )
}
