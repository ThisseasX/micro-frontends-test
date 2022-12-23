import type { OtherProps } from "./index";

type Props = {
  message: string;
} & {
  otherProps?: OtherProps;
};

const App = ({ message, otherProps }: Props) => (
  <h1>
    Hello {message} {otherProps?.message}
  </h1>
);

export default App;
