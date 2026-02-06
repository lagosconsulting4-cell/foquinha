import { AlertTriangle, Fingerprint, FileQuestion } from "lucide-react"
import { SectionTracker } from "@/components/analytics/section-tracker"

export function ProblemSection() {
  return (
    <SectionTracker sectionId="problem">
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">

          {/* Headline de Identificação */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Por que parece tão difícil se manter organizado?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Você já conhece esse ciclo:
            </p>
          </div>

          {/* O Ciclo da Falha (3 Pilares) */}
          <div className="grid gap-8 md:grid-cols-3 md:text-center">
            {/* 1 */}
            <div className="flex flex-col items-center">
              <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <FileQuestion className="size-7" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">O Cemitério de Apps</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Você baixa o app da moda, usa por 2 dias, e depois ele vira apenas mais um ícone esquecido na tela do celular.
              </p>
            </div>

            {/* 2 */}
            <div className="flex flex-col items-center">
              <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <AlertTriangle className="size-7" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">Anota e Esquece</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                O problema não é anotar. É lembrar de abrir o caderno (ou o app) na hora certa para conferir o que anotou.
              </p>
            </div>

            {/* 3 */}
            <div className="flex flex-col items-center">
              <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <Fingerprint className="size-7" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">A Culpa Constante</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                No fim do dia, fica aquela sensação amarga de que você produziu pouco, mesmo tendo trabalhado muito.
              </p>
            </div>
          </div>

          {/* A Virada de Chave (The Pivot) */}
          <div className="mt-20 rounded-3xl bg-slate-50 p-8 md:p-12 text-center ring-1 ring-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl mb-6">
              Você não precisa de <span className="text-red-500 line-through decoration-2 decoration-red-500/50">mais disciplina</span>.
            </h3>
            <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                A maioria dos sistemas falha por um motivo simples:
                <strong className="block mt-1 text-slate-900">Eles estão fora da sua rotina.</strong>
              </p>
              <p className="text-lg text-slate-700">
                Não é culpa sua. É impossível manter um hábito que exige esforço extra só para começar.
                <br />
                <span className="block mt-4 font-medium text-secondary text-xl">
                  E se a sua agenda morasse onde você já está o dia todo?
                </span>
              </p>
            </div>
          </div>

        </div>
      </section>
    </SectionTracker>
  )
}
