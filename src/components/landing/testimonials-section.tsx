import Image from "next/image"
import { SectionTracker } from "@/components/analytics/section-tracker"

const testimonials = [
  {
    name: "Pedro Lucas",
    role: "25 anos",
    quote:
      "Trampo o dia todo, nunca consegui usar esses app de organização… sempre esquecia de abrir. Comecei a usar isso no zap e facilitou demais. Eu acordo e já recebo tudo que preciso fazer no dia.",
    image: "https://i.ibb.co/spy6CscW/Luan-estudante.webp",
  },
  {
    name: "Ana Luiza",
    role: "23 anos",
    quote:
      "Sempre tentei agenda, planner, app… nada dava certo. Me cobrava demais. Essa foi a única coisa que funcionou porque é simples e parece que tem alguém ali comigo todo dia.",
    image: "https://i.ibb.co/wF2zkBZt/julia-psicologa.webp",
  },
  {
    name: "Maria Clara",
    role: "27 anos",
    quote:
      "Trabalho o dia todo, chego morta. Sempre esquecia coisa da facul e da casa. Isso no WhatsApp salvou real. Me ajudou a manter a cabeça no lugar.",
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
              Mais de 2.300 pessoas já usam a Foquinha para não esquecer do que importa.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-700">
              Pessoas normais. Vida corrida. Mesmo problema que você.
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
