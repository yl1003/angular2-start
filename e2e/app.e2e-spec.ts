import { MyProject1Page } from './app.po';

describe('my-project1 App', () => {
  let page: MyProject1Page;

  beforeEach(() => {
    page = new MyProject1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
