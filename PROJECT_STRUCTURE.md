# بنية مشروع Najjar Portfolio

مشروع موقعي الشخصي (Next.js 15 + App Router + i18n) — منظَّم بنفس بنية `chat_cash_frontend`.

---

## 🌳 الشجرة العامة

```
landings-bundle/
├── app/                      # Next.js App Router
├── config/                   # إعدادات التطبيق + ثوابت
├── data/                     # بيانات ثابتة (messages, navigation, filters)
├── lib/                      # أدوات + i18n + data layer (projects, blog)
├── modules/                  # وحدات الميزات (Feature modules) ← قلب المشروع
├── public/                   # ملفات ثابتة (robots.txt, images…)
├── _legacy/                  # 📦 ملفات الموقع القديم (HTML/CSS) — للمرجع فقط، خارج البناء
├── middleware.ts             # next-intl middleware
├── next.config.ts            # إعدادات Next.js + plugin next-intl
├── tsconfig.json
├── package.json
└── README.md
```

---

## 📁 `app/` — Next.js App Router

```
app/
├── globals.css               # CSS عام (~3000 سطر، تصميم neo-brutalism)
├── layout.tsx                # Root layout (يُعيد children فقط)
├── not-found.tsx             # صفحة 404 عالمية
├── sitemap.ts                # توليد sitemap.xml من projects + blog
├── viewport.ts               # إعدادات viewport
└── [locale]/                 # ✨ توجيه ديناميكي حسب اللغة
    ├── layout.tsx            # <html lang dir> + NextIntlClientProvider
    ├── loading.tsx           # حالة التحميل
    └── (website)/            # Route Group — صفحات الموقع
        ├── page.tsx          # الصفحة الرئيسية
        ├── work/page.tsx     # المشاريع (قائمة)
        ├── services/page.tsx # الخدمات
        ├── process/page.tsx  # طريقة العمل
        ├── blog/
        │   ├── page.tsx      # قائمة المقالات
        │   └── [slug]/page.tsx  # مقالة + TOC + FAQ
        ├── projects/
        │   └── [slug]/page.tsx  # case study ديناميكي
        ├── faq/page.tsx
        └── contact/page.tsx
```

> **ملاحظة:** `(website)` هي Route Group لا تظهر في الـ URL. يمكن لاحقاً إضافة `(auth)` لصفحات تسجيل دخول لو لزم.

---

## 🧩 `modules/` — الوحدات الوظيفية

كل وحدة تحتوي على المكوّنات الخاصة بميزة معيَّنة.

```
modules/
├── common/                   # مشتركة بين كل الصفحات
│   ├── SiteNav.tsx           # شريط التنقّل (client)
│   ├── SiteFooter.tsx        # الفوتر مع متغيرات headline
│   ├── SiteTicker.tsx        # شريط التذكير المتحرك
│   └── index.ts              # barrel export
├── home/                     # Hero + sections للصفحة الرئيسية
├── work/
│   ├── WorkFilter.tsx        # فلتر المشاريع (client)
│   └── index.ts
├── services/
├── process/
├── faq/
│   ├── FAQAccordion.tsx      # accordion (client)
│   └── index.ts
├── blog/
│   ├── BlogList.tsx          # قائمة + فلاتر (client)
│   ├── BlogTOC.tsx           # جدول محتويات مع IntersectionObserver
│   └── index.ts
├── contact/
│   ├── ContactForm.tsx       # نموذج الاتصال (client)
│   └── index.ts
└── projects/                 # مكوّنات case studies (للتوسيع)
```

---

## 🛠️ `lib/` — أدوات + Data layer

```
lib/
├── i18n/
│   ├── routing.ts            # locales + defaultLocale
│   ├── request.ts            # getRequestConfig لـ next-intl
│   └── navigation.ts         # Link, redirect, useRouter (typed)
├── projects.ts               # ProjectListing + ProjectDetail + 21 مشروع
└── blog-posts.ts             # BlogPostMeta + BlogPostFull + المحتوى
```

---

## ⚙️ `config/`

```
config/
└── app.config.ts             # site / author / contact / stats
```

> كل URL أو إيميل أو رقم WhatsApp مركزي هنا — تعدّل من مكان واحد.

---

## 📊 `data/` — بيانات ثابتة

```
data/
├── messages/
│   └── en.json               # ترجمات الإنجليزية (جاهز لإضافة ar.json)
├── navigation/
│   └── index.ts              # عناصر القائمة الرئيسية
└── filters/
    └── index.ts              # chips فلترة (work + blog)
```

---

## 🌐 `middleware.ts`

```ts
import createMiddleware from 'next-intl/middleware'
import { routing } from '@/lib/i18n/routing'

export default createMiddleware(routing)
```

يتعامل مع توجيه `[locale]` تلقائياً (حالياً `en` فقط، جاهز لإضافة `ar`).

---

## 🧠 ملخّص المعمارية

| الطبقة | المسؤولية |
|---|---|
| `app/` | Routing + layouts + metadata + sitemap |
| `modules/` | UI + State + Logic لكل ميزة |
| `lib/` | Data fetching, i18n, helpers |
| `config/` | إعدادات قابلة للتعديل |
| `data/` | بيانات ثابتة (i18n, نصوص قوائم) |

### قواعد ذهبية

1. **كل صفحة جديدة** → داخل `app/[locale]/(website)/`.
2. **كل مكوّن خاص بميزة** → `modules/<feature>/` + يُصدَّر من `index.ts`.
3. **أي إعداد عالمي** (إيميل، URL، عنوان) → `config/app.config.ts`.
4. **أي نص قابل للترجمة** → `data/messages/en.json` (و `ar.json` لاحقاً).
5. **بيانات المحتوى الثقيلة** (مشاريع، مقالات) → `lib/projects.ts` و `lib/blog-posts.ts`.
6. **استدعاء داخل الصفحات** عبر:
   ```tsx
   import { SiteNav, SiteFooter, SiteTicker } from '@/modules/common'
   import { FAQAccordion } from '@/modules/faq'
   import { appConfig } from '@/config/app.config'
   ```

---

## 🚀 الإضافة المستقبلية لدعم العربية

1. أنشئ `data/messages/ar.json` بنفس مفاتيح `en.json`.
2. عدّل `lib/i18n/routing.ts`:
   ```ts
   locales: ['en', 'ar'] as const
   ```
3. ستُولَّد تلقائياً المسارات `/ar/work` و `/en/work`.
4. اتجاه RTL يُضبط تلقائياً في `[locale]/layout.tsx` بناءً على `locale === 'ar'`.

---

## 📦 التشغيل

```bash
npm install
npm run dev      # التطوير
npm run build    # الإنتاج
npm start
```
