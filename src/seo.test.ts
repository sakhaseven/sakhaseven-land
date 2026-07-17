import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const readProjectFile = (path: string) =>
  readFileSync(resolve(process.cwd(), path), "utf8");

describe("static search and browser metadata", () => {
  const html = readProjectFile("index.html");
  const document = new DOMParser().parseFromString(html, "text/html");

  it("publishes canonical, social, and complete icon metadata", () => {
    expect(
      document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href,
    ).toBe("https://www.sakha7.com/");
    expect(
      document.querySelector<HTMLMetaElement>('meta[name="description"]')
        ?.content,
    ).toContain("تقاوي القمح والأرز");
    expect(
      document.querySelector<HTMLMetaElement>('meta[property="og:image"]')
        ?.content,
    ).toBe("https://www.sakha7.com/og-image.png");

    const iconHrefs = Array.from(
      document.querySelectorAll<HTMLLinkElement>(
        'link[rel="icon"], link[rel="apple-touch-icon"], link[rel="mask-icon"]',
      ),
      (link) => link.getAttribute("href"),
    );

    expect(iconHrefs).toEqual(
      expect.arrayContaining([
        "/favicon.ico",
        "/favicon.svg",
        "/favicon-32x32.png",
        "/favicon-16x16.png",
        "/apple-touch-icon.png",
        "/safari-pinned-tab.svg",
      ]),
    );
  });

  it("keeps company, products, and contact details in the initial HTML", () => {
    const fallbackText =
      document.querySelector<HTMLElement>("#root")?.textContent ?? "";

    expect(fallbackText).toContain("تقاوي القمح");
    expect(fallbackText).toContain("تقاوي الأرز");
    expect(fallbackText).toContain("0100 560 3378");
    expect(fallbackText).toContain("0100 551 6354");
    expect(fallbackText).toContain("info@sakha7.com");
    expect(fallbackText).not.toContain("تقاوي الذرة");
    expect(fallbackText).not.toContain("تقاوي البقوليات");
  });

  it("exposes valid Organization structured data", () => {
    const jsonLd = document.querySelector<HTMLScriptElement>(
      'script[type="application/ld+json"]',
    )?.textContent;

    expect(jsonLd).toBeTruthy();
    const graph = JSON.parse(jsonLd ?? "{}")["@graph"] as Array<
      Record<string, unknown>
    >;
    const organization = graph.find(
      (entity) => entity["@type"] === "Organization",
    );

    expect(organization).toMatchObject({
      name: "سخا 7",
      url: "https://www.sakha7.com/",
      email: "info@sakha7.com",
      telephone: "+201005603378",
    });
    expect(organization?.sameAs).toEqual(
      expect.arrayContaining([
        "https://www.facebook.com/profile.php?id=61591813868362",
        "https://www.youtube.com/@Sakha7",
      ]),
    );
  });

  it("keeps the standalone manifest on the Sakha 7 identity", () => {
    const manifest = JSON.parse(readProjectFile("public/site.webmanifest"));

    expect(manifest).toMatchObject({
      name: "سخا 7 لتقاوي القمح والأرز",
      short_name: "سخا 7",
      lang: "ar-EG",
      dir: "rtl",
    });
  });
});

describe("privacy policy page", () => {
  const html = readProjectFile("privacy-policy/index.html");
  const document = new DOMParser().parseFromString(html, "text/html");

  it("is a standalone, indexable Arabic document", () => {
    expect(document.documentElement.lang).toBe("ar-EG");
    expect(document.documentElement.dir).toBe("rtl");
    expect(document.title).toBe("سياسة الخصوصية | سخا 7");
    expect(
      document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href,
    ).toBe("https://www.sakha7.com/privacy-policy");
    expect(
      document.querySelector<HTMLMetaElement>('meta[name="robots"]')?.content,
    ).toContain("index");
  });

  it("publishes the policy and official contact methods in initial HTML", () => {
    const text = document.body.textContent ?? "";

    expect(text).toContain("المعلومات التي قد نتعامل معها");
    expect(text).toContain("الكوكيز والتخزين المحلي");
    expect(text).toContain("اختياراتك وحقوقك");
    expect(text).toContain("info@sakha7.com");
    expect(text).toContain("0100 560 3378");
    expect(text).toContain("0100 551 6354");
  });

  it("is discoverable from the sitemap", () => {
    expect(readProjectFile("public/sitemap.xml")).toContain(
      "https://www.sakha7.com/privacy-policy",
    );
  });

  it("bypasses the landing-page fallback in production", () => {
    const nginx = readProjectFile("nginx.conf");

    expect(nginx).toContain("location ~ ^/privacy-policy/?$");
    expect(nginx).toContain("try_files /privacy-policy/index.html =404;");
  });
});
