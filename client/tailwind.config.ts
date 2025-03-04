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
			container: {
				center: true,
				padding: "2rem",
				screens: {
					"2xl": "1400px",
				},
			},
			colors: {
				googleBlue: "#4285F4",
				asparagus: "#60992D",
				deepBlueGrey: "#263238",
				gray: "rgba(125,144,201,0.34)",
				lightGray: "#7B8EC8",
				electricIndigo: "#6610F2",
				richBlack: "#0D1317",
				veryBlack: "#000000",
				babyPowder: "#FBFEF9",
				// pumpkin: "#F17105",
				pumpkin: "#9A031E",
				buff: "#DC9E82",
				platinum: "#DDE1E4",
				lightGrey: "#EEEEEE",
				// pear: "#C2E812",
				pear: "#85A98F",
				eerieBlack: "#171D1C",
				ballonWhite: "#dfe6f6",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
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
