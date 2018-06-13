var resObj;
var pathJSON = "/js/projects.json";

window.onload = function(){
  console.log("P2X IN");
  getP2XJSON();
}

function getP2XJSON(){

  var xhr = new XMLHttpRequest();
  xhr.open("GET", pathJSON, true);
  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        resObj = xhr.responseText;
        handleJSON();

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

function handleJSON(){
  var projectP2X = JSON.parse(resObj).projectP2X;

  var projectElm = document.getElementById("projects");

  var projectString = "";
  for (var project of projectP2X) {
    projectString += `
    <div class="box project">
      <div class="box project__img" style="background-image:url('${project.backgroundImage}')">
      </div>
    </div>
    `;
  }
  projectElm.innerHTML = projectString;
}
