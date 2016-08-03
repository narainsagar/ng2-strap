import { Ng2StrapPage } from './app.po';

describe('ng2-strap App', function() {
  let page: Ng2StrapPage;

  beforeEach(() => {
    page = new Ng2StrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
