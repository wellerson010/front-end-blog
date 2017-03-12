import { Blog2Page } from './app.po';

describe('blog2 App', () => {
  let page: Blog2Page;

  beforeEach(() => {
    page = new Blog2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
