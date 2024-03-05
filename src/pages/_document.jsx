import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html
      lang="en"
      className="bg-dark-100"
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
