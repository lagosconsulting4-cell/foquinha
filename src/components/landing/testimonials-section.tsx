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
