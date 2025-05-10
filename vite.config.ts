import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { type ManifestOptions, VitePWA } from "vite-plugin-pwa";

const manifest: Partial<ManifestOptions> | false = {
	theme_color: "#4ea524",
	background_color: "#ffffff",
	icons: [
		{
			purpose: "maskable",
			sizes: "512x512",
			src: "icon512_maskable.png",
			type: "image/png",
		},
		{
			purpose: "any",
			sizes: "512x512",
			src: "icon512_rounded.png",
			type: "image/png",
		},
	],
	orientation: "portrait",
	display: "standalone",
	lang: "uk-UA",
	name: "ticket",
	short_name: "ticket",
};

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr({
			svgrOptions: {
				icon: true,
			},
		}),
		VitePWA({
			registerType: "autoUpdate",
			workbox: {
				globPatterns: [
					"**/*.{js,css,html,png,jpg,jpeg,svg,woff2,woff,eot,ttf}",
				],
			},
			manifest: manifest,
		}),
	],
	base: "/sdanyil-test-app/",
});
