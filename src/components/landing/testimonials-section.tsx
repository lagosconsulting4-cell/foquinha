import Image from "next/image"
import { SectionTracker } from "@/components/analytics/section-tracker"

const testimonials = [
  {
    name: "Pedro Lucas",
    role: "25 anos",
    quote:
      "trampo o dia todo, nunca consegui usar esses app de organização... sempre esquecia de abrir, perdia td. comecei a usar essa parada no zap e slá, facilitou mt minha vida kkk agr eu acordo e já recebo td q preciso fazer no dia. é mt mais prático, direto no zap q eu já uso msm. melhor coisa q fiz esse ano foi começar a usar isso",
    image: "https://i.ibb.co/wF2zkBZt/julia-psicologa.webp",
  },
  {
    name: "Ana Luiza",
    role: "23 anos",
    quote:
      "sempre tentei usar agenda, planner, app, td q aparecia... mas nunca dava certo 😮‍💨 ficava mt ansiosa, me cobrava dms por tentar me organizar e n conseguia manter. era td mt complicado, esquecia as coisas, me sentia uma bagunça. essa IA no zap foi a única coisa q funcionou pq é direto, simples e parece q tem alguém ali me guiando todo dia. tô conseguindo manter minha rotina pela primeira vez na vida, sério 🥹❤️",
    image: "https://i.ibb.co/spy6CscW/Luan-estudante.webp",
  },
  {
    name: "Maria Clara",
    role: "27 anos",
    quote:
      "trabalho o dia todo de carteira assinada, chego em casa morta, aí tem q lembrar de coisa da facul, da casa, da vida... sempre tentei me organizar com agenda mas nunca funcionava, era complicado dms. essa IA no whatsapp salvou real, pq me manda td certinho direto no zap, n preciso abrir mil app. tá me ajudando mt a manter a cabeça no lugar e parar de esquecer td",
    image: "https://i.ibb.co/b5nSxRWm/mariana-designer.webp",
  },
] as const

export function TestimonialsSection() {
  return (
    <SectionTracker sectionId="testimonials">
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Gente comum organizando a vida no WhatsApp
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
              A mesma dúvida que você: será que funciona? Eles testaram e responderam.
            </p>
          </div>

          {/* Testimonials */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
              >
                {/* Stars */}
                <div className="mb-4 flex items-center justify-between gap-2">
                  <div className="flex gap-1 text-yellow-500">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Foi útil?
                  </span>
                </div>

                {/* Quote */}
                <p className="mb-6 text-base leading-relaxed text-slate-700">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="size-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionTracker>
  )
}
