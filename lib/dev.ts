export const simulateAsyncOperation = async (
  duration: number
): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
};
