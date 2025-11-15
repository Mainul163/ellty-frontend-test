// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
    title: "Ellty Pages Selector",
    description: "Technical test – Round 1",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="page-root">{children}</body>
        </html>
    );
}
