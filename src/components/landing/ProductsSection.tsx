import { useState } from "react";
import { ChevronLeft, Images } from "lucide-react";
import { Sakha7Logo } from "../ui/Sakha7Logo";
import { products, type Product } from "../../content/landing";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { ProductGalleryDialog } from "./ProductGalleryDialog";

interface ProductCardProps {
  product: Product;
  onOpenGallery: (product: Product) => void;
}

function ProductCard({ product, onOpenGallery }: ProductCardProps) {
  const Icon = product.icon;

  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-black/[0.06] bg-[#fbfbf8] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#315d3e]/15 hover:shadow-[0_24px_55px_rgba(38,64,44,0.1)]">
      <div
        className={`relative flex h-52 items-center justify-center overflow-hidden rounded-[22px] bg-gradient-to-br ${product.tone}`}
      >
        <span className="absolute right-3 top-3 rounded-full bg-white/85 px-3 py-1.5 text-[10px] font-bold text-[#37463a] shadow-sm backdrop-blur">
          {product.badge}
        </span>
        <span className="absolute left-4 top-4" aria-hidden="true">
          <Sakha7Logo size={22} title="" variant="golden" />
        </span>

        <div
          className={`flex size-24 items-center justify-center rounded-[28px] border border-white/70 shadow-[0_22px_45px_rgba(41,51,38,0.16)] transition duration-500 group-hover:scale-105 ${product.iconSurface}`}
        >
          <Icon className="size-11" strokeWidth={1.6} aria-hidden="true" />
        </div>
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

        <div className="mt-5 flex items-center gap-2 border-t border-black/[0.06] pt-4">
          <button
            type="button"
            onClick={() => onOpenGallery(product)}
            className="flex min-h-10 flex-1 items-center justify-center gap-2 rounded-full bg-[#e8f0e8] px-4 text-sm font-bold text-[#315d3e] transition hover:bg-[#315d3e] hover:text-white"
            aria-label={`افتح معرض صور ${product.name}`}
          >
            <Images className="size-4" aria-hidden="true" />
            رحلة الصنف
          </button>
          <a
            href="#contact"
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#315d3e]/15 text-[#315d3e] transition hover:bg-[#315d3e] hover:text-white"
            aria-label={`استفسر عن توفر ${product.name}`}
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

export function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section
      id="products"
      className="scroll-mt-24 border-y border-black/[0.05] bg-white py-20 sm:py-28"
    >
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="منتجات سخا 7"
            title="نرعى الصنف من الأرض حتى يصبح تقاوي"
            description="افتح معرض كل صنف وشاهد مراحل العناية به من بداية الزراعة، مرورًا بالمتابعة والانتقاء، حتى التجهيز والتعبئة."
          />

          <a
            href="#contact"
            className="group flex w-fit items-center gap-2 rounded-md text-sm font-bold text-[#315d3e]"
          >
            اطلب قائمة التوفر
            <ChevronLeft
              className="size-4 transition group-hover:-translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenGallery={setSelectedProduct}
            />
          ))}
        </div>
      </Container>

      <ProductGalleryDialog
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
