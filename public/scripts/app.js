'use strict';

document.addEventListener("DOMContentLoaded", event => {
  const appConfig = new blockstack.AppConfig(['store_write', 'publish_data'])
  const userSession = new blockstack.UserSession({ appConfig: appConfig })

  // document.getElementById('signin-button').addEventListener('click', event => {
  //   event.preventDefault()
  //   userSession.redirectToSignIn()
  // })

  // document.getElementById('signout-button').addEventListener('click', event => {
  //   event.preventDefault()
  //   console.log('LOG OUT BUTTON CLICKED');
  //   userSession.signUserOut(window.location.origin)
  //   // window.location = window.location.origin
  //   // blockstack.signUserOut(window.location.origin)
  // })

  //TODO: add logout feature to the logout button in the dropdown menu!
  // Added for the dashboard drop down menu logout feature.
  // document.getElementById('log-out-button').addEventListener('click', event => {
  //   event.preventDefault()
    
  //   userSession.signUserOut()
  //   window.location = window.location.origin
  // })

  function showProfile (profile) {
    let person = new blockstack.Person(profile)
    document.getElementById('heading-name').innerHTML = person.name() ? person.name() : "Nameless Person"
    if(person.avatarUrl()) {
      document.getElementById('avatar-image').setAttribute('src', person.avatarUrl())
    }
    document.getElementById('section-1').style.display = 'none'
    document.getElementById('section-2').style.display = 'block'
    // document.getElementById('dash-wrapper').style.display = 'none'
  }

  function showDashboard(profile) {
  // -have function return the HTML/index.html page
    window.location = 'dashboard.html'
  }

  if (userSession.isUserSignedIn()) {
    const { profile } = userSession.loadUserData()
    // showProfile(profile);

    // call showDashboard(profile) instead of showProfile(profile)
    showDashboard(profile);

    // var handleLogInWrapper = document.getElementsByClassName('site-wrapper')[0];
    // handleLogInWrapper.remove();
  } else if (userSession.isSignInPending()) {
    userSession.handlePendingSignIn().then(userData => {
      window.location = 'dashboard.html'
    })
  }
})
