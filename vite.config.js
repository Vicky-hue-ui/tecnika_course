import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// viteSingleFile bundles JS + CSS into one index.html so the build can be hosted anywhere
export default defineConfig({ plugins: [react(), viteSingleFile()] });
