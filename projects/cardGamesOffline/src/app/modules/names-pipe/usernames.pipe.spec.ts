import { UsernamesPipe } from './usernames.pipe';

describe('UsernamesPipe', () => {
  it('create an instance', () => {
    const pipe = new UsernamesPipe();
    expect(pipe).toBeTruthy();
  });
});
