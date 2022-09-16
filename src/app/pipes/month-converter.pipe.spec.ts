import { MonthConverterPipe } from './month-converter.pipe';

describe('MonthsConverterPipe', () => {
  it('create an instance', () => {
    const pipe = new MonthConverterPipe();
    expect(pipe).toBeTruthy();
  });
});
