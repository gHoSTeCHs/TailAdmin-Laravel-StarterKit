import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { wayfinder } from "@laravel/vite-plugin-wayfinder";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
        react(),
        wayfinder(),
        tailwindcss(),
        svgr({
            svgrOptions: {
                icon: true,
                exportType: "named",
                namedExport: "ReactComponent",
            },
        }),
    ],
    esbuild: {
        jsx: "automatic",
    },
});
