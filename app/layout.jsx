import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";
import {CookiesProvider} from 'next-client-cookies/server';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <CookiesProvider>
        <NextUIProvider>
            {children}
        </NextUIProvider>
      </CookiesProvider>
      </body>
    </html>
  );
}
