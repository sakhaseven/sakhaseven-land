import {
  ArrowLeft,
  BadgeCheck,
  ChevronLeft,
  Leaf,
  Menu,
  PackageCheck,
  Phone,
  ScanLine,
  ShieldCheck,
  Sprout,
  Wheat,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "تقاوي القمح",
    category: "محاصيل حقلية",
    description:
      "تقاوي مختارة بعناية، مناسبة للموسم الزراعي ومجهزة وفق معايير جودة واضحة.",
    icon: Wheat,
    tone: "from-[#e8d9a7] to-[#c7a94f]",
    iconBackground: "bg-[#f5edcf]",
    badge: "اختيار المزارعين",
  },
  {
    id: 2,
    name: "تقاوي الأرز",
    category: "محاصيل حقلية",
    description:
      "تقاوي موثوقة تساعدك تبدأ موسمك بخطوة صحيحة، مع بيانات واضحة لكل عبوة.",
    icon: Sprout,
    tone: "from-[#b8d7bc] to-[#4f8b5c]",
    iconBackground: "bg-[#e2f0e4]",
    badge: "جودة موثوقة",
  },
  {
    id: 3,
    name: "تقاوي الذرة",
    category: "محاصيل حقلية",
    description:
      "تقاوي منتقاة للاستخدام الزراعي، بتعبئة عملية تساعد في الحفاظ على المنتج.",
    icon: Leaf,
    tone: "from-[#f0ce72] to-[#d38a24]",
    iconBackground: "bg-[#fff0c8]",
    badge: "تعبئة آمنة",
  },
  {
    id: 4,
    name: "تقاوي الفول",
    category: "بقوليات",
    description:
      "منتج مجهز بعناية مع إمكانية التحقق من بيانات العبوة ومصدرها بسهولة.",
    icon: PackageCheck,
    tone: "from-[#cec6ad] to-[#81775e]",
    iconBackground: "bg-[#eeeae0]",
    badge: "قابل للتتبع",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "جودة واضحة",
    description: "بنوضح لك بيانات المنتج ومواصفاته من غير تعقيد.",
  },
  {
    icon: ScanLine,
    title: "تحقق بالـ QR",
    description: "امسح الكود الموجود على العبوة واعرف تفاصيل المنتج.",
  },
  {
    icon: BadgeCheck,
    title: "مصدر موثوق",
    description: "كل عبوة لها بيانات تعريف تساعدك تتأكد من مصدرها.",
  },
];

