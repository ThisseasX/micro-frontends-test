import { useState } from "react";
import { useEffect } from "react";

type Props = {
  host: string;
  rootId: string;
  otherProps?: Object;
};

const MicroFrontend = ({ host, rootId, otherProps }: Props) => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const script = document.createElement("script");
    document.head.appendChild(script);

    (async () => {
      const assetManifest = await fetch(`${host}/asset-manifest.json`).then(
        (x) => x.json()
      );

      const {
        entrypoints: [entryFile],
      } = assetManifest;

      script.src = `${host}/${entryFile}`;
      script.crossOrigin = "anonymous";

      script.addEventListener("load", () => {
        setLoading(false);
        window[`render${rootId}`](rootId, otherProps);
      });
    })();

    return () => {
      window[`unmount${rootId}`]?.();
      document.head.removeChild(script);
    };
  }, [host, rootId, otherProps]);

  return (
    <>
      <div id={rootId} />
      {isLoading && <div>LOADING...</div>}
    </>
  );
};

export default MicroFrontend;
