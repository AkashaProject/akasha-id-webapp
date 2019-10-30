import styled from 'styled-components'

import { borders, fonts } from '../../../../../../../styles'

export interface PersonaRowProps {
  selected: boolean
}

const PersonaRow = styled.div<PersonaRowProps>`
  ${props => borders.whiteBlock('0', props.selected)}

  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: column;

  :not(:first-child) {
    margin-top: 8px;
  }
`

const PersonaNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 16px;
`

const PersonaName = styled.h5`
  ${fonts.text}

  flex-grow: 1;
  margin: 0;
`

const PersonaDivider = styled.div`
  ${borders.dividerHorizontal('0', '16px')}
`

const PersonaAttributesHeader = styled.div`
  ${fonts.greyText}

  margin: 0 17px;
`

const PersonaAttributesList = styled.ul`
  margin: 24px 17px 17px 17px;
  list-style: none;
  padding: 0;
`

const PersonaAttributesRow = styled.li`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 0;
  padding: 0;

  :not(:first-child) {
    border-top: 1px solid #edf0f5;
    padding-top: 16px;
  }

  :not(:last-child) {
    padding-bottom: 16px;
  }
`

const PersonaAttributesLabel = styled.h5`
  ${fonts.greyTextLabel}

  margin: 0 0 2px 0;
`

const PersonaAttributesText = styled.div`
  ${fonts.text}

  word-break: break-all;
`

export {
  PersonaRow,
  PersonaNameContainer,
  PersonaName,
  PersonaDivider,
  PersonaAttributesHeader,
  PersonaAttributesList,
  PersonaAttributesRow,
  PersonaAttributesLabel,
  PersonaAttributesText,
}
