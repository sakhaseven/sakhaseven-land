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

By default, assets and links work at `https://<owner>.github.io/<repository>/`. To publish at `www.sakha7.com`, set the custom domain in **Settings → Pages**, configure its DNS for GitHub Pages, and set the repository Actions variable `PAGES_CUSTOM_DOMAIN` to `www.sakha7.com`. The workflow then builds for `/` and writes `CNAME` into the deployment artifact. The site's canonical and social metadata already use `www.sakha7.com`.

To reproduce the repository-path build locally:

```sh
VITE_BASE_PATH=/sakhaseven-land/ npm run build
```
