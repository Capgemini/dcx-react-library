export const debounce = (
  func: (args: any) => void,
  time: number | undefined
) => {
  let timer: NodeJS.Timeout | null;
  const context = this;

  return function (...args: any) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, time);
  };
};
