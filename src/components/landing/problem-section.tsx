import { SectionTracker } from "@/components/analytics/section-tracker"

export function ProblemSection() {
  return (
    <SectionTracker sectionId="problem">
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 rounded-t-[3rem] -mt-10 relative z-20">
        <div className="mx-auto max-w-5xl">

          {/* Headline Aspiracional */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-slate-900 md:text-5xl lg:text-6xl">
              E se você tivesse 2 horas extras todo dia?
            </h2>
            <p className="mt-6 text-xl font-medium text-[#25d366] md:text-2xl">
              Pensa no que você poderia fazer:
            </p>
          </div>

          {/* Conquistas Possíveis */}
          <div className="mb-16 grid gap-8 md:grid-cols-3">
            {/* 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-[2rem] shadow-[0_10px_30px_-10px_rgba(15,23,42,0.05)] ring-1 ring-slate-900/5">
              <div className="mb-6 flex size-16 items-center justify-center rounded-3xl bg-slate-50 text-3xl">📚</div>
              <h3 className="mb-3 text-lg font-bold text-slate-900">Aprender algo novo</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Aquele curso, idioma ou habilidade que você sempre quis mas &quot;não tem tempo&quot;.
              </p>
            </div>

            {/* 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-[2rem] shadow-[0_10px_30px_-10px_rgba(15,23,42,0.05)] ring-1 ring-slate-900/5">
              <div className="mb-6 flex size-16 items-center justify-center rounded-3xl bg-red-50 text-3xl">❤️</div>
              <h3 className="mb-3 text-lg font-bold text-slate-900">Estar com quem importa</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tempo de qualidade com família, amigos, ou simplesmente cuidar de você.
              </p>
            </div>

            {/* 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-[2rem] shadow-[0_10px_30px_-10px_rgba(15,23,42,0.05)] ring-1 ring-slate-900/5">
              <div className="mb-6 flex size-16 items-center justify-center rounded-3xl bg-blue-50 text-3xl">🚀</div>
              <h3 className="mb-3 text-lg font-bold text-slate-900">Focar no que gera resultado</h3>
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
