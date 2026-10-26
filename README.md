# Sakha 7 landing page

Static Vite site with a separate privacy policy page. No server or container is needed.

## Local development

```sh
npm ci
npm run dev
```

Run `npm run lint`, `npm test`, and `npm run build` before publishing. The output is in `dist/`.

## GitHub Pages

1. Push this workflow to the `main` branch.
2. In the repository's **Settings → Pages**, select **GitHub Actions** as the build and deployment source.
3. The workflow publishes on each push to `main`, or manually via **Actions → Deploy to GitHub Pages → Run workflow**.

The workflow reads the site's base path from GitHub Pages. With the default project URL, open `https://sakhaseven.github.io/sakhaseven-land/`. If **Settings → Pages** has `www.sakha7.com` as the custom domain, configure its DNS for GitHub Pages and open `https://www.sakha7.com/` instead. The site builds for `/` automatically in that case. Do not append `/sakhaseven-land/` to the custom domain. The site's canonical and social metadata already use `www.sakha7.com`.

To reproduce the repository-path build locally:

```sh
VITE_BASE_PATH=/sakhaseven-land/ npm run build
```
