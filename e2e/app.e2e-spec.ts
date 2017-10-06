import { ChatSamplePage } from './app.po';

describe('chat-sample App', () => {
  let page: ChatSamplePage;

  beforeEach(() => {
    page = new ChatSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
