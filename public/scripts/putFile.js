'use strict';

document.addEventListener("DOMContentLoaded", event => {
  const appConfig = new blockstack.AppConfig(['store_write', 'publish_data']);
  const userSession = new blockstack.UserSession({ appConfig: appConfig });

  var handleSaveDraft = document.getElementsByClassName('save-file-btn')[0];
  handleSaveDraft.addEventListener('click', event => {
    event.preventDefault();
    // userSession.putFile(path: string, content: string);
    /*
      div id='editor-container' get that element, grab text from it & pass to .putFile() method
      has multiple children, each line is a separate <p></p>

      var userSession = new UserSession()
      let options = {
        encrypt: true
      }
      userSession.putFile("/message.txt", "Secret hello!", options)
      .then(() => {
          // message.txt exists now, and has the contents "hello world!".
      })

    */
    var handleGetSaveDraftText = document.getElementById('editor-container');
    var getText = handleGetSaveDraftText.children[0].innerText;
    // var userSession = new UserSession()
    let options = {
      encrypt: true
    }
    userSession.putFile("/saveDraftText.txt", getText, options)
      .then(() => {
        // message.txt exists now, and has the contents "hello world!".
      })

    console.log(getText);

  });
});
