'use strict';

document.addEventListener("DOMContentLoaded", event => {
  const appConfig = new blockstack.AppConfig(['store_write', 'publish_data'])
  const userSession = new blockstack.UserSession({ appConfig: appConfig })

  document.getElementById('signout-button').addEventListener('click', event => {
    event.preventDefault()
    console.log('LOG OUT BUTTON CLICKED');
    userSession.signUserOut(window.location.origin)
    // window.location = window.location.origin
    // blockstack.signUserOut(window.location.origin)
  })
})
