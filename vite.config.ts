import netlifyPlugin from "@netlify/vite-plugin-react-router";
import { reactRouter } from "@react-router/dev/vite";
import tailwind from "@tailwindcss/vite";
import { reactRouterDevTools } from "react-router-devtools";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [reactRouterDevTools(), reactRouter(), tailwind(), netlifyPlugin()],
});