export default function App() {
  return (
    <main
      dir="rtl"
      className="min-h-dvh overflow-hidden bg-[#f8f7f2] text-[#18221a]"
      style={{
        fontFamily:
          '"IBM Plex Sans Arabic", "Noto Sans Arabic", Arial, sans-serif',
      }}
    >
      {/* Navigation */}
      <header className="relative z-50 border-b border-black/[0.06] bg-[#f8f7f2]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a
            href="#"
            className="flex items-center gap-3"
            aria-label="الصفحة الرئيسية لشركة سخا 7"
          >
            <div className="flex size-11 items-center justify-center rounded-2xl bg-[#214e34] text-white shadow-[0_10px_30px_rgba(33,78,52,0.18)]">
              <Sprout className="size-6" strokeWidth={1.8} />
            </div>

            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold tracking-tight">سخا</span>
                <span className="text-xl font-bold text-[#b08a32]">7</span>
              </div>
              <p className="text-[11px] font-medium text-[#667066]">
                للتقاوي والمنتجات الزراعية
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#4e594f] md:flex">
            <a className="transition hover:text-[#214e34]" href="#products">
              منتجاتنا
            </a>
            <a className="transition hover:text-[#214e34]" href="#quality">
              الجودة
            </a>
            <a className="transition hover:text-[#214e34]" href="#about">
              عن سخا 7
            </a>
            <a className="transition hover:text-[#214e34]" href="#contact">
              تواصل معانا
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-[#214e34] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#183c28] sm:flex"
            >
              <Phone className="size-4" />
              تواصل معانا
            </a>

            <button
              type="button"
              className="flex size-11 items-center justify-center rounded-full border border-black/10 bg-white md:hidden"
              aria-label="فتح القائمة"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-48 top-10 size-[440px] rounded-full bg-[#dce8d8]/70 blur-3xl" />
          <div className="absolute -left-48 top-64 size-[400px] rounded-full bg-[#eee2bd]/60 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #18221a 1px, transparent 0)",
              backgroundSize: "26px 26px",
            }}
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-28">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#214e34]/10 bg-white/70 px-4 py-2 text-xs font-semibold text-[#31593e] shadow-sm backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#5a9169] opacity-50" />
                <span className="relative inline-flex size-2 rounded-full bg-[#397649]" />
              </span>
              بداية جديدة لجودة تقدر تثق فيها
            </div>

            <h1 className="text-balance text-4xl font-bold leading-[1.35] tracking-[-0.035em] text-[#17241a] sm:text-5xl lg:text-[64px]">
              تقاوي مختارة
              <span className="relative mx-3 inline-block text-[#2d6740]">
                لموسم أفضل
                <svg
                  className="absolute -bottom-1 right-0 h-3 w-full text-[#c6a34f]"
                  viewBox="0 0 220 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8.5C56 3.5 135 2.5 217 7"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              من أول خطوة.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#5d695f] sm:text-lg">
              في سخا 7، بنوفر لك منتجات زراعية موثوقة، بتعبئة محترمة
              ومعلومات واضحة تساعدك تختار وأنت مطمّن.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#products"
                className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-[#214e34] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(33,78,52,0.2)] transition hover:-translate-y-0.5 hover:bg-[#183c28]"
              >
                شوف منتجاتنا
                <ArrowLeft className="size-4 transition group-hover:-translate-x-1" />
              </a>

              <a
                href="#quality"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#263a2b]/10 bg-white/75 px-7 py-3.5 text-sm font-semibold text-[#294532] shadow-sm backdrop-blur transition hover:bg-white"
              >
                إزاي بنضمن الجودة؟
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs font-medium text-[#667066]">
              <span className="flex items-center gap-2">
                <BadgeCheck className="size-4 text-[#397649]" />
                بيانات واضحة
              </span>
              <span className="flex items-center gap-2">
                <BadgeCheck className="size-4 text-[#397649]" />
                عبوات قابلة للتتبع
              </span>
              <span className="flex items-center gap-2">
                <BadgeCheck className="size-4 text-[#397649]" />
                دعم عربي بسيط
              </span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute -inset-7 rounded-[48px] bg-gradient-to-br from-[#dae6d7] via-transparent to-[#e9dcb5] opacity-80 blur-2xl" />

            <div className="relative overflow-hidden rounded-[38px] border border-white/80 bg-[#ece8d7] p-4 shadow-[0_35px_80px_rgba(42,58,45,0.16)] sm:p-6">
              <div className="relative min-h-[480px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#244c33] via-[#315f3e] to-[#182e20] p-7 text-white sm:min-h-[540px] sm:p-9">
                <div
                  className="absolute inset-0 opacity-[0.09]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                />

                <div className="absolute -left-20 -top-24 size-72 rounded-full border-[55px] border-white/[0.05]" />
                <div className="absolute -bottom-28 -right-16 size-80 rounded-full border-[70px] border-[#d9bc69]/10" />

                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <p className="text-xs font-medium text-white/65">
                      سخا 7 للتقاوي
                    </p>
                    <p className="mt-1 text-2xl font-bold">من أرضنا لأرضك</p>
                  </div>

                  <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                    <Sprout className="size-6 text-[#e5ca78]" />
                  </div>
                </div>

                <div className="relative z-10 mx-auto mt-12 flex h-64 w-[72%] items-center justify-center sm:h-72">
                  <div className="absolute bottom-0 h-24 w-full rounded-[50%] bg-black/20 blur-xl" />

                  <div className="relative h-full w-[76%] rotate-[-2deg] rounded-t-[34px] rounded-b-[20px] border border-white/20 bg-gradient-to-br from-[#f0e7c9] to-[#c8b98e] shadow-2xl">
                    <div className="absolute left-4 right-4 top-4 border-t border-dashed border-[#736847]/45" />

                    <div className="absolute inset-x-5 top-12 rounded-2xl border border-[#214e34]/10 bg-[#f7f1dd] px-5 py-6 text-center text-[#20442e] shadow-sm">
                      <Sprout className="mx-auto size-9 text-[#346846]" />
                      <p className="mt-3 text-2xl font-bold">
                        سخا <span className="text-[#a47c24]">7</span>
                      </p>
                      <p className="mt-1 text-[10px] font-semibold tracking-wide text-[#69736b]">
                        تقاوي مختارة بعناية
                      </p>

                      <div className="mx-auto mt-4 h-px w-14 bg-[#b59a54]/40" />

                      <p className="mt-4 text-sm font-bold">تقاوي القمح</p>
                      <p className="mt-1 text-[9px] text-[#6e756f]">
                        بيانات العبوة متاحة عبر رمز التحقق
                      </p>
                    </div>

                    <div className="absolute bottom-5 left-5 rounded-lg bg-white/80 p-2">
                      <ScanLine className="size-7 text-[#214e34]" />
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-md">
                    <p className="text-[11px] text-white/60">سهولة التحقق</p>
                    <p className="mt-1 text-sm font-semibold">امسح واعرف التفاصيل</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-md">
                    <p className="text-[11px] text-white/60">تعبئة عملية</p>
                    <p className="mt-1 text-sm font-semibold">مصممة للحفاظ على المنتج</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-2 flex items-center gap-3 rounded-2xl border border-black/[0.05] bg-white p-3.5 shadow-[0_18px_45px_rgba(31,52,36,0.14)] sm:-right-7">
              <div className="flex size-11 items-center justify-center rounded-xl bg-[#e5f0e5]">
                <ScanLine className="size-5 text-[#2c633e]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#263b2d]">
                  تحقق من العبوة
                </p>
                <p className="mt-0.5 text-[10px] text-[#778079]">
                  باستخدام رمز QR
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section
        id="products"
        className="border-y border-black/[0.05] bg-white py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold text-[#397649]">منتجات سخا 7</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#1a291e] sm:text-4xl">
                اختيارات بسيطة لاحتياجات أرضك
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-[#69736b]">
                بنبدأ بمجموعة أساسية من التقاوي، وكل منتج ليه بيانات واضحة
                تقدر ترجع لها بسهولة.
              </p>
            </div>

            <a
              href="#contact"
              className="group flex w-fit items-center gap-2 text-sm font-bold text-[#315d3e]"
            >
              استفسر عن التوفر
              <ChevronLeft className="size-4 transition group-hover:-translate-x-1" />
            </a>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <article
                  key={product.id}
                  className="group relative overflow-hidden rounded-[28px] border border-black/[0.06] bg-[#fbfbf8] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#315d3e]/15 hover:shadow-[0_24px_55px_rgba(38,64,44,0.1)]"
                >
                  <div
                    className={`relative flex h-52 items-center justify-center overflow-hidden rounded-[22px] bg-gradient-to-br ${product.tone}`}
                  >
                    <div
                      className="absolute inset-0 opacity-[0.12]"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
                        backgroundSize: "17px 17px",
                      }}
                    />

                    <div className="absolute -left-10 -top-10 size-36 rounded-full border-[30px] border-white/10" />

                    <div className="relative flex h-32 w-24 rotate-[-3deg] items-center justify-center rounded-t-[18px] rounded-b-xl border border-white/50 bg-[#f5efd9] shadow-xl transition duration-500 group-hover:rotate-0 group-hover:scale-105">
                      <div className="absolute left-2 right-2 top-2 border-t border-dashed border-black/20" />
                      <div className="text-center text-[#264d33]">
                        <Icon className="mx-auto size-8" />
                        <p className="mt-2 text-sm font-bold">
                          سخا <span className="text-[#a9822c]">7</span>
                        </p>
                        <p className="mt-1 text-[8px] font-medium">
                          تقاوي مختارة
                        </p>
                      </div>
                    </div>

                    <span className="absolute right-3 top-3 rounded-full bg-white/85 px-3 py-1.5 text-[10px] font-bold text-[#37463a] backdrop-blur">
                      {product.badge}
                    </span>
                  </div>

                  <div className="pt-5">
                    <p className="text-[11px] font-semibold text-[#859087]">
                      {product.category}
                    </p>
                    <h3 className="mt-1.5 text-xl font-bold text-[#213326]">
                      {product.name}
                    </h3>
                    <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#6c756e]">
                      {product.description}
                    </p>

                    <a
                      href="#contact"
                      className="mt-5 flex items-center justify-between border-t border-black/[0.06] pt-4 text-sm font-bold text-[#315d3e]"
                    >
                      اعرف التفاصيل
                      <span className="flex size-8 items-center justify-center rounded-full bg-[#e8f0e8] transition group-hover:bg-[#315d3e] group-hover:text-white">
                        <ChevronLeft className="size-4" />
                      </span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section id="quality" className="bg-[#f8f7f2] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold text-[#397649]">
                الثقة تبدأ من المعلومة
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#1a291e] sm:text-4xl">
                تعرف أنت بتشتري إيه، ومنين.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-[#667068]">
                هدفنا إن تجربة شراء التقاوي تبقى أبسط وأوضح. علشان كده بنعتمد
                على بيانات تعريف لكل منتج، وتعبئة منظمة، وطريقة سهلة للتحقق من
                العبوة.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#214e34]/15 bg-white px-6 py-3 text-sm font-bold text-[#214e34] transition hover:border-[#214e34]/30"
              >
                اسألنا عن المنتج المناسب
                <ArrowLeft className="size-4" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {trustPoints.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-[26px] border border-black/[0.06] bg-white p-6 shadow-[0_16px_40px_rgba(44,62,48,0.06)]"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[#e6efe6] text-[#315d3e]">
                    <Icon className="size-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[#25372a]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#717a73]">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About / CTA */}
      <section id="about" className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#203f2b] px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "22px 22px",
            }}
          />
          <div className="absolute -left-24 -top-28 size-80 rounded-full border-[65px] border-white/[0.04]" />
          <div className="absolute -bottom-36 right-1/3 size-96 rounded-full border-[75px] border-[#d0b363]/[0.07]" />

          <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-white/10">
                <Sprout className="size-6 text-[#e0c46f]" />
              </div>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                شركة جديدة، بس رؤيتنا واضحة.
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-white/70">
                سخا 7 شركة مصرية متخصصة في التقاوي والمنتجات الزراعية. بنبني
                ثقة طويلة مع المزارع، من خلال الجودة والوضوح والخدمة المحترمة.
              </p>
            </div>

            <div id="contact" className="shrink-0">
              <a
                href="tel:+201000000000"
                className="group flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#e1c46f] px-8 py-4 text-sm font-bold text-[#203426] transition hover:bg-[#ecd58e]"
              >
                <Phone className="size-5" />
                كلمنا واعرف المتاح
                <ArrowLeft className="size-4 transition group-hover:-translate-x-1" />
              </a>
              <p className="mt-3 text-center text-xs text-white/50">
                هنساعدك تختار المنتج المناسب لاحتياجك
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/[0.06] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-[#214e34] text-white">
              <Sprout className="size-5" />
            </div>
            <div>
              <p className="font-bold">
                سخا <span className="text-[#a8812d]">7</span>
              </p>
              <p className="text-[11px] text-[#778078]">
                للتقاوي والمنتجات الزراعية
              </p>
            </div>
          </div>

          <p className="text-xs text-[#7b837c]">
            © {new Date().getFullYear()} سخا 7. جميع الحقوق محفوظة.
          </p>

          <a
            href="https://www.sakha7.com"
            className="text-xs font-semibold text-[#315d3e]"
          >
            www.sakha7.com
          </a>
        </div>
      </footer>
    </main>
  );
}