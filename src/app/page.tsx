import Script from "next/script";
import { presentationMarkup } from "./presentation-markup";

export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: presentationMarkup }} />
      <Script src="/presentation-assets/presentation-bundle.js" strategy="afterInteractive" />
    </>
  );
}
