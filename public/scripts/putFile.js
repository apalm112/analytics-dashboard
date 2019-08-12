'use strict';

document.addEventListener("DOMContentLoaded", event => {
  const appConfig = new blockstack.AppConfig(['store_write', 'publish_data']);
  const userSession = new blockstack.UserSession({ appConfig: appConfig });

  var handleSaveDraft = document.getElementsByClassName('save-file-btn')[0];

  // TODO: add an array to hold Users blog posts
  //       this will prevent file from being overwritten
  //

  handleSaveDraft.addEventListener('click', event => {
    event.preventDefault();
  // div id='editor-container' get that element, grab text from it & pass to .putFile() method, has multiple children, each line is a separate <p></p>
    var handleGetSaveDraftText = document.getElementById('editor-container');
    var getText = handleGetSaveDraftText.children[0].innerText;
    let options = {
      encrypt: true
    }
    var STORAGE_FILE = 'text.json';
    // TODO: ^--change this value to an incremental index number so that each file is unique.

    // userSession.putFile("/saveDraftText.txt", getText, options)
    userSession.putFile(STORAGE_FILE, JSON.stringify(getText), options)
      .then(() => {
        // saveDraftText.txt exists now, and has the contents of getText variable..
      })

    // TODO: Clear the text from `handleGetSaveDraftText` when 'Save Draft' is clicked & `.putFile()` has executed.

    // TODO: ?After file is saved to storage hub, redirect to components-blog-post.html?

  });
});
