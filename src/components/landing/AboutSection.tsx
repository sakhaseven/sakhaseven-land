import { ArrowLeft, Phone } from "lucide-react";
import { Sakha7Logo } from "../ui/Sakha7Logo";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 pb-20 sm:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-[36px] bg-[#203f2b] px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
          <div className="absolute -left-24 -top-28 size-80 rounded-full border-[65px] border-white/[0.04]" aria-hidden="true" />
          <div className="absolute -bottom-36 right-1/3 size-96 rounded-full border-[75px] border-[#d0b363]/[0.07]" aria-hidden="true" />

          <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-white/10 text-[#e0c46f]">
                <Sakha7Logo size={25} title="" variant="golden" />
              </div>
              <SectionHeading
                eyebrow="شركة مصرية برؤية طويلة المدى"
                title="نبني ثقة تستمر من موسم لموسم."
                description="سخا 7 متخصصة في التقاوي والمنتجات الزراعية. بنبني علاقتنا مع المزارع على الجودة، والوضوح، وخدمة تحترم احتياجه."
                inverted
              />
            </div>

            <div className="shrink-0">
              <a
                href="#contact"
                className="group flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#e1c46f] px-8 py-4 text-sm font-bold text-[#203426] transition hover:-translate-y-0.5 hover:bg-[#ecd58e]"
              >
                <Phone className="size-5" aria-hidden="true" />
                كلمنا واعرف المتاح
                <ArrowLeft className="size-4 transition group-hover:-translate-x-1" aria-hidden="true" />
              </a>
              <p className="mt-3 text-center text-xs text-white/50">هنساعدك تختار المنتج المناسب لاحتياجك</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
