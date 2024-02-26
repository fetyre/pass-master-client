export const useClipboard = () => {
  const copyToClipboard = (password: string) => {
    navigator.clipboard.writeText(password);
  }
  return { copyToClipboard };
};
