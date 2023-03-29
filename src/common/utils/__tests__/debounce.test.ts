import { debounce } from '../debounce';

jest.useFakeTimers();

describe('debounce', () => {
  const func: jest.Mock = jest.fn();
  const debouncedFunc: Function = debounce(func, 1000);

  it('should call the passed in function once', () => {
    // call debounce for the first time
    debouncedFunc();
    expect(func).toBeCalledTimes(0);

    // fast forward timer to half time and call debounce again
    jest.advanceTimersByTime(500);
    debouncedFunc();
    expect(func).toBeCalledTimes(0);

    // fast forward timer all the way
    jest.runAllTimers();

    expect(func).toBeCalledTimes(1);
  });
});
