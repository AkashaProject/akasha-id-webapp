import React, { useEffect } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'

import { PersonaData } from '../../../types/users'
import { MobileTopBarWithArrowCancelButton } from '../../shared/MobileTopBarWithArrowCancelButton'
import { Column } from '../shared/Container'
import { DesktopPersonaForm } from '../shared/DesktopPersonaForm'
import { MobilePersonaForm } from '../shared/MobilePersonaForm'
import { SidebarContainer } from '../shared/SidebarContainer'

export interface EditPersonaMatch {
  personaid: string
}

export interface EditPersonaProps extends RouteComponentProps<EditPersonaMatch> {
  redirect: boolean
  loadPersona: (personaId: string) => void
  onSubmit: (formData: PersonaData) => void
}

const EditPersona: React.FC<EditPersonaProps> = ({
  redirect,
  loadPersona,
  onSubmit,
  match,
  history,
}) => {
  useEffect(() => {
    loadPersona(match.params.personaid)
  }, [loadPersona, match.params.personaid])

  useEffect(() => {
    if (redirect) {
      history.goBack()
    }
  }, [redirect, history, match.params.personaid])

  return (
    <SidebarContainer>
      <Column size={6}>
        <MobileTopBarWithArrowCancelButton>Edit Persona</MobileTopBarWithArrowCancelButton>

        <DesktopPersonaForm onSubmit={onSubmit} />
        <MobilePersonaForm edit={true} onSubmit={onSubmit} />
      </Column>
    </SidebarContainer>
  )
}

export default withRouter(EditPersona)
