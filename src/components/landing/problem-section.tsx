import { SectionTracker } from "@/components/analytics/section-tracker"

export function ProblemSection() {
  return (
    <SectionTracker sectionId="problem">
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">

          {/* Headline Aspiracional */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              E se você tivesse 2 horas extras todo dia?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Pensa no que você poderia fazer:
            </p>
          </div>

          {/* Conquistas Possíveis */}
          <div className="mb-16 grid gap-6 md:grid-cols-3">
            {/* 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 text-5xl">📚</div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">Aprender algo novo</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Aquele curso, idioma ou skill que você sempre quis mas &quot;não tem tempo&quot;.
              </p>
            </div>

            {/* 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 text-5xl">❤️</div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">Estar com quem importa</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tempo de qualidade com família, amigos, ou simplesmente cuidar de você.
              </p>
            </div>

            {/* 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 text-5xl">🚀</div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">Focar no que gera resultado</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Projetos, metas, sonhos — tudo que te faz evoluir de verdade.
              </p>
            </div>
          </div>


        </div>
      </section>
    </SectionTracker>
  )
}
