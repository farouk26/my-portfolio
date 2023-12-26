import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html
      lang="en"
      className="bg-neutral-900"
      style={{ scrollBehavior: "smooth" }}
    >
      <Head />
      <title>Farouk Zemmouri | Portfolio</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
