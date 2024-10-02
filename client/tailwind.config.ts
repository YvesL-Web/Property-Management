import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {},
			borderRadius: {},
			animation: {
				"accordion-down": "accordion-dow 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			fontFamily: {
				robotoMono: ["var(--font-roboto-mono)"],
				robotoSlab: ["var(--font-roboto-slab)"],
				openSans: ["var(--font-open-sans)"],
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
