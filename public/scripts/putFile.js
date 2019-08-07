'use strict';

document.addEventListener("DOMContentLoaded", event => {
  const appConfig = new blockstack.AppConfig(['store_write', 'publish_data']);
  const userSession = new blockstack.UserSession({ appConfig: appConfig });

  var handleSaveDraft = document.getElementsByClassName('save-file-btn')[0];
  handleSaveDraft.addEventListener('click', event => {
    event.preventDefault();
    /*
      var userSession = new UserSession()
      let options = {
        encrypt: true
      }
      userSession.putFile("/message.txt", "Secret hello!", options)
      .then(() => {
        // message.txt exists now, and has the contents "hello world!".
      })
    */
  // div id='editor-container' get that element, grab text from it & pass to .putFile() method, has multiple children, each line is a separate <p></p>
    var handleGetSaveDraftText = document.getElementById('editor-container');
    var getText = handleGetSaveDraftText.children[0].innerText;
    let options = {
      encrypt: true
    }
    var STORAGE_FILE = 'text.json';
    // userSession.putFile("/saveDraftText.txt", getText, options)
    userSession.putFile(STORAGE_FILE, JSON.stringify(getText), options)
      .then(() => {
        // saveDraftText.txt exists now, and has the contents of getText variable..
      })

    console.log(getText);

  });
});
