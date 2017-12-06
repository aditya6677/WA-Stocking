import { StalkerPage } from './app.po';

describe('stalker App', () => {
  let page: StalkerPage;

  beforeEach(() => {
    page = new StalkerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
