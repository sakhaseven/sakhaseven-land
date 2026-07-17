import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { contactHref, navigationItems } from "../../content/landing";
import { BrandLockup } from "../ui/BrandLockup";
import { Container } from "../ui/Container";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-[#f8f7f2]/90 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <a
          href="#top"
          className="rounded-2xl"
          aria-label="الصفحة الرئيسية لشركة سخا 7"
          onClick={closeMenu}
        >
          <BrandLockup />
        </a>

        <nav
          className="hidden items-center gap-8 text-sm font-medium text-[#4e594f] md:flex"
          aria-label="التنقل الرئيسي"
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
              className="rounded-md transition-colors hover:text-[#214e34]"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={contactHref}
            className="hidden items-center gap-2 rounded-full bg-[#214e34] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#183c28] sm:flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            تحدث مع فريقنا
          </a>

          <button
            type="button"
            className="flex size-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#233328] transition hover:border-[#214e34]/25 hover:text-[#214e34] md:hidden"
            aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      <div
        id="mobile-navigation"
        className={`border-t border-black/[0.05] bg-[#f8f7f2] md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Container className="py-4">
          <nav className="grid gap-1" aria-label="التنقل على الهاتف">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-[#354238] transition hover:bg-white hover:text-[#214e34]"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              href={contactHref}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#214e34] px-4 py-3 text-sm font-bold text-white"
              onClick={closeMenu}
            >
              <Phone className="size-4" aria-hidden="true" />
              تحدث مع فريقنا
            </a>
          </nav>
        </Container>
      </div>
    </header>
  );
}
