var projectId = "";
var thisProject = null;
var projects;

window.onload = function(){
  projects = getXHRJSON ('/js/projects.json');
  console.log(projects);
}


function getXHRJSON(path){

  var xhr = new XMLHttpRequest();
  xhr.open("GET", path, true);
  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        projects = JSON.parse(xhr.responseText).projects;

        getProject();
      } else {
        alert("sorry try reloading");
        return xhr.statusText;
      }
    }
  };
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };
  xhr.send(null);
}





function getProject() {
  console.log('getProject()');
  var pathParts = window.location.pathname.split('/');
  console.log(pathParts);

  var projectElemImgString ="";
  if( pathParts[1] === 'project'){

    projectId = pathParts[2];

    // Atttempt tofind a matching project
    for (var project of projects ){
      if( project.urlPath == projectId ){
        thisProject = project;
      }
    }

    var innerHTMLString  = `
     <h1>Opps, we could not find that project</h1>
    `;

    // If we find a project
    if (thisProject !== null) {

      // Find and store any images accoiacted with the project
      for ( var p of thisProject.pageImages){
        // Generate the desired resulting html
        projectElemImgString +=
        `
        <div class="box project">
            <div class="box project__img" style="background-image:url('${p}')">
            </div>
        </div>
        `;
      }

      innerHTMLString = `
       <h1>${thisProject.title}</h1>
       `
    }
      // Get the projec element and inject the new inner html
    var projectElem = document.getElementById("header__content");
    projectElem.innerHTML = innerHTMLString;

    var projectImg = document.getElementById("projects");
    projectImg.innerHTML = projectElemImgString;
  }
}
