export {};

declare global {
  interface Window {
    renderPage1: (rootId: string) => void;
    unmountPage1: () => void;
  }
}
