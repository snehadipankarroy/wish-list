import { WishlistPage } from './app.po';

describe('wishlist App', () => {
  let page: WishlistPage;

  beforeEach(() => {
    page = new WishlistPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
