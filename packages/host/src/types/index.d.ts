export {};

declare global {
  interface Window {
    [key: string]: Function;
  }
}
