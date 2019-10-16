const userIdParam = ':userid'
const appRequestLinkParam = ':apprequestlink'
const tokenParam = ':token'

const landing = '/'
const signUp = '/sign-up/'
const signIn = `/sign-in/${userIdParam}/`
const profiles = '/profiles/'
const profile = '/profile/'
const apps = '/apps/'
const account = '/account/'
const registerApp = `/register-app/${appRequestLinkParam}`
const appDetails = `/app-details/${tokenParam}`
const search = '/search/'
const settings = '/settings/'
const walletUrl = 'http://localhost:3000/#/register-app/'

export {
  userIdParam,
  appRequestLinkParam,
  tokenParam,
  landing,
  signUp,
  signIn,
  profiles,
  profile,
  apps,
  account,
  registerApp,
  appDetails,
  search,
  settings,
  walletUrl,
}
