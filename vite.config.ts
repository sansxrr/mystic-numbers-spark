// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Automate copying files since terminal commands were missed
try {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const srcDir = path.resolve(__dirname, "node_modules/lovable-tagger/node_modules/tailwindcss/lib/public");
  const destDir = path.resolve(__dirname, "src/assets");
  
  if (fs.existsSync(srcDir)) {
    const logoSrc = path.join(srcDir, "logo.png");
    const logoDest = path.join(destDir, "logo.png");
    if (fs.existsSync(logoSrc)) {
      fs.copyFileSync(logoSrc, logoDest);
      console.log("Automatically copied logo.png to src/assets");
    }
    
    const sanskarSrc = path.join(srcDir, "Sanskar_image.jpg");
    const sanskarDest = path.join(destDir, "Sanskar_image.jpg");
    if (fs.existsSync(sanskarSrc)) {
      fs.copyFileSync(sanskarSrc, sanskarDest);
      console.log("Automatically copied Sanskar_image.jpg to src/assets");
    }

    const catSrc = path.join(__dirname, "smoking_cat.png");
    const catDest = path.join(destDir, "smoking_cat.png");
    if (fs.existsSync(catSrc)) {
      fs.copyFileSync(catSrc, catDest);
      console.log("Automatically copied smoking_cat.png to src/assets");
    }
  }
} catch (err) {
  console.error("Automatic copy failed:", err);
}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: true,
});
