import {
  ArrowLeft,
  BadgeCheck,
  Check,
  PackageCheck,
  ScanLine,
} from "lucide-react";
import { Sakha7Logo } from "../ui/Sakha7Logo";
import { heroProofs } from "../../content/landing";
import { Container } from "../ui/Container";

const traceSteps = ["المصدر", "الفحص", "التعبئة"];

function HandDrawnUnderline() {
  return (
    <svg
      className="pointer-events-none absolute -bottom-1.5 -left-[3%] h-4 w-[106%] overflow-visible -rotate-[0.5deg] text-[#c9a227]"
      viewBox="0 0 260 18"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 10.8C25 8.5 43 11.9 64 10.2C88 8.1 105 11.4 128 9.6C151 7.8 169 10.8 191 8.9C213 7.1 234 9.8 255 7.3"
        stroke="currentColor"
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 13.1C30 11.7 47 14.1 69 12.2C91 10.3 110 13.3 133 11.4C157 9.4 176 12.1 198 10.1C220 8.3 238 10.5 253 9"
        stroke="#e4c96a"
        strokeWidth="1.35"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M18 8.8C39 7.6 50 10 72 8.6M145 8.2C164 6.9 179 8.6 194 7.4M219 7.2C230 6.5 239 7.3 247 6.6"
        stroke="#9f7b1e"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.42"
      />
    </svg>
  );
}

function VerificationProgress() {
  return (
    <div className="relative overflow-hidden rounded-[20px] border border-[#c9a227]/15 bg-gradient-to-b from-[#f7f5eb] to-[#edf3e9] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:px-5">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[#c9a227]/45 to-transparent"
        aria-hidden="true"
      />

      <div className="relative">
        <span
          className="absolute left-[16.666%] right-[16.666%] top-[17px] h-[2px] -translate-y-1/2 bg-gradient-to-l from-[#2d6740] via-[#c9a227] to-[#2d6740]"
          aria-hidden="true"
        />

        <ol
          className="relative grid grid-cols-3"
          aria-label="مراحل التحقق المكتملة"
        >
          {traceSteps.map((step) => (
            <li
              key={step}
              className="relative z-10 flex min-w-0 flex-col items-center text-center"
            >
              <span className="flex size-9 items-center justify-center rounded-full border-[3px] border-[#f4f3e9] bg-[#2d6740] text-white shadow-[0_4px_12px_rgba(45,103,64,0.22),0_0_0_1px_rgba(201,162,39,0.28)]">
                <Check
                  className="size-4"
                  strokeWidth={2.7}
                  aria-hidden="true"
                />
              </span>
              <span className="mt-2 text-[10px] font-bold leading-none text-[#435348]">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

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
            <span className="relative mx-3 inline-block pb-1 text-[#2d6740]">
              لموسم أفضل
              <HandDrawnUnderline />
            </span>
            من أول خطوة.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#5d695f] sm:text-lg">
            في سخا 7، بنتخصص حاليًا في تقاوي القمح والأرز، بعناية مستمرة من
            الحقل حتى التعبئة ومعلومات واضحة تساعدك تختار وأنت مطمّن.
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
              href="#contact"
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
                  <Sakha7Logo size={25} title="" variant="golden" />
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

                <VerificationProgress />
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
