import { OverlayTrigger, Popover } from 'react-bootstrap'
import {
  ContentTag,
  InPlaceEditingOff,
  isInPlaceEditingActive,
  provideComponent,
  useDataLocator,
  useDataItem,
} from 'scrivito'
import { DataFormOptionsRESTWidget } from './DataFormOptionsRESTWidgetClass'
import { ensureString } from '../../utils/ensureString'

provideComponent(DataFormOptionsRESTWidget, ({ widget }) => {
  const dataItem = useDataItem()

  const id = ['DataFormOptionsWidget', widget.id()].join('-')
  const labelOptions: { htmlFor?: string } = {}
  if (!isInPlaceEditingActive()) labelOptions.htmlFor = id

  const attributeName = widget.get('attributeName')
  const attributeValue = ensureString(dataItem?.get(attributeName))
  const defaultValue = dataItem ? attributeValue : widget.get('defaultValue')

  const data = widget.get('data')
  const dataScope = useDataLocator(data)

  const propertyName = ensureString(widget.get('propertyName'));
  const promptName = ensureString(widget.get('promptName'));

  return (
    <div className="mb-3" key={[id, attributeName].join('-')}>
      <ContentTag
        content={widget}
        attribute="label"
        tag="label"
        className="form-label"
        {...labelOptions}
      />
      {widget.get('required') ? (
        <OverlayTrigger
          placement="top"
          overlay={
            <Popover>
              <Popover.Body>mandatory</Popover.Body>
            </Popover>
          }
        >
          <span className="text-mandatory">*</span>
        </OverlayTrigger>
      ) : null}

      {widget.get('helpText') ? (
        <>
          {' '}
          <OverlayTrigger
            placement="top"
            overlay={
              <Popover>
                <Popover.Body>
                  <InPlaceEditingOff>
                    <ContentTag content={widget} attribute="helpText" />
                  </InPlaceEditingOff>
                </Popover.Body>
              </Popover>
            }
          >
            <i className="bi bi-question-circle"></i>
          </OverlayTrigger>
        </>
      ) : null}

      <div>
        <select
          className="form-select"
          defaultValue={defaultValue}
          id={id}
          name={attributeName}
          required={widget.get('required')}
        >
          {widget.get('required') ? (
            <option value="" disabled>
              {promptName}
            </option>
          ) : (
            <option value="">
              {promptName}
            </option>
          )}

          {dataScope.take().map((optionItem) => (
            <option
              value={optionItem.id()}
              key={[id, 'option', optionItem, optionItem.id()].join('-')}
            >
              {ensureString(optionItem.get(propertyName)) || "#" }
            </option>
          ))}
        </select>
      </div>
    </div>
  )
})
