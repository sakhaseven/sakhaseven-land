import {
  ArrowLeft,
  BadgeCheck,
  Check,
  PackageCheck,
  ScanLine,
} from "lucide-react";
import { Sakha7Logo } from "../../compoenents/Sakha7Logo";
import { contactHref, heroProofs } from "../../content/landing";
import { Container } from "../ui/Container";

const traceSteps = ["المصدر", "الفحص", "التعبئة"];

export function HeroSection() {
  return (
    <section id="top" className="relative scroll-mt-24" aria-labelledby="hero-title">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-48 top-10 size-[440px] rounded-full bg-[#dce8d8]/70 blur-3xl" />
        <div className="absolute -left-48 top-64 size-[400px] rounded-full bg-[#eee2bd]/60 blur-3xl" />
      </div>

      <Container className="relative grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.03fr_0.97fr] lg:py-28">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#214e34]/10 bg-white/75 px-4 py-2 text-xs font-semibold text-[#31593e] shadow-sm backdrop-blur">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#5a9169] opacity-50" />
              <span className="relative inline-flex size-2 rounded-full bg-[#397649]" />
            </span>
            ثقة تبدأ من كل حبة تقاوي
          </div>

          <h1
            id="hero-title"
            className="text-balance text-4xl font-bold leading-[1.35] tracking-[-0.035em] text-[#17241a] sm:text-5xl lg:text-[64px]"
          >
            تقاوي مختارة
            <span className="mx-3 inline-block border-b-4 border-[#c6a34f]/75 text-[#2d6740]">
              لموسم أفضل
            </span>
            من أول خطوة.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#5d695f] sm:text-lg">
            في سخا 7، بنوفر لك منتجات زراعية موثوقة، بتعبئة محترمة ومعلومات
            واضحة تساعدك تختار وأنت مطمّن.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#products"
              className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-[#214e34] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(33,78,52,0.2)] transition hover:-translate-y-0.5 hover:bg-[#183c28]"
            >
              استكشف منتجاتنا
              <ArrowLeft className="size-4 transition group-hover:-translate-x-1" aria-hidden="true" />
            </a>

            <a
              href={contactHref}
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#263a2b]/10 bg-white/80 px-7 py-3.5 text-sm font-semibold text-[#294532] shadow-sm backdrop-blur transition hover:border-[#214e34]/20 hover:bg-white"
            >
              تحدث مع فريقنا
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs font-medium text-[#667066]">
            {heroProofs.map((proof) => (
              <span key={proof} className="flex items-center gap-2">
                <BadgeCheck className="size-4 text-[#397649]" aria-hidden="true" />
                {proof}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px]" aria-label="نموذج لبيانات التحقق من عبوة سخا 7">
          <div className="absolute -inset-7 rounded-[48px] bg-gradient-to-br from-[#dae6d7] via-transparent to-[#e9dcb5] opacity-80 blur-2xl" aria-hidden="true" />

          <div className="relative overflow-hidden rounded-[38px] border border-white/80 bg-[#ece8d7] p-4 shadow-[0_35px_80px_rgba(42,58,45,0.16)] sm:p-6">
            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#244c33] via-[#315f3e] to-[#182e20] p-6 text-white sm:p-8">
              <div className="relative z-10 flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-medium text-white/60">منظومة التحقق من العبوة</p>
                  <p className="mt-1 text-2xl font-bold">من أرضنا لأرضك</p>
                </div>
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#e5ca78] backdrop-blur">
                  <Sakha7Logo size={25} title="" />
                </div>
              </div>

              <div className="relative z-10 mt-8 rounded-[24px] border border-white/70 bg-[#fbf8ed] p-5 text-[#203426] shadow-[0_22px_50px_rgba(7,24,13,0.22)] sm:p-6">
                <div className="flex items-start justify-between gap-4 border-b border-black/[0.07] pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-[#e5f0e5] text-[#2c633e]">
                      <PackageCheck className="size-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-[#788078]">بيانات العبوة</p>
                      <p className="mt-0.5 font-bold">تقاوي القمح · سخا 7</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#e3f0e4] px-3 py-1.5 text-[10px] font-bold text-[#2d6740]">
                    تم التحقق
                  </span>
                </div>

                <dl className="grid grid-cols-2 gap-x-4 gap-y-5 py-5 text-sm">
                  <div>
                    <dt className="text-[10px] font-medium text-[#7a827b]">رقم التشغيلة</dt>
                    <dd className="mt-1 font-bold tracking-wide" dir="ltr">SK7-24018</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-medium text-[#7a827b]">الموسم</dt>
                    <dd className="mt-1 font-bold">2026 / 2027</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-medium text-[#7a827b]">حالة العبوة</dt>
                    <dd className="mt-1 font-bold text-[#2d6740]">صالحة للتداول</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-medium text-[#7a827b]">نوع المنتج</dt>
                    <dd className="mt-1 font-bold">تقاوي معتمدة</dd>
                  </div>
                </dl>

                <div className="rounded-2xl bg-[#eef3e9] p-4">
                  <div className="flex items-center justify-between">
                    {traceSteps.map((step, index) => (
                      <div key={step} className="flex flex-1 items-center last:flex-none">
                        <div className="flex flex-col items-center gap-1.5">
                          <span className="flex size-7 items-center justify-center rounded-full bg-[#2d6740] text-white">
                            <Check className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
                          </span>
                          <span className="text-[9px] font-bold text-[#5c665e]">{step}</span>
                        </div>
                        {index < traceSteps.length - 1 ? (
                          <span className="mx-2 h-px flex-1 bg-[#a9bda9]" aria-hidden="true" />
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-md">
                  <ScanLine className="mb-2 size-5 text-[#e5ca78]" aria-hidden="true" />
                  <p className="text-[11px] text-white/55">سهولة التحقق</p>
                  <p className="mt-1 text-sm font-semibold">امسح واعرف التفاصيل</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-md">
                  <PackageCheck className="mb-2 size-5 text-[#e5ca78]" aria-hidden="true" />
                  <p className="text-[11px] text-white/55">تعبئة عملية</p>
                  <p className="mt-1 text-sm font-semibold">مصممة للحفاظ على المنتج</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
