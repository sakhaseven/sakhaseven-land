import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import { VitePWA } from "vite-plugin-pwa";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

function resolveAppVersion(env: Record<string, string>): string {
  const explicit = (env.VITE_APP_VERSION || env.APP_VERSION || "").trim();
  if (explicit && explicit !== "dev" && explicit !== "0.0.0") {
    return explicit;
  }

  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  const timestamp = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}${pad(now.getHours())}${pad(now.getMinutes())}`;

  try {
    const shortSha = execSync("git rev-parse --short HEAD", {
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
    if (shortSha) return `${shortSha}-${timestamp}`;
  } catch {
    // git unavailable; fall back to timestamp-only version below
  }

  return `build-${timestamp}`;
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  const apiBaseUrl = env.VITE_API_BASE_URL ?? "https://api.qabas.one/api/v1";
  const isLocalApi = /localhost|127\.0\.0\.1/.test(apiBaseUrl);
  const appVersion = resolveAppVersion(env);

  return {
    plugins: [
      react(),
      tailwindcss(),
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: [
          "favicon.ico",
          "favicon.svg",
          "favicon-16x16.png",
          "favicon-32x32.png",
          "favicon-96x96.png",
          "apple-touch-icon.png",
          "mstile-150x150.png",
          "safari-pinned-tab.svg",
          "sakha7-logo-512.png",
          "web-app-manifest-512x512-maskable.png",
          "og-image.png",
          "robots.txt",
          "sitemap.xml",
        ],
        workbox: {
          cleanupOutdatedCaches: true,
          skipWaiting: true,
          clientsClaim: true,
          globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,woff2}"],
          globIgnores: ["**/env-config.js"],
          navigateFallback: "/index.html",
          navigateFallbackDenylist: [/^\/api\//, /\/env-config\.js$/, /^\/assets\//],
        },
        manifest: {
          id: "/",
          name: "سخا 7 لتقاوي القمح والأرز",
          short_name: "سخا 7",
          description: "شركة مصرية متخصصة في تقاوي القمح والأرز.",
          start_url: "/",
          scope: "/",
          theme_color: "#123F2D",
          background_color: "#F6F1E4",
          display: "standalone",
          orientation: "any",
          lang: "ar-EG",
          dir: "rtl",
          categories: ["agriculture", "business"],
          icons: [
            {
              src: "/web-app-manifest-192x192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "any",
            },
            {
              src: "/web-app-manifest-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any",
            },
            {
              src: "/web-app-manifest-512x512-maskable.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "maskable",
            },
          ],
        },
      }),
    ],
    define: {
      "process.env.VITE_API_BASE_URL": JSON.stringify(env.VITE_API_BASE_URL),
      "import.meta.env.VITE_APP_VERSION": JSON.stringify(appVersion),
    },
    resolve: {
      alias: {
        "@": path.resolve(rootDir, "."),
        "../features/transactions/components/TransactionsScreenModals": path.resolve(
          rootDir,
          "src/shims/TransactionsScreenModals.tsx",
        ),
        "../../features/transactions/components/TransactionsScreenModals": path.resolve(
          rootDir,
          "src/shims/TransactionsScreenModals.tsx",
        ),
        "./useTransactionFormTradeLines": path.resolve(
          rootDir,
          "src/shims/useTransactionFormTradeLines.ts",
        ),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== "true",
      proxy: isLocalApi
        ? {
            "/api": {
              target: apiBaseUrl.replace(/\/api\/v1\/?$/, ""),
              changeOrigin: true,
            },
          }
        : undefined,
    },
  };
});
