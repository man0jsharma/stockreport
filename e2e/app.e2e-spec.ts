import { StorereportsassPage } from './app.po';

describe('storereportsass App', () => {
  let page: StorereportsassPage;

  beforeEach(() => {
    page = new StorereportsassPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
