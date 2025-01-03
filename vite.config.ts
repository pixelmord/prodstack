import { reactRouter } from "@react-router/dev/vite";
import tailwind from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { reactRouterDevTools } from "react-router-devtools";
import netlifyPlugin from "@netlify/vite-plugin-react-router";

export default defineConfig({
	plugins: [reactRouterDevTools(), reactRouter(), tailwind(), netlifyPlugin()],
});
