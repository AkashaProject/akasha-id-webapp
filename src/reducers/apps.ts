import { Action } from 'redux'

import { RemoveAppAction } from '../actions/app-details/remove-app'
import { SetAddAppModalAppRequestAction } from '../actions/apps/set-add-app-modal-app-request'
import { SetAddAppModalStepAction } from '../actions/apps/set-add-app-modal-step'
import { SetAppsAction } from '../actions/apps/set-apps'
import * as actions from '../consts/actions'
import { State } from '../states'
import { AppsState, defaultAppsState } from '../states/apps'

const setApps = (state: AppsState, action: SetAppsAction, fullState: State): AppsState => {
  return {
    ...state,
    apps: { ...action.apps },
  }
}

const removeApp = (state: AppsState, action: RemoveAppAction, fullState: State): AppsState => {
  const apps = { ...state.apps }
  delete apps[state.selectedAppToken]

  return {
    ...state,
    apps,
    showRemoveAppModal: false,
  }
}

const setAddAppModalStep = (
  state: AppsState,
  action: SetAddAppModalStepAction,
  fullState: State,
): AppsState => {
  return {
    ...state,
    addAppModalStep: action.step,
  }
}

const setAddAppModalAppRequest = (
  state: AppsState,
  action: SetAddAppModalAppRequestAction,
  fullState: State,
): AppsState => {
  return {
    ...state,
    appRequest: { ...action.appRequest },
  }
}

const reducer = (
  state: AppsState = defaultAppsState,
  action: Action<string>,
  fullState: State,
): AppsState => {
  switch (action.type) {
    case actions.apps.SET_APPS:
      return setApps(state, action as SetAppsAction, fullState)

    case actions.apps.REMOVE_APP:
      return removeApp(state, action as RemoveAppAction, fullState)

    case actions.apps.SET_ADD_APP_MODAL_STEP:
      return setAddAppModalStep(state, action as SetAddAppModalStepAction, fullState)

    case actions.apps.SET_ADD_APP_MODAL_APP_REQUEST:
      return setAddAppModalAppRequest(state, action as SetAddAppModalAppRequestAction, fullState)

    default:
      return state
  }
}

export default reducer
