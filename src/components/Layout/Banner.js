import { useEffect } from "react";
export default function Banner(...props) {
  const { currentPath } = props;
  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
  }, [currentPath]);

  return (
    <div key={currentPath}>
      <ins
        className="adsbygoogle"
        style={{ display: "inline-block", width: "100%", height: "90px" }}
        data-ad-client="ca-pub-8139631059262464"
        data-ad-slot="5091772207"
      ></ins>
    </div>
  );
}
