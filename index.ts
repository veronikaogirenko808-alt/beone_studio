import { useState } from "react";

// ✅ Single‑file web doc you can open in a browser. 
// Paste your own image URLs in the `looks` array below (under images: [ ... ]).
// Tip: use Pinterest/Drive/direct image links. Keep them vertical (3:4 or 4:5) for best results.

const looks = [
  {
    title: "Спорт‑шик (Sport Chic)",
    key: "sport-chic",
    description:
      "Лёгкие спортивные топы, мини‑шорты или юбка‑трапеция, белые носочки, аккуратный хвост/пучок. Виб: только что после тренировки — свежо и женственно.",
    bullets: [
      "Ткани: cotton, rib, лайкра",
      "Цвета: белый, серый меланж, чёрный",
      "Аксессуары: бейсболка, тонкие серьги‑кольца",
    ],
    images: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520975922321-8a0a75d7b7df?q=80&w=900&auto=format&fit=crop",
    ],
  },
  {
    title: "Офисная сирена (Office Siren)",
    key: "office-siren",
    description:
      "Приталенная белая рубашка, мини или юбка‑карандаш, очки, каблуки. Сексуально, уверенно, с лёгкой строгостью.",
    bullets: [
      "Ткани: хлопок с эластаном, сатин",
      "Цвета: белый, чёрный, графит",
      "Аксессуары: очки, тонкий ремень",
    ],
    images: [
      "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520975693416-35a5c8d3d2fb?q=80&w=900&auto=format&fit=crop",
    ],
  },
  {
    title: "Clean Girl",
    key: "clean-girl",
    description:
      "Минимальный макияж, сияющая кожа, аккуратный пучок/хвост, базовые топы и пастельные рубашки. Чисто, ухоженно, спокойно.",
    bullets: [
      "Ткани: хлопок, шёлк‑сатин",
      "Цвета: бежевый, молочный, пастель",
      "Аксессуары: маленькие серьги‑гвоздики",
    ],
    images: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547056962-6a69f0b27c83?q=80&w=900&auto=format&fit=crop",
    ],
  },
  {
    title: "Тихая роскошь (Quiet Luxury)",
    key: "quiet-luxury",
    description:
      "Нейтральные оттенки, дорогие на вид ткани, простые силуэты, минимум украшений. Внешний вид: дорого и ненавязчиво.",
    bullets: [
      "Ткани: шёлк, кашемир, лен",
      "Цвета: экрю, тауп, тёплый серый",
      "Аксессуары: лаконичные золотые украшения",
    ],
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520974735194-5f966edc4c16?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=900&auto=format&fit=crop",
    ],
  },
  {
    title: "Vanilla Girl",
    key: "vanilla-girl",
    description:
      "Мягкие бежевые, кремовые и молочные оттенки, уютные фактуры, лёгкие топы и кардиганы, романтичные причёски. Натурально и сияюще.",
    bullets: [
      "Ткани: вязаный трикотаж, шифон",
      "Цвета: крем, ваниль, пудра",
      "Аксессуары: тонкие цепочки, блеск для губ",
    ],
    images: [
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520975830978-83fe8d76a6e2?q=80&w=900&auto=format&fit=crop",
    ],
  },
  {
    title: "Coquette Core",
    key: "coquette-core",
    description:
      "Бантики, рюши, корсеты, кружево, розовые оттенки, жемчуг. Атмосфера флирта и игривости.",
    bullets: [
      "Ткани: кружево, атлас",
      "Цвета: розовый, кремовый, белый",
      "Аксессуары: банты, жемчуг, атласные ленты",
    ],
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515549832467-8783363e19b6?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=900&auto=format&fit=crop",
    ],
  },
  {
    title: "Y2K Aesthetic",
    key: "y2k",
    description:
      "Глянцевые топы, мини‑юбки, деним, блёстки. Розовый/голубой/серебро, блеск на губах, распущенные волосы или два хвостика.",
    bullets: [
      "Ткани: винил, деним, ламе",
      "Цвета: розовый, голубой, серебро",
      "Аксессуары: чокер, бабочки‑заколки",
    ],
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop",
    ],
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        } catch (e) {
          console.error(e);
        }
      }}
      className="text-xs md:text-sm px-3 py-1.5 rounded-full border border-gray-300 hover:border-gray-400 transition bg-white/70 backdrop-blur"
    >
      {copied ? "Скопировано ✓" : "Скопировать описание"}
    </button>
  );
}

export default function LiveJasminLooksGuide() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-rose-50 via-white to-amber-50 text-gray-900">
      <header className="max-w-6xl mx-auto px-4 pt-10 pb-6">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Гид по образам для LiveJasmin</h1>
        <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
          На LiveJasmin всегда «лето»: выбираем лёгкие топы, юбки, шорты, платья и рубашки. Ниже — готовые стили c краткими описаниями
          и фото‑подсказками. Кликни «Скопировать» — и вставляй текст в чат‑онбординг.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-4 pb-16">
        <section className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {looks.map((look) => (
            <article key={look.key} className="group bg-white/80 backdrop-blur rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden border border-gray-100">
              <div className="grid grid-cols-3 gap-1 h-56 md:h-64 overflow-hidden">
                {look.images.map((src, idx) => (
                  <div key={idx} className="relative">
                    <img
                      src={src}
                      alt={`${look.title} пример ${idx + 1}`}
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/0 transition" />
                  </div>
                ))}
              </div>

              <div className="p-4 md:p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg md:text-xl font-semibold leading-snug">{look.title}</h3>
                  <CopyButton text={`${look.title}: ${look.description}`} />
                </div>
                <p className="mt-2 text-sm text-gray-700">{look.description}</p>
                <ul className="mt-3 space-y-1.5 text-sm text-gray-600 list-disc pl-5">
                  {look.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <footer className="mt-10 text-center text-xs text-gray-500">
          Подготовлено для онбординга моделей. Замените изображения на собственные ссылки при необходимости.
        </footer>
      </main>
    </div>
  );
}
