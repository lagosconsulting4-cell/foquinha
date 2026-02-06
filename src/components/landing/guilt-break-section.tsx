import { SectionTracker } from "@/components/analytics/section-tracker"

export function GuiltBreakSection() {
  return (
    <SectionTracker sectionId="guilt-break">
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="mb-8 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              O problema não é você.
            </h2>

            <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-slate-700">
              A maioria dos sistemas de organização falha porque depende de uma coisa difícil:
            </p>

            <p className="mx-auto mb-6 max-w-2xl text-xl font-bold leading-relaxed text-secondary">
              👉 você lembrar de usar.
            </p>

            <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-slate-700">
              Se precisa abrir app, planejar tudo certinho e manter constância perfeita…
              <br />
              em uma vida real, isso não se sustenta.
            </p>

            <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 p-8 shadow-sm">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-white p-3 shadow-sm ring-1 ring-green-100">
                  <span className="text-3xl">🧩</span>
                </div>
              </div>
              <p className="mb-2 text-lg font-semibold text-slate-800">
                Não é falta de vontade.
              </p>
              <p className="text-lg font-bold text-secondary">
                É falta de um sistema que funcione do jeito que a sua vida já é.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SectionTracker>
  )
}
