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
              Experimente 7 dias sem risco. Veja sua agenda funcionando.
            </h2>
          </div>

          {/* Bullets */}
          <div className="mx-auto max-w-2xl space-y-4">
            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200 transition-all hover:shadow-lg">
              <Check className="size-6 flex-shrink-0 text-secondary" strokeWidth={2.5} />
              <div className="text-left">
                <p className="text-lg font-bold text-slate-900">
                  100% Seguro e Privado
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Seus dados são seus. Criptomilitares e total privacidade.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200 transition-all hover:shadow-lg">
              <Check className="size-6 flex-shrink-0 text-secondary" strokeWidth={2.5} />
              <div className="text-left">
                <p className="text-lg font-bold text-slate-900">
                  A IA reorganiza quando você atrasa
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Sua agenda se adapta à vida real, não o contrário
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200 transition-all hover:shadow-lg">
              <Check className="size-6 flex-shrink-0 text-secondary" strokeWidth={2.5} />
              <div className="text-left">
                <p className="text-lg font-bold text-slate-900">
                  Lembretes ativos que te mantêm no ritmo
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Lembretes inteligentes no momento certo
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200 transition-all hover:shadow-lg">
              <Check className="size-6 flex-shrink-0 text-secondary" strokeWidth={2.5} />
              <div className="text-left">
                <p className="text-lg font-bold text-slate-900">
                  Cancele online em 30 segundos
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Sem burocracia
                </p>
              </div>
            </div>
          </div>

          {/* Garantia */}
          <div className="mx-auto mt-12 max-w-2xl text-center">
            <div className="rounded-2xl bg-gradient-to-r from-secondary/10 to-secondary/5 p-8 shadow-lg ring-2 ring-secondary/20">
              <p className="mb-4 text-xl font-bold text-secondary">
                100% Satisfação Garantida
              </p>
              <p className="mb-6 text-base text-slate-700">
                7 dias para testar tudo. Não gostou? Devolvemos seu dinheiro.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-6 py-3">
                <Shield className="size-5 text-secondary" />
                <span className="text-sm font-bold text-secondary">
                  SEM PERGUNTAS. SEM BUROCRACIA.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionTracker>
  )
}
