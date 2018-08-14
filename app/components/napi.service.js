import APOD from "../models/APOD.js"

export default class NapiService {
  constructor() {

  }


  getPic(date) {
    return fetch('https://api.nasa.gov/planetary/apod?api_key=swvf47pqUgXMteHr7PKgjIJRywVzAm2OV9eO7T3O&date=' + date)
      .then(res => res.json())
      .then(function (res) {
        console.log(res)
        return res
      })
      .then(res => {
        return (new APOD(res))
      })
  }
}