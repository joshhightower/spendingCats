import { SpendingCatsPage } from './app.po';

describe('spending-cats App', function() {
  let page: SpendingCatsPage;

  beforeEach(() => {
    page = new SpendingCatsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
