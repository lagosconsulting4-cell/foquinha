import Image from "next/image"
import { SectionTracker } from "@/components/analytics/section-tracker"

const testimonials = [
  {
    name: "Lucas M.",
    role: "Dev Jr., 22 anos",
    quote:
      "cara eu tava procrastinando um curso de react faz MESES e com as 2h que a foquinha me devolveu eu finalmente fiz kkkk já subi de nível no trampo e ainda tô malhando. ela literalmente mudou minha vida",
    image: "https://i.ibb.co/spy6CscW/Luan-estudante.webp",
  },
  {
    name: "Julia S.",
    role: "Empreendedora, 24 anos",
    quote:
      "mano, o tempo que eu economizei foi direto pra prospectar cliente e criar conteúdo. faturei 40% a mais em 2 meses 😮 hoje consigo tocar a loja E ter vida. melhor investimento que fiz sério",
    image: "https://i.ibb.co/wF2zkBZt/julia-psicologa.webp",
  },
  {
    name: "Bia G.",
    role: "Estudante e Social Media, 20 anos",
    quote:
      "vc acredita que sobrou tempo até pra academia?? kkkkk antes era impossível encaixar qualquer coisa. agora faço TCC, freela e ainda assisto série. não volto mais pro caos n",
    image: "https://i.ibb.co/b5nSxRWm/mariana-designer.webp",
  },
] as const

export function TestimonialsSection() {
  return (
    <SectionTracker sectionId="testimonials">
      <section className="bg-slate-50 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-lg">
          {/* Avatar group + rating */}
          <div className="mb-8 flex flex-col items-center gap-3">
            <div className="flex items-center">
              {testimonials.map((t, i) => (
                <div key={i} style={{ marginLeft: i !== 0 ? "-10px" : "0" }}>
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={36}
                    height={36}
                    className="rounded-full object-cover ring-2 ring-white size-9"
                  />
                </div>
              ))}
              <div
                className="flex size-9 items-center justify-center rounded-full bg-slate-800 ring-2 ring-white"
                style={{ marginLeft: "-10px" }}
              >
                <span className="text-[10px] font-bold text-white">+1k</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-yellow-400 text-base tracking-tight">★★★★★</span>
              <span className="text-xs font-semibold text-slate-600">4.9 · +1.200 usuários</span>
            </div>
            <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
              Veja o que as pessoas estão fazendo com as 2h extras
            </h2>
          </div>

          {/* Depoimentos */}
          <div className="space-y-3">
            {testimonials.map((t, i) => (
              <div key={i} className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="shrink-0 rounded-full object-cover size-11 ring-2 ring-slate-100"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-sm font-bold text-slate-900">{t.name}</span>
                    <span className="text-xs text-slate-400">· {t.role}</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-snug">{t.quote}</p>
                  <div className="mt-1.5 text-yellow-400 text-xs tracking-tight">★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionTracker>
  )
}
