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
  var STORAGE_FILE = 'text.json';
  var handleInsert = document.getElementById('insert');
  userSession.getFile('/saveDraftText.txt', options)
  //  userSession.getFile(STORAGE_FILE , options)
    .then((fileContents) => {
      // saveDraftText.txt exists now, and has the contents of getText variable..
      // console.log('fileContents: ', fileContents);
      // This works! 
      // TODO: needs Title, Background-image, <a href="<Subject>" ie--Business, Date, Size
      //       would be easier to implement w/ Pug templates, then could use if fileContents, for each fileContent p={this.fileContent}

    // could use .forEach(), ?.map(), .filter()?      
      handleInsert.append(fileContents);
    });
});
