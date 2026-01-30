import Image from "next/image"
import { SectionTracker } from "@/components/analytics/section-tracker"

const testimonials = [
  {
    name: "Lucas M.",
    role: "Dev Jr., 22 anos",
    quote:
      "Entre a faculdade e o trampo de dev, minha cabeça virava um caos. Esquecia das dailies, das entregas... com a Foquinha no zap, tudo mudou. Ela me manda o que preciso fazer e quando, sem eu ter que abrir Trello ou Notion. É o fim da ansiedade.",
    image: "https://i.ibb.co/spy6CscW/Luan-estudante.webp",
  },
  {
    name: "Julia S.",
    role: "Empreendedora, 24 anos",
    quote:
      "Tocar minha loja online sozinha é uma loucura. Cliente, fornecedor, postar... eu vivia nos post-its. Agora, só jogo tudo na Foquinha pelo zap. Ela organiza e me cobra. Minha produtividade dobrou, sério.",
    image: "https://i.ibb.co/wF2zkBZt/julia-psicologa.webp",
  },
  {
    name: "Bia G.",
    role: "Estudante e Social Media, 20 anos",
    quote:
      "Conciliar os trabalhos da faculdade com os freelas de social media era impossível. Vivia perdendo prazo. A Foquinha virou meu cérebro. Jogo uma tarefa lá e esqueço. Ela me lembra na hora certa. Salvou meu semestre e meus clientes.",
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
              Veja só o que a galera que usa a Foquinha está dizendo
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-700">
              pessoas como você usando a Foquinha pra não surtar na correria
            </p>
          </div>

          {/* Testimonials - WhatsApp Style */}
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-3xl bg-gradient-to-br from-[#ECE5DD] to-[#D9D3CC] p-6 shadow-lg"
              >
                {/* WhatsApp Chat Header */}
                <div className="mb-4 flex items-center gap-3 rounded-t-2xl bg-[#128C7E] px-4 py-3 -mx-6 -mt-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="size-10 rounded-full object-cover ring-2 ring-white"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-xs text-white/80">{testimonial.role}</p>
                  </div>
                  <div className="flex gap-1 text-white/80">
                    <span className="text-xl">⋮</span>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="space-y-3">
                  {/* Question from friend */}
                  <div className="flex justify-start">
                    <div className="max-w-[85%] rounded-lg rounded-tl-none bg-white px-4 py-3 shadow-sm">
                      <p className="text-sm text-slate-700">
                        E aí, como tá sendo usar a Foquinha? 🤔
                      </p>
                      <p className="mt-1 text-xs text-slate-400">14:23</p>
                    </div>
                  </div>

                  {/* Response - Testimonial */}
                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-lg rounded-tr-none bg-[#DCF8C6] px-4 py-3 shadow-sm">
                      <p className="text-sm leading-relaxed text-slate-800">
                        {testimonial.quote}
                      </p>
                      <div className="mt-1 flex items-center justify-end gap-1">
                        <p className="text-xs text-slate-500">14:25</p>
                        <span className="text-xs text-[#128C7E]">✓✓</span>
                      </div>
                    </div>
                  </div>

                  {/* Reaction */}
                  <div className="flex justify-start">
                    <div className="rounded-lg rounded-tl-none bg-white px-4 py-2 shadow-sm">
                      <p className="text-lg">🔥</p>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="mt-4 flex items-center justify-center gap-1 text-yellow-500">
                  <span className="text-lg">★</span>
                  <span className="text-lg">★</span>
                  <span className="text-lg">★</span>
                  <span className="text-lg">★</span>
                  <span className="text-lg">★</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionTracker>
  )
}
