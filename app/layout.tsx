import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ウィリアム・シャムロック事務所 | LowCost & HighDesign 店舗内装工事",
  description:
    "大阪・関西の店舗内装工事専門。大工工事を直接施工することで低コスト・高品質を実現。30年以上の実績。DIYサポートも対応。",
  keywords: "店舗内装工事, 大阪, 低価格, 高品質, DIYサポート, カウンター工事, 店舗改装",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
