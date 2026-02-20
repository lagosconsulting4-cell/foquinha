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
      <section className="bg-gradient-to-b from-slate-50 to-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              O que você faz com 2h extras por dia?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-500">
              Conquistas reais. Tempo de volta.{" "}
              <span className="font-semibold text-slate-700">Tudo no WhatsApp.</span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-5">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="flex flex-col items-start rounded-2xl border border-slate-200/70 p-5"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(241,245,249,0.8) 100%)",
                  boxShadow:
                    "0 2px 20px -4px rgba(18,140,126,0.10), 0 1px 6px -2px rgba(0,0,0,0.05)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span className="text-4xl font-black text-slate-900 leading-none sm:text-5xl">
                  {metric.isAnimated ? (
                    <AnimatedCounter value={metric.value} />
                  ) : (
                    metric.value
                  )}
                </span>
                <span className="mt-1.5 text-xs font-medium text-slate-500 sm:text-sm">
                  {metric.label}
                </span>
                <div className="mt-3 h-0.5 w-8 rounded-full bg-secondary" />
              </div>
            ))}
          </div>

          {/* Banner 2h */}
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 shadow-lg">
              <span className="text-xl">⏰</span>
              <p className="text-sm font-medium text-white sm:text-base">
                2h/dia &nbsp;·&nbsp; 730h/ano &nbsp;·&nbsp;{" "}
                <strong className="text-secondary">30 dias inteiros de volta</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </SectionTracker>
  )
}
