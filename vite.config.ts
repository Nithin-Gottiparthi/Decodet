import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// ✅ Safe and compatible dev plugin
const devLoggerPlugin = (): PluginOption => {
  return {
    name: 'dev-logger',
    apply: 'serve', // Only apply in dev
    buildStart() {
      console.log('🚀 Development server starting...');
    },
    transform(code, id) {
      if (id.endsWith('.tsx') || id.endsWith('.jsx')) {
        console.log(`Loaded component: ${id}`);
      }
      return null; // No code changes
    },
  };
};

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    ...(mode === 'development' ? [devLoggerPlugin()] : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
