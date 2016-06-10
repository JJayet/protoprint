import { ProtoprintPage } from './app.po';

describe('protoprint App', function() {
  let page: ProtoprintPage;

  beforeEach(() => {
    page = new ProtoprintPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('protoprint works!');
  });
});
