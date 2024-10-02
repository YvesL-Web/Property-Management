import {Open_Sans, Roboto_Mono, Roboto_Slab}  from 'next/font/google';

export const openSans = Open_Sans({
	subsets: ["latin"],
	variable: "--font-open-sans",
});

export const robotoSlab = Roboto_Slab({
	subsets: ["latin"],
	variable: "--font-roboto-slab",
});

export const robotoMono = Roboto_Mono({
	subsets: ["latin"],
	// display: "swap",
	variable: "--font-roboto-mono",
});