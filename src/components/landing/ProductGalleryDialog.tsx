import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  ChevronLeft,
  ChevronRight,
  ImagePlus,
  X,
} from "lucide-react";
import { Sakha7Logo } from "../ui/Sakha7Logo";
import type { Product, ProductGalleryImage } from "../../content/landing";

interface ProductGalleryDialogProps {
  product: Product | null;
  onClose: () => void;
}

interface GalleryMediaProps {
  item: ProductGalleryImage;
  product: Product;
  compact?: boolean;
}

function GalleryMedia({ item, product, compact = false }: GalleryMediaProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const Icon = product.icon;

  useEffect(() => setImageFailed(false), [item.src]);

  if (item.src && !imageFailed) {
    return (
      <img
        src={item.src}
        alt={item.alt}
        className="size-full object-cover"
        onError={() => setImageFailed(true)}
      />
    );
  }

  return (
    <div
      className={`relative flex size-full items-center justify-center overflow-hidden bg-gradient-to-br ${product.tone}`}
      role="img"
      aria-label={item.alt}
    >
      <Sakha7Logo
        size={compact ? 22 : 34}
        title=""
        variant="golden"
        className="absolute left-4 top-4 opacity-90"
      />
      <div
        className={`flex items-center justify-center rounded-[30%] border border-white/70 bg-white/80 text-[#315d3e] shadow-[0_22px_55px_rgba(31,57,38,0.16)] ${
          compact ? "size-12" : "size-24 sm:size-28"
        }`}
      >
        <Icon
          className={compact ? "size-6" : "size-11 sm:size-14"}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export function ProductGalleryDialog({
  product,
  onClose,
}: ProductGalleryDialogProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => setActiveIndex(0), [product?.id]);

  useEffect(() => {
    if (!product) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, product]);

  if (!product) return null;

  const activeItem = product.gallery[activeIndex];
  const showPrevious = () =>
    setActiveIndex((index) =>
      index === 0 ? product.gallery.length - 1 : index - 1,
    );
  const showNext = () =>
    setActiveIndex((index) =>
      index === product.gallery.length - 1 ? 0 : index + 1,
    );

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#09160f]/75 p-3 backdrop-blur-md sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`gallery-title-${product.id}`}
        className="flex max-h-[94dvh] w-full max-w-6xl flex-col overflow-hidden rounded-[30px] border border-white/15 bg-[#f8f7f2] shadow-[0_36px_100px_rgba(0,0,0,0.35)]"
      >
        <header className="flex items-center justify-between gap-4 border-b border-black/[0.07] bg-white px-5 py-4 sm:px-7">
          <div>
            <p className="text-[11px] font-bold text-[#a47c24]">
              رحلة العناية بالصنف
            </p>
            <h2
              id={`gallery-title-${product.id}`}
              className="mt-1 text-xl font-bold text-[#1d3023] sm:text-2xl"
            >
              معرض {product.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-[#f8f7f2] text-[#334338] transition hover:border-[#214e34]/25 hover:text-[#214e34]"
            aria-label="إغلاق معرض الصور"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </header>

        <div className="overflow-y-auto p-4 sm:p-6">
          <div className="grid gap-5 lg:grid-cols-[1.55fr_0.75fr]">
            <div className="relative aspect-[4/3] min-h-[280px] overflow-hidden rounded-[24px] bg-[#e9e4d8] sm:min-h-[420px]">
              <GalleryMedia item={activeItem} product={product} />

              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between sm:inset-x-5 sm:bottom-5">
                <span className="rounded-full bg-[#14291d]/85 px-4 py-2 text-xs font-bold text-white backdrop-blur">
                  {activeItem.stage}
                </span>
                <span className="rounded-full bg-white/85 px-3 py-2 text-xs font-bold text-[#315d3e] backdrop-blur">
                  {activeIndex + 1} / {product.gallery.length}
                </span>
              </div>
            </div>

            <aside className="flex flex-col justify-between rounded-[24px] border border-black/[0.06] bg-white p-5 sm:p-6">
              <div>
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#f4edda] text-[#a47c24]">
                  <ImagePlus className="size-6" aria-hidden="true" />
                </div>
                <p className="mt-6 text-xs font-bold text-[#a47c24]">
                  {activeItem.stage}
                </p>
                <h3 className="mt-2 text-2xl font-bold leading-tight text-[#1f3225]">
                  {activeItem.title}
                </h3>
                <p className="mt-4 leading-7 text-[#667068]">
                  {activeItem.description}
                </p>
              </div>

              <div className="mt-8 flex gap-3 border-t border-black/[0.07] pt-5">
                <button
                  type="button"
                  onClick={showPrevious}
                  className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-[#214e34]/15 text-sm font-bold text-[#214e34] transition hover:bg-[#eef3ec]"
                  aria-label="الصورة السابقة"
                >
                  <ChevronRight className="size-4" aria-hidden="true" />
                  السابقة
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-[#214e34] text-sm font-bold text-white transition hover:bg-[#183c28]"
                  aria-label="الصورة التالية"
                >
                  التالية
                  <ChevronLeft className="size-4" aria-hidden="true" />
                </button>
              </div>
            </aside>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {product.gallery.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`overflow-hidden rounded-2xl border-2 bg-white p-1 text-right transition ${
                  index === activeIndex
                    ? "border-[#c9a227] shadow-[0_10px_25px_rgba(84,68,22,0.12)]"
                    : "border-transparent hover:border-[#214e34]/15"
                }`}
                aria-label={`عرض مرحلة ${item.title}`}
                aria-pressed={index === activeIndex}
              >
                <span className="block aspect-[4/3] overflow-hidden rounded-xl">
                  <GalleryMedia item={item} product={product} compact />
                </span>
                <span className="block truncate px-2 pb-1 pt-2 text-[11px] font-bold text-[#435047]">
                  {item.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
