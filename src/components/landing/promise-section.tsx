import { Check } from "lucide-react"
import { SectionTracker } from "@/components/analytics/section-tracker"

export function PromiseSection() {
  return (
    <SectionTracker sectionId="promise">
      <section className="bg-gradient-to-b from-slate-50 to-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Com a Foquinha, você não faz mais coisas.
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-xl font-semibold leading-relaxed text-slate-900">
              Você para de carregar tudo na cabeça.
            </p>

            <div className="mx-auto max-w-2xl space-y-4">
              <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <Check className="size-6 flex-shrink-0 text-secondary" />
                <span className="text-base font-semibold text-slate-700">
                  Menos coisa esquecida
                </span>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <Check className="size-6 flex-shrink-0 text-secondary" />
                <span className="text-base font-semibold text-slate-700">
                  Menos culpa
                </span>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <Check className="size-6 flex-shrink-0 text-secondary" />
                <span className="text-base font-semibold text-slate-700">
                  Menos apps abertos
                </span>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <Check className="size-6 flex-shrink-0 text-secondary" />
                <span className="text-base font-semibold text-slate-700">
                  Mais clareza no dia
                </span>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <Check className="size-6 flex-shrink-0 text-secondary" />
                <span className="text-base font-semibold text-slate-700">
                  Alguém que gerencia para você só executar.
                </span>
              </div>
            </div>

            <div className="mx-auto mt-12 max-w-2xl rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 p-8 shadow-sm">
              <p className="text-lg font-bold text-secondary">
                É organização que funciona até nos dias bagunçados.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SectionTracker>
  )
}
