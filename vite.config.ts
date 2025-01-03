import { reactRouter } from "@react-router/dev/vite";
import tailwind from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { reactRouterDevTools } from "react-router-devtools";

export default defineConfig({
	plugins: [reactRouterDevTools(), reactRouter(), tailwind()],
});
