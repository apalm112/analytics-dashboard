'use strict';

const appConfig = new blockstack.AppConfig(['store_write', 'publish_data'])
const userSession = new blockstack.UserSession({ appConfig: appConfig })

// Check if User is signed in before showing the dashboard,
// if not then redirect to sign in page.
if (!userSession.isUserSignedIn()) {
  window.location = window.location.origin;
}
