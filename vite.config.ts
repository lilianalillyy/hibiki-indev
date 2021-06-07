import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-refresh";
// import { h } from "react/jsx-dev-runtime";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    // jsxFactory: "h",
    jsxInject: "import React from 'react'",
  },
});
