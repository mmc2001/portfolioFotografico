import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
          <meta name="description" content="Portfolio Fotográfico" />
          <link rel="icon" sizez="32x32" href="/logo/logo-foto.svg" />
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');
          </style>
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}

