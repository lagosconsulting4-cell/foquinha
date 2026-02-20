import Image from "next/image"
import { SectionTracker } from "@/components/analytics/section-tracker"

const benefits = [
  {
    step: "1",
    title: 'Manda um "Oi" no WhatsApp',
    description: "Começa na hora. Sem criar conta, sem baixar nada.",
    image: "https://i.ibb.co/whfjxxX8/Telas-Foquinha-1200-x-750-px-6.png",
  },
  {
    step: "2",
    title: "Conta o que precisa lembrar",
    description: "Consultas, tarefas, reuniões — ela organiza tudo.",
    image: "https://i.ibb.co/v4X7wb9X/Telas-Foquinha-1200-x-750-px-7.png",
  },
  {
    step: "3",
    title: "Recebe sua agenda direto no zap",
    description: "Lista clara com horários e prioridades.",
    image: "https://i.ibb.co/9kdmVsMs/Plano-personalizado.webp",
  },
  {
    step: "4",
    title: "Lembretes na hora certa",
    description: "Avisos curtos no momento certo.",
    image: "https://i.ibb.co/8nFZHgf8/Telas-Foquinha-1200-x-750-px-8.png",
  },
  {
    step: "5",
    title: "Mudou o dia? Ela reorganiza",
    description: "Atrasou ou surgiu algo? Ela redistribui automaticamente.",
    image: "https://i.ibb.co/ZRKFpdV9/Reorganiza-quando-preciso.webp",
  },
  {
    step: "6",
    title: "Resumo semanal",
    description: "Veja o que fez e o que ficou pendente.",
    image: "https://i.ibb.co/RTrL3N3m/Relatorio.webp",
  },
] as const

const rows = [
  { emoji: "📲", label: "Abrir apps / anotar", without: "15 min", with: "0" },
  { emoji: "✍️", label: "Atualizar tarefas", without: "25 min", with: "0" },
  { emoji: "🤔", label: "Reorganizar ao atrasar", without: "30 min", with: "0" },
  { emoji: "🔍", label: "Lembrar onde anotou", without: "20 min", with: "0" },
] as const

export function BenefitsSection() {
  return (
    <SectionTracker sectionId="benefits">
      <section style={{ backgroundColor: "#F0F9F1" }} className="px-4 pb-14 pt-10 sm:px-6">
        <div className="mx-auto max-w-lg">

          {/* Headline */}
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Como a Foquinha te devolve 2h por dia?
            </h2>
          </div>

          {/* Mockups */}
          <div className="space-y-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 flex size-9 items-center justify-center rounded-full bg-secondary text-white shadow-sm">
                  <span className="text-sm font-bold">{benefit.step}</span>
                </div>
                <div className="mb-4 w-full">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    width={600}
                    height={900}
                    className="w-full object-contain drop-shadow-md"
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                </div>
                <h3 className="text-base font-bold text-slate-900">{benefit.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* A conta */}
          <div className="mt-14">
            <div className="mb-3 grid grid-cols-[1fr_5rem_5rem] gap-x-2 px-2">
              <span />
              <span className="text-center text-[10px] font-bold uppercase tracking-widest text-red-400">Antes</span>
              <span className="text-center text-[10px] font-bold uppercase tracking-widest text-secondary">Com Foquinha</span>
            </div>

            <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200/60 bg-white overflow-hidden">
              {rows.map((row, i) => (
                <div key={i} className="grid grid-cols-[1fr_5rem_5rem] items-center gap-x-2 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{row.emoji}</span>
                    <span className="text-xs font-medium text-slate-700">{row.label}</span>
                  </div>
                  <span className="text-center text-xs font-bold text-red-500">{row.without}</span>
                  <span className="text-center text-sm text-secondary font-bold">✓</span>
                </div>
              ))}
              <div className="grid grid-cols-[1fr_5rem_5rem] items-center gap-x-2 bg-slate-50 px-4 py-3.5">
                <span className="text-xs font-bold text-slate-700">Total</span>
                <span className="text-center text-sm font-black text-red-500">90 min</span>
                <span className="text-center text-sm font-black text-secondary">10 seg</span>
              </div>
            </div>

            {/* Resultado */}
            <div className="mt-4 text-center">
              <div className="inline-flex flex-col items-center gap-0.5 rounded-full bg-secondary px-6 py-3">
                <span className="text-[11px] font-medium text-black/60">Você economiza</span>
                <span className="text-lg font-black text-slate-900">~2h por dia</span>
              </div>
              <p className="mt-2 text-xs text-slate-400">= 730h/ano = 30 dias inteiros de volta</p>
            </div>
          </div>

        </div>
      </section>
    </SectionTracker>
  )
}
