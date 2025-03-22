export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait?: number,
  immediate?: boolean,
) {
  let timeout: NodeJS.Timeout | null = null;

  const debounced = function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);

    if (callNow) {
      return func.apply(context, args);
    }
  };

  debounced.cancel = function () {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
}
