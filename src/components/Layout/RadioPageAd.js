import { useEffect } from "react";
export default function RadioPageAd(...props) {
  const { currentPath } = props;
  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
  }, [currentPath]);

  return (
    <div key={currentPath}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format="fluid"
        data-ad-layout-key="-6t+ed+2i-1n-4w"
        data-ad-client="ca-pub-8139631059262464"
        data-ad-slot="5632952085"
      ></ins>
    </div>
  );
}
