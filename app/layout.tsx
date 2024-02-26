import { mulish } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mulish.className} h-screen bg-gray-100`}>
        {children}
      </body>
    </html>
  );
}
