import { Check, Rocket, Zap, Target, Clock, Brain } from "lucide-react"
import { SectionTracker } from "@/components/analytics/section-tracker"
import { AnimatedCounter } from "@/components/ui/animated-counter"

export function PromiseSection() {
  return (
    <SectionTracker sectionId="promise">
      <section className="bg-gradient-to-b from-slate-50 to-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Transforme sua rotina em resultados reais
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-slate-600 leading-relaxed">
              Mais produtividade, menos estresse. <span className="text-slate-900 font-semibold">Tudo no WhatsApp.</span>
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {/* Card 1 */}
            <div className="flex flex-col gap-4 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-md hover:ring-slate-200">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Check className="size-6" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-slate-900 leading-none">
                    <AnimatedCounter value="3x" /> mais
                  </span>
                  <span className="text-base font-medium text-slate-600">tarefas concluídas</span>
                </div>
              </div>
              <p className="text-slate-600 pl-16 border-l-2 border-blue-100">
                Lembretes ativos que te mantêm no ritmo da semana.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-4 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-md hover:ring-slate-200">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                  <Clock className="size-6" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-slate-900 leading-none">
                    Economize <AnimatedCounter value="2h" />
                  </span>
                  <span className="text-base font-medium text-slate-600">por dia em organização</span>
                </div>
              </div>
              <p className="text-slate-600 pl-16 border-l-2 border-amber-100">
                Sem perder tempo trocando entre apps e planners.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-4 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-md hover:ring-slate-200">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                  <Target className="size-6" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-slate-900 leading-none">
                    <AnimatedCounter value="100%" /> das metas
                  </span>
                  <span className="text-base font-medium text-slate-600">acompanhadas</span>
                </div>
              </div>
              <p className="text-slate-600 pl-16 border-l-2 border-red-100">
                Nada fica esquecido, tudo é monitorado de perto.
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col gap-4 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-md hover:ring-slate-200">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-600">
                  <Zap className="size-6" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-slate-900 leading-none">
                    Produtividade <AnimatedCounter value="+40%" />
                  </span>
                  <span className="text-base font-medium text-slate-600">maior no dia a dia</span>
                </div>
              </div>
              <p className="text-slate-600 pl-16 border-l-2 border-yellow-100">
                Foco total no que importa, sem distrações.
              </p>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col gap-4 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-md hover:ring-slate-200">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
                  <Rocket className="size-6" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-slate-900 leading-none">
                    Objetivos <AnimatedCounter value="5x" />
                  </span>
                  <span className="text-base font-medium text-slate-600">mais rápidos</span>
                </div>
              </div>
              <p className="text-slate-600 pl-16 border-l-2 border-purple-100">
                Consistência diária que gera resultados reais.
              </p>
            </div>

            {/* Card 6 */}
            <div className="flex flex-col gap-4 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-md hover:ring-slate-200">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-pink-50 text-pink-600">
                  <Brain className="size-6" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-slate-900 leading-none">
                    Menos <AnimatedCounter value="80%" />
                  </span>
                  <span className="text-base font-medium text-slate-600">procrastinação</span>
                </div>
              </div>
              <p className="text-slate-600 pl-16 border-l-2 border-pink-100">
                Alguém te lembrando no momento exato de agir.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-6 py-3 shadow-sm">
              <span className="text-2xl">📈</span>
              <p className="text-lg font-medium text-slate-800">
                Não é só organização. É evolução real, mensurável e no seu ritmo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SectionTracker>
  )
}
