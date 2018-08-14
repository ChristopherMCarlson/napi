export default class APOD {
  constructor(data) {
    this.url = data.url
    this.date = data.date
    this.title = data.title
    this.explanation = data.explanation
    this.copyright = data.copyright || 'Public Domain'
  }
}