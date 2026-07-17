import {
  BadgeCheck,
  Leaf,
  PackageCheck,
  ScanLine,
  ShieldCheck,
  Sprout,
  Wheat,
  type LucideIcon,
} from "lucide-react";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: LucideIcon;
  tone: string;
  iconSurface: string;
  badge: string;
  gallery: ProductGalleryImage[];
}

export interface ProductGalleryImage {
  id: string;
  stage: string;
  title: string;
  description: string;
  src?: string;
  alt: string;
}

export interface TrustPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FooterGroup {
  title: string;
  links: NavigationItem[];
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  location: string;
  relationship: "مزارع" | "شريك";
  isPlaceholder?: boolean;
}

export const contactHref = "tel:+201000000000";
export const websiteHref = "https://www.sakha7.com";

export const navigationItems: NavigationItem[] = [
  { label: "منتجاتنا", href: "#products" },
  { label: "الجودة", href: "#quality" },
  { label: "آراء شركائنا", href: "#testimonials" },
  { label: "عن سخا 7", href: "#about" },
  { label: "تواصل معنا", href: "#contact" },
];

export const heroProofs = [
  "بيانات واضحة",
  "عبوات قابلة للتتبع",
  "دعم عربي متخصص",
];

// لإضافة صورة: ضع الملف داخل public/images/products ثم أضف
// src: "/images/products/اسم-الملف.webp" إلى المرحلة المطلوبة في gallery.
export const products: Product[] = [
  {
    id: 1,
    name: "تقاوي القمح",
    category: "محاصيل حقلية",
    description:
      "تقاوي مختارة بعناية، مناسبة للموسم الزراعي ومجهزة وفق معايير جودة واضحة.",
    icon: Wheat,
    tone: "from-[#f2e7c8] via-[#e7d39b] to-[#caa94f]",
    iconSurface: "bg-[#fffaf0] text-[#7f6322]",
    badge: "اختيار المزارعين",
    gallery: [
      {
        id: "wheat-planting",
        stage: "01 · الزراعة",
        title: "بداية مدروسة في الأرض",
        description: "اختيار مصدر التقاوي وتجهيز الأرض في التوقيت المناسب لبداية قوية.",
        alt: "زراعة تقاوي القمح في الأرض",
      },
      {
        id: "wheat-care",
        stage: "02 · الرعاية",
        title: "متابعة مستمرة للمحصول",
        description: "متابعة مراحل النمو والحالة العامة للنبات طوال فترة الصنف.",
        alt: "متابعة نمو محصول القمح",
      },
      {
        id: "wheat-selection",
        stage: "03 · الانتقاء",
        title: "فحص قبل الحصاد",
        description: "انتقاء المحصول الملائم ومراجعة الجودة قبل دخوله مرحلة التجهيز.",
        alt: "فحص سنابل القمح قبل الحصاد",
      },
      {
        id: "wheat-seeds",
        stage: "04 · التقاوي",
        title: "تجهيز وتعبئة موثوقة",
        description: "تجهيز التقاوي وحفظ بياناتها في عبوة منظمة قابلة للتتبع.",
        alt: "تجهيز وتعبئة تقاوي القمح",
      },
    ],
  },
  {
    id: 2,
    name: "تقاوي الأرز",
    category: "محاصيل حقلية",
    description:
      "تقاوي موثوقة تساعدك تبدأ موسمك بخطوة صحيحة، مع بيانات واضحة لكل عبوة.",
    icon: Sprout,
    tone: "from-[#dcebdc] via-[#b9d8bd] to-[#5e956a]",
    iconSurface: "bg-[#f4fbf4] text-[#2d6740]",
    badge: "جودة موثوقة",
    gallery: [
      {
        id: "rice-planting",
        stage: "01 · الزراعة",
        title: "تأسيس الحقل بعناية",
        description: "تجهيز الحقل واختيار التوقيت المناسب لزراعة الصنف.",
        alt: "زراعة الأرز في الحقل",
      },
      {
        id: "rice-care",
        stage: "02 · الرعاية",
        title: "رعاية طوال فترة النمو",
        description: "متابعة انتظام النمو والحالة العامة للنبات خلال الموسم.",
        alt: "متابعة نمو نبات الأرز",
      },
      {
        id: "rice-selection",
        stage: "03 · الانتقاء",
        title: "مراجعة المحصول",
        description: "فحص المحصول وانتقاء المناسب قبل مرحلة التجهيز.",
        alt: "فحص محصول الأرز قبل الحصاد",
      },
      {
        id: "rice-seeds",
        stage: "04 · التقاوي",
        title: "تقاوي جاهزة للموسم",
        description: "تجهيز المنتج وتعبئته مع بيانات واضحة لكل عبوة.",
        alt: "تجهيز وتعبئة تقاوي الأرز",
      },
    ],
  },
  {
    id: 3,
    name: "تقاوي الذرة",
    category: "محاصيل حقلية",
    description:
      "تقاوي منتقاة للاستخدام الزراعي، بتعبئة عملية تساعد في الحفاظ على المنتج.",
    icon: Leaf,
    tone: "from-[#fff0c4] via-[#f0cf75] to-[#d38a24]",
    iconSurface: "bg-[#fffaf0] text-[#9b651e]",
    badge: "تعبئة آمنة",
    gallery: [
      {
        id: "corn-planting",
        stage: "01 · الزراعة",
        title: "بداية الصنف",
        description: "اختيار الحقل وتجهيز التربة لزراعة منتظمة.",
        alt: "زراعة تقاوي الذرة في الحقل",
      },
      {
        id: "corn-care",
        stage: "02 · الرعاية",
        title: "متابعة مرحلة النمو",
        description: "العناية بالنبات ومتابعة تطور المحصول على مدار الموسم.",
        alt: "متابعة نمو نبات الذرة",
      },
      {
        id: "corn-selection",
        stage: "03 · الانتقاء",
        title: "انتقاء المحصول",
        description: "مراجعة المحصول واختيار المناسب للتجهيز كتقاوي.",
        alt: "انتقاء محصول الذرة",
      },
      {
        id: "corn-seeds",
        stage: "04 · التقاوي",
        title: "تجهيز يحافظ على الجودة",
        description: "تجهيز وتعبئة المنتج بعناية للحفاظ عليه حتى الاستخدام.",
        alt: "تجهيز وتعبئة تقاوي الذرة",
      },
    ],
  },
  {
    id: 4,
    name: "تقاوي الفول",
    category: "بقوليات",
    description:
      "منتج مجهز بعناية مع إمكانية التحقق من بيانات العبوة ومصدرها بسهولة.",
    icon: PackageCheck,
    tone: "from-[#e8e3d7] via-[#ccc3ae] to-[#81775e]",
    iconSurface: "bg-[#fbfaf6] text-[#5d5542]",
    badge: "قابل للتتبع",
    gallery: [
      {
        id: "beans-planting",
        stage: "01 · الزراعة",
        title: "تجهيز الأرض والزراعة",
        description: "اختيار التوقيت وتجهيز الأرض لبداية مناسبة للصنف.",
        alt: "زراعة الفول في الأرض",
      },
      {
        id: "beans-care",
        stage: "02 · الرعاية",
        title: "متابعة المحصول",
        description: "رعاية النبات ومتابعته طوال فترة النمو.",
        alt: "متابعة نمو محصول الفول",
      },
      {
        id: "beans-selection",
        stage: "03 · الانتقاء",
        title: "اختيار المنتج المناسب",
        description: "فحص المحصول وانتقاء المناسب قبل التجهيز النهائي.",
        alt: "فحص وانتقاء محصول الفول",
      },
      {
        id: "beans-seeds",
        stage: "04 · التقاوي",
        title: "تعبئة قابلة للتتبع",
        description: "تجهيز التقاوي وتسجيل بيانات العبوة ومصدرها.",
        alt: "تجهيز وتعبئة تقاوي الفول",
      },
    ],
  },
];

