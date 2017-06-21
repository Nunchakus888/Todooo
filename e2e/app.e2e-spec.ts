import { TodoooPage } from './app.po';

describe('todooo App', () => {
  let page: TodoooPage;

  beforeEach(() => {
    page = new TodoooPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
