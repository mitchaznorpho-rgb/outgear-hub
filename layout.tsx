import './globals.css';
export const metadata = { title: process.env.NEXT_PUBLIC_APP_NAME || 'OutGear Hub' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
