
var projects;

window.onload = function() {
console.log("in");
project = getProjectJSON("/js/projects.json");
console.log("out");

}

function getProjectJSON(path){

  var xhr = new XMLHttpRequest();
  xhr.open("GET", path, true);
  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        //resObj = xhr.responseText;
        projects = JSON.parse(xhr.responseText).projects;
        handleProjectJSON();

      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };
  xhr.send(null);

}//end of getProjectJSON


function handleProjectJSON(){

  var projectsElem = document.getElementById("projects");

  console.log(projectsElem);
  var projectsString = '';
  for (var project of projects){
    projectsString += `
    <div class="box project">
      <a href="/project/${project.urlPath}">
        <div class="box project__img" style="background-image:url('${project.backgroundImage}')">
          <h5>${project.title}</h5>
        </div>
      </a>
    </div>
    `;
  }
  projectsElem.innerHTML = projectsString;
}
