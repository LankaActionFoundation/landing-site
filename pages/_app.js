import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/froala.css";
import Head from "next/head";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
  (function(w, d){
    var b = d.getElementsByTagName('head')[0];
    var s = d.createElement("script");
    var v = ("IntersectionObserver" in w) ? "_no_poly" : "";
    s.async = true; // This includes the script as async.
    s.src = "https://d5jmkjjpb7yfg.cloudfront.net/v2/latest/optimole_lib" + v + ".min.js";
    w.optimoleData = {
        key: "mllfvjtztoh1",
        quality: "85",
    };
    b.appendChild(s);
}(window, document));
  `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
