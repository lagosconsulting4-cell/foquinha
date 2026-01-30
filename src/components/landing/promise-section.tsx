import { Check } from "lucide-react"
import { SectionTracker } from "@/components/analytics/section-tracker"
import { AnimatedCounter } from "@/components/ui/animated-counter"

export function PromiseSection() {
  return (
    <SectionTracker sectionId="promise">
      <section className="bg-gradient-to-b from-slate-50 to-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Transforme sua rotina em resultados reais
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-xl font-semibold leading-relaxed text-slate-900">
              Mais produtividade, menos estresse. Tudo no WhatsApp.
            </p>

            <div className="mx-auto max-w-2xl space-y-4">
              <div className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200 transition-all hover:shadow-lg">
                <Check className="size-6 flex-shrink-0 text-secondary" strokeWidth={2.5} />
                <div className="text-left">
                  <span className="text-lg font-bold text-slate-900">
                    <AnimatedCounter value="3x" /> mais tarefas concluídas por semana
                  </span>
                  <p className="mt-1 text-sm text-slate-600">
                    Cobrança ativa que te mantém no ritmo
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200 transition-all hover:shadow-lg">
                <Check className="size-6 flex-shrink-0 text-secondary" strokeWidth={2.5} />
                <div className="text-left">
                  <span className="text-lg font-bold text-slate-900">
                    Economize <AnimatedCounter value="2h" /> por dia em organização
                  </span>
                  <p className="mt-1 text-sm text-slate-600">
                    Sem perder tempo entre apps e planners
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200 transition-all hover:shadow-lg">
                <Check className="size-6 flex-shrink-0 text-secondary" strokeWidth={2.5} />
                <div className="text-left">
                  <span className="text-lg font-bold text-slate-900">
                    <AnimatedCounter value="100%" /> das suas metas acompanhadas
                  </span>
                  <p className="mt-1 text-sm text-slate-600">
                    Nada fica esquecido, tudo é monitorado
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200 transition-all hover:shadow-lg">
                <Check className="size-6 flex-shrink-0 text-secondary" strokeWidth={2.5} />
                <div className="text-left">
                  <span className="text-lg font-bold text-slate-900">
                    Aumente sua produtividade em <AnimatedCounter value="40%" />
                  </span>
                  <p className="mt-1 text-sm text-slate-600">
                    Foco no que importa, sem distrações
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200 transition-all hover:shadow-lg">
                <Check className="size-6 flex-shrink-0 text-secondary" strokeWidth={2.5} />
                <div className="text-left">
                  <span className="text-lg font-bold text-slate-900">
                    Conquiste objetivos <AnimatedCounter value="5x" /> mais rápido
                  </span>
                  <p className="mt-1 text-sm text-slate-600">
                    Consistência diária que gera resultados
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200 transition-all hover:shadow-lg">
                <Check className="size-6 flex-shrink-0 text-secondary" strokeWidth={2.5} />
                <div className="text-left">
                  <span className="text-lg font-bold text-slate-900">
                    Reduza procrastinação em <AnimatedCounter value="80%" />
                  </span>
                  <p className="mt-1 text-sm text-slate-600">
                    Alguém te cobrando no momento certo
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-12 max-w-2xl rounded-2xl bg-gradient-to-r from-secondary/10 to-secondary/5 p-8 shadow-lg ring-2 ring-secondary/20">
              <p className="text-xl font-bold text-secondary">
                Não é só organização. É evolução real, mensurável e no seu ritmo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SectionTracker>
  )
}
