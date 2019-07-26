'use strict';

const express = require('express');
const router = express.Router();
const AppConfig = require('blockstack').AppConfig;
const UserSession = require('blockstack').UserSession;

router.get('/', (req, res) => {
  if (error) {
    return next(error);
  } else {
    document.addEventListener("DOMContentLoaded", event => {
      console.log('OVER HERE');
      
      const appConfig = new blockstack.AppConfig(['store_write', 'publish_data']);
      const userSession = new blockstack.UserSession({ appConfig: appConfig });
      window.userSession = userSession;

      document.getElementById('signin-button').addEventListener('click', event => {
        event.preventDefault();
        userSession.redirectToSignIn();

      })

      document.getElementById('signout-button').addEventListener('click', event => {
        event.preventDefault();
        userSession.signUserOut();
        window.location = window.location.origin
      })
    });

    res.redirect('/index.html');
  }
});

router.get('/dashboard', (req, res) => {
  if (error) {
    return next(error);
  }

  document.addEventListener("DOMContentLoaded", event => {
    const appConfig = new blockstack.AppConfig(['store_write', 'publish_data'])
    const userSession = new blockstack.UserSession({ appConfig: appConfig })

    if (userSession.isUserSignedIn()) {
      const { profile } = userSession.loadUserData();
      res.redirect('/dashboard.html');
    } else if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then(userData => {
        window.location = window.location.origin
      })
    }
  });
});

module.exports = router;
