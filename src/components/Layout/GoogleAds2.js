import { useEffect } from "react";
export default function GoogleAds2(...props) {
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
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-8139631059262464"
        data-ad-slot="3697416598"
      ></ins>
    </div>
  );
}
