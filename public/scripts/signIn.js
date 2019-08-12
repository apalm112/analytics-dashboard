'use strict';

document.addEventListener("DOMContentLoaded", event => {
  const appConfig = new blockstack.AppConfig(['store_write', 'publish_data']);
  const userSession = new blockstack.UserSession({ appConfig: appConfig });
  // var userSession = new blockstack.UserSession();

  document.getElementById('signin-button').addEventListener('click', event => {
    event.preventDefault();
    userSession.redirectToSignIn();
    
    // How to recommend a Gaia hub URL for new users:
    // https://docs.blockstack.org/storage/hello-hub-choice.html
    // const authRequest = userSession.makeAuthRequest(
    //   userSession.generateAndStoreTransitKey(),
    //   'http://localhost:5000/',
    //   'http://localhost:5000/manifest.json',
    //   ['store_write', 'publish_data'],
    //   'http://localhost:5000/',
    //   blockstack.nextHour().getTime(), {
    //     solicitGaiaHubUrl: true
    //   } // new options param
    // );

    // userSession.redirectToSignInWithAuthRequest(authRequest)

    // TODO: add eventlistener('click', ) to the 'Save Draft' Button on the 'add-new-post.html' page
    //          will call a function that connects to the Blockstack Gaia Storage server
    //        then can wire up the `components-blog-posts.html' page to pull files from the Users Blockstack Gaia storage
    //        then display file list on that page
    //                
    //        Per https://docs.blockstack.org/storage/hub-choice.html:
    //        need to use the makeAuthRequest() method in place of redirectToSignIn()
    // redirectToSignInWithAuthRequest(authRequest);
  })
})
