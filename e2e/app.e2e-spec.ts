import { FayadPage } from './app.po';

describe('fayad App', function() {
  let page: FayadPage;

  beforeEach(() => {
    page = new FayadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
