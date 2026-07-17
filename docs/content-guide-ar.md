# إدارة صور المنتجات وآراء العملاء

## إضافة صور لمعرض منتج

1. ضع الصور داخل `public/images/products`، ويفضل إنشاء مجلد لكل صنف، مثل:

   ```text
   public/images/products/wheat/planting.webp
   public/images/products/wheat/care.webp
   public/images/products/wheat/selection.webp
   public/images/products/wheat/seeds.webp
   ```

2. افتح `src/content/landing.ts` وابحث عن المنتج والمرحلة المطلوبة داخل `gallery`.

3. أضف مسار الصورة إلى المرحلة:

   ```ts
   {
     id: "wheat-planting",
     stage: "01 · الزراعة",
     title: "بداية مدروسة في الأرض",
     src: "/images/products/wheat/planting.webp",
     alt: "زراعة تقاوي القمح في الأرض",
     description: "...",
   }
   ```

المقاس المقترح هو `1600 × 1200` بنسبة `4:3`، وصيغة `WebP`، وحجم أقل من `500 KB` للصورة. إذا لم يوجد `src` أو فشل تحميل الصورة، يعرض المعرض بديلًا بصريًا متناسقًا مع هوية سخا 7.

## إضافة رأي مزارع أو شريك

حدّث مصفوفة `testimonials` داخل `src/content/landing.ts` ببيانات الرأي الموثق:

```ts
{
  id: 1,
  quote: "نص الرأي بعد موافقة صاحبه على النشر.",
  author: "اسم صاحب الرأي",
  role: "مزارع قمح",
  location: "كفر الشيخ",
  relationship: "مزارع",
  isPlaceholder: false,
}
```

استخدم `relationship: "شريك"` لأصحاب الشراكات أو الموزعين. عند حذف كل النماذج التجريبية أو تحويل `isPlaceholder` إلى `false`، تختفي رسالة التنبيه التجريبية تلقائيًا من القسم.

## ملاحظة

هذه النسخة تعتمد على ملفات المشروع. إضافة الصور والآراء من لوحة تحكم تحتاج ربط الموقع بخدمة إدارة محتوى أو قاعدة بيانات وواجهة رفع ملفات.
