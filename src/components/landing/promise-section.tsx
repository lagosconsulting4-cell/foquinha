import { Check, Rocket, Zap, Target, Clock, Brain } from "lucide-react"
import { SectionTracker } from "@/components/analytics/section-tracker"
import { AnimatedCounter } from "@/components/ui/animated-counter"

const metrics = [
  {
    icon: Clock,
    value: "2h",
    label: "por dia de volta",
    isAnimated: true,
    prefix: "Ganhe ",
  },
  {
    icon: Check,
    value: "3x",
    label: "tarefas concluídas",
    isAnimated: true,
    prefix: "",
    suffix: " mais",
  },
  {
    icon: Target,
    value: "100%",
    label: "metas no radar",
    isAnimated: true,
    prefix: "",
  },
  {
    icon: Zap,
    value: "+40%",
    label: "mais produtividade",
    isAnimated: false,
  },
  {
    icon: Rocket,
    value: "5x",
    label: "mais rápido",
    isAnimated: true,
    prefix: "Conquiste ",
  },
  {
    icon: Brain,
    value: "-80%",
    label: "menos ansiedade",
    isAnimated: false,
  },
] as const

export function PromiseSection() {
  return (
    <SectionTracker sectionId="promise">
      <section className="bg-[#F3EFE6] px-4 py-8 sm:px-6 md:py-16 lg:px-8 border-y border-[rgba(26,35,30,0.05)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/50 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-10 md:mb-20">
            <h2 className="mb-4 text-2xl font-black tracking-tighter text-[#1A231E] md:text-5xl lg:text-5xl">
              O que você faz com 2h extras por dia?
            </h2>
            <p className="mx-auto max-w-2xl text-base font-medium text-[#4A6B56] md:text-xl">
              Conquistas de verdade. Seu tempo de volta.{" "}
              <span className="font-bold text-[#1A231E]">Tudo no WhatsApp.</span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-5">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-2xl bg-white p-4 shadow-[0_30px_60px_-15px_rgba(26,35,30,0.1)] transition-transform hover:-translate-y-2 ring-1 ring-[#1A231E]/5 md:p-8 md:rounded-[2.5rem]"
              >
                <div className="text-3xl font-black tracking-tighter text-[#1A231E] leading-none md:text-6xl">
                  {metric.isAnimated ? (
                    <AnimatedCounter value={metric.value} />
                  ) : (
                    metric.value
                  )}
                </div>
                <div className="mt-2 text-[10px] font-bold text-[#4A6B56] uppercase tracking-wider md:text-base">
                  {metric.label}
                </div>
                <div className="mt-4 h-1 w-10 rounded-full bg-[#25d366]" />
              </div>
            ))}
          </div>

          {/* Banner 2h */}
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#2A3630] px-6 py-3 shadow-[0_10px_30px_-10px_rgba(34,42,38,0.2)]">
              <span className="text-xl">⏰</span>
              <p className="text-sm font-medium text-white sm:text-base">
                2h/dia &nbsp;·&nbsp; 730h/ano &nbsp;·&nbsp;{" "}
                <strong className="text-[#25D366]">30 dias inteiros de volta</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </SectionTracker>
  )
}
