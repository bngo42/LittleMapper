let debounceTimer: ReturnType<typeof setTimeout>;

export const debounce = (callback: () => any, time: number = 500) => {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(callback, time);
};
