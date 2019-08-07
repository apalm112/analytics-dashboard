'use strict';

document.addEventListener("DOMContentLoaded", event => {
  const appConfig = new blockstack.AppConfig(['store_write', 'publish_data']);
  const userSession = new blockstack.UserSession({ appConfig: appConfig });

  let options = {
    decrypt: true
  }
  var STORAGE_FILE = 'text.json';
  var handleInsert = document.getElementById('insert');


  const row = document.getElementById('create-blog');
  const handleCreateBlogPost = (data) => {
    let blog = '';
    // data.forEach((blog) => {
    blog += '<div class="col-lg-3 col-md-6 col-sm-12 mb-4">';
    blog += '<div class="card card-small card-post card-post--1">';
    blog += '<div class="card-post__image" style="background-color: lime;">';
    blog += '<a href="#" class="card-post__category badge badge-pill badge-dark">Business</a>';
    blog += '<div class="card-post__author d-flex">';
    blog += '<a href="#" class="card-post__author-avatar card-post__author-avatar--small" style="background-image: url(/images/avatars/arnold1.jpg);" > Written by Anna Kunis</a >';
    blog += '</div>';
    blog += '</div>';
    blog += '<div class="card-body">';
    blog += '<h5 class="card-title">';
    blog += '<a class="text-fiord-blue" href="#">Conduct at an replied removal an amongst</a>';
    blog += '</h5>';
    blog += '<p class="card-text d-inline-block mb-3" id="insert"></p>';
    blog += '<span class="text-muted">28 February 2019</span>';
    blog += '</div>';
    blog += '</div>';
    blog += '</div>';
    // });
    row.innerHTML = blog;
  }
  handleCreateBlogPost();

  //  userSession.getFile(STORAGE_FILE , options)
  // userSession.getFile('/saveDraftText.txt', options)
  userSession.getFile(STORAGE_FILE, options)
    .then((fileContents) => {
      // saveDraftText.txt exists now, and has the contents of getText variable..
      console.log('fileContents: ', typeof(fileContents));
      // This works! 
      // TODO: needs blog post dynamically created forEach existing file
      // ?would be easier to implement w/ Pug templates, then could use if fileContents, for each fileContent p={this.fileContent}?
    // could use .forEach(), ?.map(), .filter()?      
    
    var handleInsert = document.getElementById('insert');
    handleInsert.append(fileContents);
    // console.log(fileContents);
  });

    // Below is NOT working:
    function getListFiles() {
      console.log(this);
      return true;
    }
    // userSession.listFiles(getListFiles, Promise);

});
