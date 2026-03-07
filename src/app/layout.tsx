import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GetMait",
  description: "AI-drevet bestilling til restauranter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  );
}
