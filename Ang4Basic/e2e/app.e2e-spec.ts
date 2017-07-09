import { Ang4BasicPage } from './app.po';

describe('ang4-basic App', () => {
  let page: Ang4BasicPage;

  beforeEach(() => {
    page = new Ang4BasicPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
