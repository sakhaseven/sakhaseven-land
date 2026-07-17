import {
  ArrowUpLeft,
  Facebook,
  Mail,
  MessageCircle,
  PhoneCall,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import {
  contactPhones,
  emailAddress,
  emailHref,
  facebookHref,
  whatsappHref,
  youtubeHref,
  type ContactPhone,
} from "../../content/landing";
import { Container } from "../ui/Container";
import { Sakha7Logo } from "../ui/Sakha7Logo";
import { SectionHeading } from "../ui/SectionHeading";

interface ContactChannel {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
  className: string;
}

const contactChannels: ContactChannel[] = [
  {
    label: "واتساب",
    value: "ابدأ محادثة مباشرة",
    href: whatsappHref,
    icon: MessageCircle,
    className: "bg-[#214e34] text-white",
  },
  {
    label: "البريد الإلكتروني",
    value: emailAddress,
    href: emailHref,
    icon: Mail,
    className: "border border-black/[0.07] bg-[#f8f7f2] text-[#203426]",
  },
  {
    label: "فيسبوك",
    value: "تابع صفحة سخا 7",
    href: facebookHref,
    icon: Facebook,
    className: "border border-black/[0.07] bg-[#f8f7f2] text-[#203426]",
  },
  {
    label: "يوتيوب",
    value: "@Sakha7",
    href: youtubeHref,
    icon: Youtube,
    className: "border border-black/[0.07] bg-[#f8f7f2] text-[#203426]",
  },
];

function PhoneCard({
  phone,
  index,
}: {
  phone: ContactPhone;
  index: number;
}) {
  return (
    <a
      href={phone.href}
      className="group relative overflow-hidden rounded-[24px] border border-[#c9a227]/20 bg-[#f8f3e5] p-5 transition hover:-translate-y-1 hover:border-[#c9a227]/45 hover:shadow-[0_24px_55px_rgba(77,61,20,0.1)] sm:rounded-[28px] sm:p-7"
      aria-label={`اتصل على ${phone.local}`}
    >
      <span
        className="absolute -left-10 -top-10 size-36 rounded-full border-[28px] border-[#c9a227]/[0.08]"
        aria-hidden="true"
      />

      <div className="relative flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-2xl bg-[#214e34] text-[#e4c96a]">
            <PhoneCall className="size-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-bold text-[#8b6b1d]">{phone.label}</p>
            <p className="mt-0.5 text-[10px] text-[#7c7462]">
              اضغط للاتصال مباشرة
            </p>
          </div>
        </div>
        <span className="text-xs font-bold text-[#9f7b1e]">
          0{index + 1}
        </span>
      </div>

      <div
        dir="ltr"
        className="relative mt-8 flex flex-wrap items-center gap-2.5 font-mono text-[clamp(1.35rem,7vw,2.55rem)] font-bold tracking-tight text-[#183423]"
        aria-hidden="true"
      >
        {phone.segments.map((segment, segmentIndex) => (
          <span key={segment} className="flex items-center gap-2.5">
            <span>{segment}</span>
            {segmentIndex < phone.segments.length - 1 ? (
              <span className="size-1.5 rounded-full bg-[#c9a227]" />
            ) : null}
          </span>
        ))}
      </div>

      <div className="relative mt-5 flex items-center justify-between border-t border-[#9f7b1e]/15 pt-4">
        <span dir="ltr" className="text-xs font-semibold text-[#79715f]">
          {phone.international}
        </span>
        <span className="flex items-center gap-1.5 text-xs font-bold text-[#315d3e]">
          اتصال الآن
          <ArrowUpLeft
            className="size-3.5 transition group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </a>
  );
}

function ChannelCard({ channel }: { channel: ContactChannel }) {
  const Icon = channel.icon;
  const isExternal = channel.href.startsWith("http");

  return (
    <a
      href={channel.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={`group flex min-h-28 items-center justify-between gap-4 rounded-[22px] p-5 transition hover:-translate-y-1 ${channel.className}`}
      aria-label={`${channel.label}: ${channel.value}`}
    >
      <div className="flex min-w-0 items-center gap-4">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white/10">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <span className="min-w-0">
          <span className="block text-xs font-bold opacity-60">
            {channel.label}
          </span>
          <span
            dir={channel.href.startsWith("mailto:") ? "ltr" : undefined}
            className="mt-1 block break-all text-sm font-bold sm:text-base"
          >
            {channel.value}
          </span>
        </span>
      </div>
      <ArrowUpLeft
        className="size-4 shrink-0 opacity-60 transition group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
        aria-hidden="true"
      />
    </a>
  );
}

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-y border-black/[0.05] bg-white py-16 sm:py-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-[#214e34]">
              <Sakha7Logo size={25} title="" variant="golden" />
            </div>
            <SectionHeading
              eyebrow="إحنا قريبين منك"
              title="تواصل بالطريقة الأسهل ليك"
              description="اتصل مباشرة، ابعت لنا على واتساب أو البريد، وتابع أحدث أخبار سخا 7 على فيسبوك ويوتيوب."
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactPhones.map((phone, index) => (
              <PhoneCard key={phone.href} phone={phone} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {contactChannels.map((channel) => (
            <ChannelCard key={channel.label} channel={channel} />
          ))}
        </div>
      </Container>
    </section>
  );
}
