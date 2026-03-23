import Image from "next/image"
import { SectionTracker } from "@/components/analytics/section-tracker"

const testimonials = [
  {
    name: "Lucas M.",
    role: "Dev Jr., 22 anos",
    quote:
      "cara eu tava procrastinando um curso de programação faz MESES e com as 2h que a foquinha me devolveu eu finalmente fiz kkkk já subi de nível no trampo e ainda tô treinando. ela literalmente mudou minha vida",
    image: "/luan.webp",
  },
  {
    name: "Julia S.",
    role: "Empreendedora, 24 anos",
    quote:
      "meu, o tempo que eu economizei foi direto pra prospectar clientes e criar conteúdo. faturei 40% a mais em 2 meses 😮 hoje consigo tocar a loja E ter vida. melhor investimento que fiz sério",
    image: "/julia.webp",
  },
  {
    name: "Bia G.",
    role: "Estudante e Social Media, 20 anos",
    quote:
      "vc acredita que sobrou tempo até pra academia?? kkkkk antes era impossível encaixar qualquer coisa. agora faço TCC, freela e ainda assisto série. não volto mais pro caos n",
    image: "/mariana.webp",
  },
] as const

export function TestimonialsSection() {
  return (
    <SectionTracker sectionId="testimonials">
      <section id="depoimentos" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
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
                className="flex size-10 items-center justify-center rounded-full bg-[#25d366] ring-4 ring-white"
                style={{ marginLeft: "-10px" }}
              >
                <span className="text-[11px] font-black text-white">+1k</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 mt-2">
              <span className="text-yellow-400 text-lg tracking-tight">★★★★★</span>
              <span className="text-sm font-bold text-slate-500">4.9 · +1.200 usuários</span>
            </div>
            <h2 className="text-center text-4xl font-black tracking-tighter text-slate-900 md:text-6xl mt-6">
              Veja o que as pessoas estão fazendo <br /> com as <span className="text-[#25d366]">2h extras.</span>
            </h2>
          </div>

          {/* Depoimentos */}
          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <div key={i} className="flex gap-4 rounded-[2.5rem] bg-slate-50 p-8 ring-1 ring-slate-200 shadow-sm">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="shrink-0 rounded-full object-cover size-11 ring-2 ring-white"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-base font-black text-slate-900">{t.name}</span>
                    <span className="text-sm font-medium text-slate-500">· {t.role}</span>
                  </div>
                  <p className="text-base text-slate-600 font-medium leading-relaxed">{t.quote}</p>
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
