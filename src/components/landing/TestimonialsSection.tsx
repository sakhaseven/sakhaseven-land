import { Handshake, MapPin, Quote, Sprout } from "lucide-react";
import { testimonials, type Testimonial } from "../../content/landing";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const RelationshipIcon =
    testimonial.relationship === "مزارع" ? Sprout : Handshake;

  return (
    <article className="relative flex h-full flex-col rounded-[28px] border border-black/[0.06] bg-[#fbfbf8] p-6 shadow-[0_16px_40px_rgba(44,62,48,0.05)] sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <span className="flex size-11 items-center justify-center rounded-2xl bg-[#f2ead3] text-[#9f7b1e]">
          <Quote className="size-5" aria-hidden="true" />
        </span>
        <span className="rounded-full border border-[#c9a227]/20 bg-[#f7f0dd] px-3 py-1.5 text-[10px] font-bold text-[#8b6b1d]">
          {testimonial.isPlaceholder ? "نموذج قابل للتعديل" : testimonial.relationship}
        </span>
      </div>

      <blockquote className="mt-6 flex-1 text-base font-medium leading-8 text-[#344238]">
        “{testimonial.quote}”
      </blockquote>

      <div className="mt-7 flex items-center gap-3 border-t border-black/[0.06] pt-5">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#214e34] text-[#e4c96a]">
          <RelationshipIcon className="size-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="font-bold text-[#223128]">{testimonial.author}</p>
          <p className="mt-0.5 text-xs text-[#737c75]">{testimonial.role}</p>
          <p className="mt-1 flex items-center gap-1 text-[10px] text-[#8a918b]">
            <MapPin className="size-3" aria-hidden="true" />
            {testimonial.location}
          </p>
        </div>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  const hasPlaceholderContent = testimonials.some(
    (testimonial) => testimonial.isPlaceholder,
  );

  return (
    <section
      id="testimonials"
      className="scroll-mt-24 border-y border-black/[0.05] bg-white py-16 sm:py-28"
    >
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="ثقة تُبنى في الميدان"
            title="كلمة المزارعين وشركاء النجاح"
            description="مساحة للآراء الموثقة من المزارعين، الموزعين، وأصحاب الشراكات اللي اختاروا التعامل مع سخا 7."
          />
          {hasPlaceholderContent ? (
            <p className="max-w-xs rounded-2xl border border-[#c9a227]/15 bg-[#f8f3e5] px-4 py-3 text-xs leading-6 text-[#765f27]">
              النماذج الحالية توضّح شكل القسم. استبدلها بآراء حقيقية قبل الإطلاق.
            </p>
          ) : null}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
