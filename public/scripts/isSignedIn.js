'use strict';

document.addEventListener("DOMContentLoaded", event => {
  const appConfig = new blockstack.AppConfig(['store_write', 'publish_data'])
  const userSession = new blockstack.UserSession({ appConfig: appConfig })

  // function showProfile(profile) {
  //   let person = new blockstack.Person(profile)
  //   document.getElementById('heading-name').innerHTML = person.name() ? person.name() : "Nameless Person"
  //   if (person.avatarUrl()) {
  //     document.getElementById('avatar-image').setAttribute('src', person.avatarUrl())
  //   }
  //   document.getElementById('section-1').style.display = 'none'
  //   document.getElementById('section-2').style.display = 'block'
  // }

  // function showDashboard(profile) {
  //   window.location = 'dashboard.html'
  // }

  function isUserSignedIn(params) {
    // try wrapping in a function to kill bug of repeated page loading.
    if (userSession.isUserSignedIn()) {
      const { profile } = userSession.loadUserData()
      window.location = 'dashboard.html'
    } else {
      window.location = window.location.origin;
    }
  }
  // isUserSignedIn();
})
