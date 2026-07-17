import {
  ArrowLeft,
  BadgeCheck,
  ExternalLink,
  Phone,
  ScanLine,
  ShieldCheck,
} from "lucide-react";
import {
  contactHref,
  footerGroups,
  websiteHref,
} from "../../content/landing";
import { BrandLockup } from "../ui/BrandLockup";
import { Container } from "../ui/Container";

const footerTrustItems = [
  { icon: ShieldCheck, label: "معايير جودة واضحة" },
  { icon: ScanLine, label: "عبوات قابلة للتتبع" },
  { icon: BadgeCheck, label: "مصدر موثوق" },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-[#14291d] text-white">
      <Container className="py-12 sm:py-16">
        <div className="flex flex-col gap-6 rounded-[28px] border border-white/10 bg-white/[0.055] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold text-[#e1c46f]">شريكك في الموسم القادم</p>
            <h2 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl">تحتاج تعرف المنتج الأنسب لأرضك؟</h2>
            <p className="mt-3 leading-7 text-white/60">فريقنا يساعدك في معرفة الأصناف المتاحة واختيار الحل المناسب لاحتياجك.</p>
          </div>
          <a
            href={contactHref}
            className="group inline-flex min-h-13 shrink-0 items-center justify-center gap-3 rounded-full bg-[#e1c46f] px-7 py-3.5 text-sm font-bold text-[#203426] transition hover:-translate-y-0.5 hover:bg-[#ecd58e]"
          >
            <Phone className="size-4" aria-hidden="true" />
            تحدث مع فريقنا
            <ArrowLeft className="size-4 transition group-hover:-translate-x-1" aria-hidden="true" />
          </a>
        </div>

        <div className="grid gap-12 py-14 lg:grid-cols-[1.05fr_1.95fr] lg:gap-20">
          <div className="max-w-sm">
            <a href="#top" className="inline-flex rounded-2xl" aria-label="العودة إلى بداية الصفحة">
              <BrandLockup inverted />
            </a>
            <p className="mt-6 text-sm leading-7 text-white/58">
              شركة مصرية متخصصة في التقاوي والمنتجات الزراعية، نعمل على تقديم
              جودة واضحة وخدمة موثوقة للمزارع.
            </p>
            <a
              href={websiteHref}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-[#e1c46f] transition hover:text-[#edd58c]"
            >
              www.sakha7.com
              <ExternalLink className="size-3.5" aria-hidden="true" />
            </a>
          </div>

          <nav className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3" aria-label="روابط التذييل">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-bold text-white">{group.title}</h3>
                <ul className="mt-5 space-y-3.5">
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.label}`}>
                      <a href={link.href} className="rounded-sm text-sm text-white/55 transition hover:text-[#e1c46f]">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="grid gap-3 border-y border-white/10 py-5 sm:grid-cols-3">
          {footerTrustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 rounded-xl px-2 py-2 text-sm font-medium text-white/70">
              <span className="flex size-9 items-center justify-center rounded-xl bg-white/[0.07] text-[#e1c46f]">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              {label}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} سخا 7. جميع الحقوق محفوظة.</p>
          <p>جودة أوضح · اختيار أذكى · موسم أفضل</p>
        </div>
      </Container>
    </footer>
  );
}
