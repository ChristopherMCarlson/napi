import NapiController from "./app/components/napi-controller.js"

class App {
  constructor() {
    this.controllers = {
      napi: new NapiController
    }
  }
}


const app = new App()
// @ts-ignore
window.app = app