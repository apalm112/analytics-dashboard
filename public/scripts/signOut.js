'use strict';

document.addEventListener("DOMContentLoaded", event => {
  const appConfig = new blockstack.AppConfig(['store_write', 'publish_data']);
  const userSession = new blockstack.UserSession({ appConfig: appConfig });

  document.getElementById('signout-button').addEventListener('click', event => {
    event.preventDefault();
    userSession.signUserOut(window.location.origin);
  });
});
