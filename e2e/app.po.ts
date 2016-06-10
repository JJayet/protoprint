export class ProtoprintPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('protoprint-app h1')).getText();
  }
}
