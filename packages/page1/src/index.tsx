import { createRoot, type Root } from "react-dom/client";
import App from "./App";

export type OtherProps = {
  message?: string;
};

let root: Root;

window.unmountPage1 = () => {
  console.log("unmounting page1");
  root.unmount();
};

window.renderPage1 = (rootId: string, otherProps?: OtherProps) => {
  console.log("rendering page1");
  if (root) window.unmountPage1();
  root = createRoot(document.getElementById(rootId) as HTMLElement);
  root.render(<App message="World!" otherProps={otherProps} />);
};

if (process.env.NODE_ENV === "development") {
  window.renderPage1("root");
}
