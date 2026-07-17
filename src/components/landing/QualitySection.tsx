import { ArrowLeft } from "lucide-react";
import { trustPoints, type TrustPoint } from "../../content/landing";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

function TrustCard({ point }: { point: TrustPoint }) {
  const Icon = point.icon;

  return (
    <article className="rounded-[26px] border border-black/[0.06] bg-white p-6 shadow-[0_16px_40px_rgba(44,62,48,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(44,62,48,0.1)]">
      <div className="flex size-12 items-center justify-center rounded-2xl bg-[#e6efe6] text-[#315d3e]">
        <Icon className="size-6" strokeWidth={1.8} aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-lg font-bold text-[#25372a]">{point.title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#717a73]">{point.description}</p>
    </article>
  );
}

export function QualitySection() {
  return (
    <section id="quality" className="scroll-mt-24 bg-[#f8f7f2] py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="الثقة تبدأ من المعلومة"
              title="تعرف أنت بتشتري إيه، ومنين."
              description="هدفنا إن تجربة شراء التقاوي تبقى أبسط وأوضح. علشان كده بنعتمد على بيانات تعريف لكل منتج، وتعبئة منظمة، وطريقة سهلة للتحقق من العبوة."
            />

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#214e34]/15 bg-white px-6 py-3 text-sm font-bold text-[#214e34] transition hover:-translate-y-0.5 hover:border-[#214e34]/30"
            >
              اسألنا عن المنتج المناسب
              <ArrowLeft className="size-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {trustPoints.map((point) => (
              <TrustCard key={point.title} point={point} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
