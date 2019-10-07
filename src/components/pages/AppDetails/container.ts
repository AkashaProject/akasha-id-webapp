import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Action, Dispatch } from 'redux'

import fetchClaim from '../../../actions/app-details/fetch-claim'
import startRemoveApp from '../../../actions/app-details/start-remove-app'
import { State } from '../../../states'
import AppDetails from './AppDetails'

const enchance = connect(
  (state: State) => ({
    app: state.appDetails.app,
    claim: state.appDetails.claim,
    redirect: state.appDetails.redirectToApps,
  }),
  (dispatch: Dispatch<Action>) => ({
    fetchClaim: (token: string) => dispatch(fetchClaim(token)),
    startRemoveApp: () => dispatch(startRemoveApp()),
  }),
)

export default withRouter(enchance(AppDetails))
