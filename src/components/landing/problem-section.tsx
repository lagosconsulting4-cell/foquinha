import { SectionTracker } from "@/components/analytics/section-tracker"

export function ProblemSection() {
  return (
    <SectionTracker sectionId="problem">
      <section className="bg-white py-8 px-4 sm:px-6 md:py-16 md:rounded-t-[3rem] md:-mt-10 relative z-20">
        <div className="mx-auto max-w-5xl">

          {/* Headline Aspiracional */}
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-black tracking-tighter text-slate-900 md:text-5xl lg:text-6xl">
              O que você faz com 2h <br className="md:hidden" /> extras por dia?
            </h2>
            <p className="mt-4 text-base font-medium text-slate-600 md:text-2xl md:mt-6">
              Conquistas de verdade. Seu tempo de volta. <br className="md:hidden" /> <span className="text-[#25d366] font-bold">Tudo no WhatsApp.</span>
            </p>
          </div>

          {/* Conquistas Possíveis */}
          <div className="mb-16 grid gap-8 md:grid-cols-3">
            {/* 1 */}
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow-[0_10px_30px_-10px_rgba(15,23,42,0.05)] ring-1 ring-slate-900/5 md:p-6 md:rounded-[2rem]">
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-slate-50 text-2xl md:mb-6 md:size-16 md:rounded-3xl md:text-3xl">📚</div>
              <h3 className="mb-3 text-lg font-bold text-slate-900">Aprender algo novo</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Aquele curso, idioma ou habilidade que você sempre quis mas &quot;não tem tempo&quot;.
              </p>
            </div>

            {/* 2 */}
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow-[0_10px_30px_-10px_rgba(15,23,42,0.05)] ring-1 ring-slate-900/5 md:p-6 md:rounded-[2rem]">
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-red-50 text-2xl md:mb-6 md:size-16 md:rounded-3xl md:text-3xl">❤️</div>
              <h3 className="mb-3 text-lg font-bold text-slate-900">Estar com quem importa</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tempo de qualidade com família, amigos, ou simplesmente cuidar de você.
              </p>
            </div>

            {/* 3 */}
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow-[0_10px_30px_-10px_rgba(15,23,42,0.05)] ring-1 ring-slate-900/5 md:p-6 md:rounded-[2rem]">
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-blue-50 text-2xl md:mb-6 md:size-16 md:rounded-3xl md:text-3xl">🚀</div>
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
