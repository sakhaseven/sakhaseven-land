import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProductsSection,
  QualitySection,
  SiteFooter,
  SiteHeader,
  TestimonialsSection,
} from "./components/landing";

export default function App() {
  return (
    <div
      dir="rtl"
      className="min-h-dvh overflow-x-hidden bg-[#f8f7f2] text-[#18221a]"
    >
      <a
        href="#main-content"
        className="fixed right-4 top-3 z-[120] -translate-y-24 rounded-full bg-[#214e34] px-5 py-3 text-sm font-bold text-white shadow-xl transition focus:translate-y-0"
      >
        انتقل إلى المحتوى
      </a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <ProductsSection />
        <QualitySection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
