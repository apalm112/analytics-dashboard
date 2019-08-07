'use strict';

document.addEventListener("DOMContentLoaded", event => {
  const appConfig = new blockstack.AppConfig(['store_write', 'publish_data']);
  const userSession = new blockstack.UserSession({ appConfig: appConfig });

  /*
    let options = {
      decrypt: true
    }
    userSession.getFile("/message.txt", options)
    .then((fileContents) => {
        // get & decrypt the contents of the file /message.txt
        assert(fileContents === "Secret hello!")
    });

  */
  let options = {
    decrypt: true
  }
  userSession.getFile('/saveDraftText.txt', options)
    .then((fileContents) => {
      // saveDraftText.txt exists now, and has the contents of getText variable..
      console.log('/saveDraftText.txt');
      console.log('fileContents: ', fileContents);
      
    });
});