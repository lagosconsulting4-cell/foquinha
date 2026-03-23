import Image from "next/image"
import { SectionTracker } from "@/components/analytics/section-tracker"

const benefits = [
  {
    step: "1",
    title: 'Mande um "oi"',
    description: "Escreva ou fale o que você precisa lembrar, do seu jeito.",
    image: "/benefit_new1.jpg",
  },
  {
    step: "2",
    title: "É só isso :)",
    description: "Ela entende, prioriza e anota na hora.",
    image: "/benefit_new2.jpg",
  },
  {
    step: "3",
    title: "Agora é com ela",
    description: "Ela te avisa na hora certa, direto no seu zap.",
    image: "/benefit_new3.jpg",
  }
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
      <section id="funciona" className="bg-white py-8 px-4 sm:px-6 md:py-16 lg:px-8 border-t border-[rgba(26,35,30,0.05)]">
        <div className="mx-auto max-w-5xl">

          {/* Headline */}
          <div className="mb-16 text-center">
            <h2 className="text-2xl font-black tracking-tighter text-slate-900 md:text-6xl">
              Organizar sua vida <br /> <span className="text-[#25d366]">nunca foi tão fácil.</span>
            </h2>
          </div>

          {/* Mockups */}
          <div className="space-y-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center justify-between text-center p-4 bg-slate-50 rounded-[1.5rem] mb-10 overflow-hidden md:flex-row md:text-left md:p-10 gap-10 ring-1 ring-slate-200 shadow-sm transition-all hover:shadow-md">
                
                <div className="flex-1 w-full scale-100">
                  <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#25d366] text-white shadow-[0_10px_20px_-10px_rgba(37,211,102,0.3)] md:size-14 md:rounded-2xl">
                      <span className="text-lg font-black md:text-xl">{benefit.step}</span>
                    </div>
                                        <h3 className="text-lg font-black tracking-tight text-slate-900 leading-tight md:text-4xl">{benefit.title}</h3>
                  </div>
                  <p className="mt-3 text-base font-medium text-slate-600 leading-relaxed text-center md:text-left md:text-xl md:mt-4">{benefit.description}</p>
                </div>
                
                <div className="w-full relative rounded-2xl overflow-hidden shadow-xl flex-1 border border-white/40">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    width={600}
                    height={900}
                    className="w-full object-cover scale-105"
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Removed Table */}

        </div>
      </section>
    </SectionTracker>
  )
}