// استبدل النماذج التالية بآراء حقيقية وموثقة قبل النشر النهائي.
export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "اكتب هنا رأي المزارع عن جودة التقاوي، وضوح البيانات، وتجربته مع فريق سخا 7.",
    author: "اسم المزارع",
    role: "مزارع محاصيل حقلية",
    location: "المحافظة",
    relationship: "مزارع",
    isPlaceholder: true,
  },
  {
    id: 2,
    quote: "اكتب هنا شهادة الشريك عن الالتزام، جودة التعامل، واستمرارية التعاون خلال المواسم.",
    author: "اسم الشريك",
    role: "شريك توزيع",
    location: "منطقة العمل",
    relationship: "شريك",
    isPlaceholder: true,
  },
  {
    id: 3,
    quote: "اكتب هنا تجربة عميل موثقة توضّح كيف ساعده الفريق في اختيار المنتج المناسب.",
    author: "اسم صاحب التجربة",
    role: "صاحب نشاط زراعي",
    location: "المحافظة",
    relationship: "شريك",
    isPlaceholder: true,
  },
];

export const trustPoints: TrustPoint[] = [
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

export const footerGroups: FooterGroup[] = [
  {
    title: "استكشف",
    links: navigationItems,
  },
  {
    title: "المنتجات",
    links: [
      { label: "تقاوي القمح", href: "#products" },
      { label: "تقاوي الأرز", href: "#products" },
      { label: "تقاوي الذرة", href: "#products" },
      { label: "تقاوي البقوليات", href: "#products" },
    ],
  },
  {
    title: "الثقة والجودة",
    links: [
      { label: "بيانات المنتج", href: "#quality" },
      { label: "التحقق بالـ QR", href: "#quality" },
      { label: "تتبع العبوة", href: "#quality" },
      { label: "دعم اختيار المنتج", href: "#contact" },
    ],
  },
];
