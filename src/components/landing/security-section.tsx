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
              Experimente 7 dias sem risco. Veja quanto tempo você ganha.
            </h2>
          </div>

          {/* Garantia - Visual Destacado estilo Porquim */}
          <div className="mx-auto mt-12 max-w-2xl text-center">
            <div className="rounded-3xl bg-gradient-to-r from-secondary/10 to-secondary/5 p-10 shadow-2xl ring-2 ring-secondary/30">
              {/* Ícone Grande de Escudo + Moeda */}
              <div className="mx-auto mb-6 flex size-24 items-center justify-center rounded-full bg-white shadow-lg">
                <div className="relative">
                  <Shield className="size-12 text-secondary" strokeWidth={2} fill="currentColor" fillOpacity={0.2} />
                  <div className="absolute -bottom-1 -right-1 flex size-8 items-center justify-center rounded-full bg-yellow-400 text-slate-900 shadow-md">
                    <span className="text-lg font-bold">R$</span>
                  </div>
                </div>
              </div>

              <p className="mb-4 text-2xl font-bold text-secondary">
                Garantia de 7 Dias
              </p>
              <p className="mb-6 text-lg text-slate-700">
                Teste sem risco. Se não ganhar pelo menos 1h por dia,<br />devolvemos <strong>100% do seu dinheiro</strong>. Sem perguntas.
              </p>
              <div className="space-y-2 text-sm text-slate-600">
                <p>✅ Cancele online em 30 segundos</p>
                <p>✅ 100% Seguro e Privado</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionTracker>
  )
}
