import { Check, Shield } from "lucide-react"
import { SectionTracker } from "@/components/analytics/section-tracker"

export function SecuritySection() {
  return (
    <SectionTracker sectionId="security">
      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Título */}
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              7 dias para colocar sua vida nos trilhos ou seu dinheiro de volta.
            </h2>
          </div>

          {/* Bullets */}
          <div className="mx-auto max-w-2xl space-y-4">
            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <Check className="size-6 flex-shrink-0 text-secondary" />
              <p className="text-base font-semibold text-slate-700">
                Não tem uso perfeito
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <Check className="size-6 flex-shrink-0 text-secondary" />
              <p className="text-base font-semibold text-slate-700">
                Não tem meta diária
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <Check className="size-6 flex-shrink-0 text-secondary" />
              <p className="text-base font-semibold text-slate-700">
                Não quebra se você sumir
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <Check className="size-6 flex-shrink-0 text-secondary" />
              <p className="text-base font-semibold text-slate-700">
                Você pode parar quando quiser
              </p>
            </div>
          </div>

          {/* Garantia */}
          <div className="mx-auto mt-12 max-w-2xl text-center">
            <div className="rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 p-8 shadow-sm">
              <p className="mb-4 text-lg font-semibold text-slate-900">
                Teste sem risco.
                <br />
                Se não fizer sentido, a gente devolve seu dinheiro.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-6 py-3">
                <Shield className="size-5 text-secondary" />
                <span className="text-sm font-bold text-secondary">
                  7 DIAS DE GARANTIA TOTAL. SEM PERGUNTAS.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionTracker>
  )
}
