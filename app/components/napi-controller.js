import NapiService from "./napi.service.js";

const napiService = new NapiService

const draw = function draw() {
  document.getElementById('apod').innerHTML = `
  <div id="pic"></div>
  `
}


function addAPOD(data) {
  let template = ``
  template += `
  <h1>${data.title}</h1>
  <img src="${data.url}" style="height: 500px"></img>
  <p>Credit: ${data.copyright}, ${data.date}</p>
  <p>About: ${data.explanation}</p>
  `
  document.getElementById('pic').innerHTML = template
}

function getPic() {
  napiService.getPic(addAPOD)
}

export default class NapiController {
  constructor() {
    draw()
    getPic()
  }

  getAPOD(e) {
    e.preventDefault();
    var date = e.target.date.value;
    //changes the button to loading while songs load
    // @ts-ignore
    document.getElementById('get-pic-button').innerText = 'LOADING....';
    napiService.getPic(date).then(results => {
      addAPOD(results)
      //changes button back to GET MUSIC once songs are loaded
      // @ts-ignore
      document.getElementById('get-pic-button').innerText = 'Get APOD';
    })
  }

}