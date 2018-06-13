var resObj;
var pathJSON = "/js/projects.json";

window.onload = function(){
  console.log("P2X IN");
  getRestaurantJSON();
}

function getRestaurantJSON(){

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
  var projectRestaurant = JSON.parse(resObj).projectRestaurantWebsite;

  var projectElm = document.getElementById("projects");

  var projectString = "";
  for (var project of projectRestaurant) {
    projectString += `
    <div class="box project">
      <div class="box project__img" style="background-image:url('${project.backgroundImage}')">
      </div>
    </div>
    `;
  }
  projectElm.innerHTML = projectString;
}
