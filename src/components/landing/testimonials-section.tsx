import Image from "next/image"
import { SectionTracker } from "@/components/analytics/section-tracker"

const testimonials = [
  {
    name: "Lucas M.",
    role: "Dev Jr., 22 anos",
    quote:
      "Com as 2h que eu ganhei, consegui fazer aquele curso de React que tava empurrando faz meses. Já subi de nível no trampo e ainda sobra tempo pra malhar. A Foquinha literalmente mudou minha vida.",
    image: "https://i.ibb.co/spy6CscW/Luan-estudante.webp",
  },
  {
    name: "Julia S.",
    role: "Empreendedora, 24 anos",
    quote:
      "O tempo que eu economizei foi direto pra prospectar clientes e criar conteúdo. Faturamento subiu 40% em 2 meses. Hoje consigo tocar a loja E ter tempo pra mim. Melhor investimento que fiz.",
    image: "https://i.ibb.co/wF2zkBZt/julia-psicologa.webp",
  },
  {
    name: "Bia G.",
    role: "Estudante e Social Media, 20 anos",
    quote:
      "Sobrou tempo até pra academia e pra assistir série! Antes era impossível encaixar. Com a Foquinha organizando tudo em segundos, tenho tempo pra TCC, freelas E vida pessoal. Não volto mais pro caos.",
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
              Veja o que as pessoas estão fazendo com as 2h extras
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-700">
              Tempo de volta, conquistas reais
            </p>
          </div>

          {/* Testimonials - WhatsApp Style */}
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl"
              >
                <div className="relative mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover ring-4 ring-white shadow-md size-20"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-[#25D366] text-white p-1 rounded-full border-2 border-white">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="font-bold text-slate-900 text-lg">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative">
                  <p className="text-slate-700 leading-relaxed italic">&quot;{testimonial.quote}&quot;</p>

                  {/* Triangle pointer */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-slate-100 transform rotate-45"></div>
                </div>

                <div className="mt-4 flex gap-1 text-yellow-500">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-sm">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionTracker>
  )
}
