import React from "react";
import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { robotoMono, openSans, robotoSlab } from "@/lib/fonts";
import ThemeProvider from "@/components/theme-provider";

import ReduxProvider from "@/lib/redux/provider";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
	title: "Home | AMA Apartments",
	description: "Welcome Home",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${robotoMono.variable} ${robotoSlab.variable} ${openSans.variable}  antialiased`}
			>
				<ReduxProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						{children}
					</ThemeProvider>
				</ReduxProvider>
			</body>
		</html>
	);
}
