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
 import { useBlockProps, MediaUpload, RichText } from '@wordpress/block-editor'
 import { PanelBody, TextControl } from '@wordpress/components'
 import { InspectorControls } from '@wordpress/block-editor'
 
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
   const { subSectionText, title, annualText, fleetSize, perWeek, gallons } = attributes
 
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
           <TextControl
             label="Текст ежегодная экономия"
             value={annualText}
             onChange={(value) => setAttributes({ annualText: value })}
           />


         <TextControl
             label="Текст размер автопарка"
             value={fleetSize}
             onChange={(value) => setAttributes({ fleetSize: value })}
           />


         <TextControl
             label="Текст пополнения в неделю"
             value={perWeek}
             onChange={(value) => setAttributes({ perWeek: value })}
           />

            <TextControl
              label="Текст галлоны на заправку"
              value={gallons}
              onChange={(value) => setAttributes({ gallons: value })}
            />
        </PanelBody>
       </InspectorControls>
 
       <section {...useBlockProps({ className: 'calculator section' })}>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <div>
         <div className="section__sub">
           <div className="section__line"></div>
           <div className="section__text">{subSectionText}</div>
         </div>
 
         <RichText
           tagName="h3"
           value={title}
           label="Заголовок"
           placeholder="Введите заголовок ..."
           onChange={(val) => setAttributes({ title: val })}
           className="calculator-title"    
           />
          </div>

        <div className="calculator__card">
        <span className="calculator__content-text">{fleetSize}</span>
          <span className="calculator__content-text">{perWeek}</span>
					<span className="calculator__content-text">{gallons}</span> 
        </div>
          </div>
         <span className="calculator__results-text">{annualText}</span>
       </section>
     </>
   )
 }
 