import { TimecountPipe } from './timecount.pipe';

describe('TimecountPipe', () => {
  it('create an instance', () => {
    const pipe = new TimecountPipe();
    expect(pipe).toBeTruthy();
  });
});
