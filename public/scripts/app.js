'use strict';

document.addEventListener("DOMContentLoaded", event => {
  const appConfig = new blockstack.AppConfig(['store_write', 'publish_data']);
  const userSession = new blockstack.UserSession({ appConfig: appConfig });

  function showProfile (profile) {
    let person = new blockstack.Person(profile)
    document.getElementById('heading-name').innerHTML = person.name() ? person.name() : "Nameless Person"
    if(person.avatarUrl()) {
      document.getElementById('avatar-image').setAttribute('src', person.avatarUrl());
    }
    document.getElementById('section-1').style.display = 'none'
    document.getElementById('section-2').style.display = 'block'
    // document.getElementById('dash-wrapper').style.display = 'none'
  }

  function showDashboard(profile) {
  // -have function return the HTML/index.html page
    window.location = 'dashboard.html'
    // window.location = 'main'
  }

  if (userSession.isUserSignedIn()) {
    const { profile } = userSession.loadUserData()
    // showProfile(profile);
    // call showDashboard(profile) instead of showProfile(profile)
    showDashboard(profile);
  } else if (userSession.isSignInPending()) {
    userSession.handlePendingSignIn().then(userData => {
      window.location = 'dashboard.html'
    })
  }    

}); // end of document.addEventListener("DOMContentLoaded", )
