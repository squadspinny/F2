import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { defineConfig, Plugin } from 'vite';
import { syncSitemap } from './scripts/sync-sitemap';

function sitemapAutoSyncPlugin(): Plugin {
  return {
    name: 'sitemap-auto-sync',
    buildStart() {
      try {
        syncSitemap(path.resolve(__dirname));
      } catch (err) {
        console.warn('Could not auto-sync sitemap:', err);
      }
    },
    configureServer(server) {
      try {
        syncSitemap(path.resolve(__dirname));
      } catch (err) {
        console.warn('Could not auto-sync sitemap:', err);
      }

      // Serve Google verification files directly from public directory without SPA HTML fallback
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith('/google') && req.url.endsWith('.html')) {
          const filePath = path.resolve(__dirname, 'public', req.url.slice(1));
          if (fs.existsSync(filePath)) {
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end(fs.readFileSync(filePath));
            return;
          }
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), sitemapAutoSyncPlugin()],
    esbuild: {
      legalComments: 'none',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      target: 'es2020',
      minify: 'esbuild',
      cssMinify: true,
      sourcemap: false,
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('/node_modules/')) {
              if (
                id.includes('/node_modules/react/') ||
                id.includes('/node_modules/react-dom/') ||
                id.includes('/node_modules/scheduler/')
              ) {
                return 'vendor-react';
              }
              if (id.includes('/node_modules/react-router')) {
                return 'vendor-router';
              }
              if (id.includes('/node_modules/lucide-react/')) {
                return 'vendor-icons';
              }
            }
            if (id.includes('/src/data/calculators/')) {
              return 'exam-data';
            }
          },
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: true as const,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
