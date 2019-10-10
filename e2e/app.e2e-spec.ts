import { ViewcontentPage } from './app.po';

describe('viewcontent App', function() {
  let page: ViewcontentPage;

  beforeEach(() => {
    page = new ViewcontentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
