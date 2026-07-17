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
      <SiteHeader />
      <main>
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
